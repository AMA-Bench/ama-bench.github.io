import { AlertTriangle, GitBranch, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const insights = [
  {
    icon: AlertTriangle,
    title: "Memory systems underperform full context",
    body: "Most memory systems score below the 51.81% Qwen3-32B full-context baseline. This reveals a fundamental gap: current memory architectures lose critical information during compression and retrieval, making them unreliable for long-horizon agentic tasks.",
  },
  {
    icon: GitBranch,
    title: "Causality is critical",
    body: "Removing the causality graph from AMA-Agent drops average accuracy by 14 percentage points (57% → 43%). Causal reasoning — understanding why actions happened and their preconditions — is the single most important capability for agent memory.",
  },
  {
    icon: Wrench,
    title: "Tool-augmented retrieval matters",
    body: "Removing tool-augmented retrieval drops accuracy by 13 percentage points (57% → 44%). Tools allow the agent to actively query and verify information rather than passively reading from memory, leading to more precise and reliable answers.",
  },
];

const Insights = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-16 md:py-24 px-6 bg-[hsl(var(--hero-bg))]" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-accent-blue mb-2 tracking-wider">
          05 — INSIGHTS
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          Key Insights
        </h2>

        <div
          className={cn(
            "opacity-0 translate-y-8 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {insights.map((item, i) => (
              <AccordionItem
                key={i}
                value={`insight-${i}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="hover:no-underline gap-3">
                  <div className="flex items-center gap-3 text-left">
                    <item.icon size={18} className="text-accent-blue shrink-0" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Insights;
