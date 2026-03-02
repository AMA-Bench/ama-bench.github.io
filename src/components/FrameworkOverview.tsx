import { Search, GitBranch, RefreshCw, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import memformImg from "@/assets/figures/memform.png";

const capabilities = [
  {
    icon: Search,
    title: "Recall",
    badge: "Memory Retrieval",
    desc: "What is the value of object X at step Y?",
  },
  {
    icon: GitBranch,
    title: "Causal Inference",
    badge: "Memory Retrieval",
    desc: "What's the pre-condition of action Z?",
  },
  {
    icon: RefreshCw,
    title: "State-Updating",
    badge: "Memory Evolution",
    desc: "Current hidden state of Object X at step Y?",
  },
  {
    icon: Layers,
    title: "State Abstraction",
    badge: "Memory Condensation",
    desc: "Key observation between step X to Y?",
  },
];

const FrameworkOverview = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-16 md:py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-accent-blue mb-2 tracking-wider">
          02 — FRAMEWORK
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          Memory Formulation
        </h2>

        <div
          className={cn(
            "opacity-0 translate-y-8 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <img
            src={memformImg}
            alt="Memory formulation framework"
            className="w-full max-w-4xl mx-auto mb-12 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={cn(
                "opacity-0 translate-y-8 transition-all duration-700",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <Card className="h-full">
                <CardContent className="p-5 flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-accent-blue-light shrink-0">
                    <cap.icon size={20} className="text-accent-blue" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{cap.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {cap.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "{cap.desc}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkOverview;
