import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TrajectoryTurn {
  turn_idx: number;
  action: string;
  observation: string;
}

interface QAPair {
  question: string;
  answer: string;
  type: string;
  sub_type: string;
}

export interface TrajectoryExample {
  episode_id: string;
  task: string;
  domain: string;
  num_turns: number;
  total_tokens: number;
  state: string;
  trajectory: TrajectoryTurn[];
  qa_pairs: QAPair[];
}

interface TrajectoryModalProps {
  example: TrajectoryExample | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const typeLabels: Record<string, string> = {
  A: "Recall",
  B: "Causal Inference",
  C: "State-Updating",
  D: "State Abstraction",
};

const typeColors: Record<string, string> = {
  A: "bg-blue-100 text-blue-700 border-blue-200",
  B: "bg-purple-100 text-purple-700 border-purple-200",
  C: "bg-amber-100 text-amber-700 border-amber-200",
  D: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

const TrajectoryModal = ({ example, open, onOpenChange }: TrajectoryModalProps) => {
  const [expandedQA, setExpandedQA] = useState<number | null>(null);

  if (!example) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); setExpandedQA(null); }}>
      <DialogContent className="max-w-6xl w-[95vw] h-[85vh] overflow-hidden flex flex-col p-0">
        {/* Header */}
        <div className="px-6 pt-6 pb-3 border-b border-border shrink-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 flex-wrap">
              <span>Example from {example.domain}</span>
              <Badge variant="outline" className="text-xs font-mono">
                {example.episode_id}
              </Badge>
              <Badge
                variant="secondary"
                className={cn(
                  "text-xs",
                  example.state === "success"
                    ? "bg-green-100 text-green-700 border-green-200"
                    : example.state === "placeholder"
                      ? "bg-muted text-muted-foreground"
                      : "bg-red-50 text-red-600 border-red-200"
                )}
              >
                {example.state}
              </Badge>
            </DialogTitle>
            <DialogDescription className="text-left">
              <span className="font-medium text-foreground">Task:</span> {example.task}
              <span className="ml-4 font-mono text-xs text-muted-foreground">
                {example.num_turns} turns &middot; {example.total_tokens.toLocaleString()} tokens
              </span>
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Split pane */}
        <div className="flex-1 flex min-h-0">
          {/* Left: Trajectory Turns */}
          <div className="flex-1 flex flex-col border-r border-border min-w-0">
            <div className="px-4 py-2 border-b border-border bg-muted/30 shrink-0">
              <h3 className="text-sm font-semibold text-foreground">
                Trajectory
                <span className="ml-2 text-xs font-normal text-muted-foreground font-mono">
                  {example.trajectory.length} turns
                </span>
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {example.trajectory.map((turn) => (
                <div key={turn.turn_idx} className="rounded-lg border border-border bg-muted/50 p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs text-accent-blue font-semibold shrink-0">
                      T{turn.turn_idx}
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-accent-blue/10 text-accent-blue truncate">
                      {turn.action}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap break-words">
                    {turn.observation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: QA Pairs */}
          <div className="w-[45%] flex flex-col min-w-0 shrink-0">
            <div className="px-4 py-2 border-b border-border bg-muted/30 shrink-0">
              <h3 className="text-sm font-semibold text-foreground">
                QA Pairs
                <span className="ml-2 text-xs font-normal text-muted-foreground font-mono">
                  {example.qa_pairs.length} pairs
                </span>
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {example.qa_pairs.length === 0 ? (
                <p className="text-sm text-muted-foreground italic">
                  QA pairs for this domain will be added soon.
                </p>
              ) : (
                example.qa_pairs.map((qa, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-card p-3 cursor-pointer hover:border-accent-blue/40 transition-colors"
                    onClick={() => setExpandedQA(expandedQA === i ? null : i)}
                  >
                    <div className="flex items-start gap-2 mb-1.5">
                      <Badge
                        variant="outline"
                        className={cn("text-[10px] shrink-0 mt-0.5", typeColors[qa.type] || "")}
                      >
                        {typeLabels[qa.type] || qa.type} ({qa.sub_type})
                      </Badge>
                    </div>
                    <p className="text-xs text-foreground leading-relaxed">
                      <span className="font-semibold">Q:</span> {qa.question}
                    </p>
                    {expandedQA === i && (
                      <div className="mt-2 pt-2 border-t border-border">
                        <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          <span className="font-semibold text-foreground">A:</span> {qa.answer}
                        </p>
                      </div>
                    )}
                    {expandedQA !== i && (
                      <p className="text-[10px] text-muted-foreground/60 mt-1 italic">
                        Click to reveal answer
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrajectoryModal;
