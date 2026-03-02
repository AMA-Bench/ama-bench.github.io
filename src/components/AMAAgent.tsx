import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { ablationResults } from "@/data/results";

const ACCENT = "hsl(217, 71%, 53%)";
const MUTED_1 = "hsl(30, 15%, 72%)";
const MUTED_2 = "hsl(30, 10%, 78%)";

const chartData = ablationResults.map((r, i) => ({
  ...r,
  fill: i === 0 ? ACCENT : i === 1 ? MUTED_1 : MUTED_2,
}));

const AblationTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof ablationResults[0] }> }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-background border border-border/50 rounded-lg shadow-xl px-3 py-2 text-xs">
      <p className="font-semibold mb-1">{d.variant}</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-muted-foreground">
        <span>Recall</span><span className="font-mono text-foreground">{(d.recall * 100).toFixed(0)}%</span>
        <span>Causal</span><span className="font-mono text-foreground">{(d.causal * 100).toFixed(0)}%</span>
        <span>State-Update</span><span className="font-mono text-foreground">{(d.stateUpdate * 100).toFixed(0)}%</span>
        <span>State-Abstract</span><span className="font-mono text-foreground">{(d.stateAbstract * 100).toFixed(0)}%</span>
        <span className="font-medium text-foreground">Average</span>
        <span className="font-mono font-medium text-foreground">{(d.avg * 100).toFixed(0)}%</span>
      </div>
    </div>
  );
};

const AMAAgent = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-16 md:py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent-blue mb-2 tracking-wider">
          06 — AMA-AGENT
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          AMA-Agent
        </h2>

        <div
          className={cn(
            "flex flex-col md:flex-row gap-10 items-start opacity-0 translate-y-8 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          {/* Left: description */}
          <div className="md:w-[60%] space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">AMA-Agent</strong> is our proposed memory system that
              achieves <span className="font-mono text-accent-blue font-semibold">57.22%</span> average
              accuracy — surpassing the strongest baseline by <span className="font-mono text-accent-blue font-semibold">11.16%</span>.
            </p>
            <p>
              It features two key components:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Causality Graph</strong> — captures cause-effect
                relationships between actions and state changes, enabling the agent to answer "why"
                and "what-if" questions about the trajectory.
              </li>
              <li>
                <strong className="text-foreground">Tool-Augmented Retrieval</strong> — instead of
                passively searching memory, the agent uses tools to actively query, filter, and verify
                information, leading to more precise answers.
              </li>
            </ul>
            <p className="text-sm">
              The ablation study confirms both components are essential: removing either causes a
              significant accuracy drop.
            </p>
          </div>

          {/* Right: ablation chart */}
          <div className="md:w-[40%] w-full">
            <h3 className="text-sm font-semibold text-foreground mb-4">Ablation Study</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis
                    dataKey="variant"
                    fontSize={11}
                    tick={{ fill: "hsl(0, 0%, 45%)" }}
                    interval={0}
                    angle={-15}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis
                    domain={[0, 0.7]}
                    tickFormatter={(v: number) => `${(v * 100).toFixed(0)}%`}
                    fontSize={12}
                  />
                  <Tooltip content={<AblationTooltip />} cursor={{ fill: "hsl(30, 10%, 95%)" }} />
                  <Bar dataKey="avg" radius={[4, 4, 0, 0]} barSize={40}>
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMAAgent;
