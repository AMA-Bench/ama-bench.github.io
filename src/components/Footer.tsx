import { useState } from "react";
import { Copy, Check } from "lucide-react";

const bibtex = `@misc{zhao2026amabenchevaluatinglonghorizonmemory,
      title={AMA-Bench: Evaluating Long-Horizon Memory for Agentic Applications},
      author={Yujie Zhao and Boqin Yuan and Junbo Huang and Haocheng Yuan and Zhongming Yu and Haozhou Xu and Lanxiang Hu and Abhilash Shankarampeta and Zimeng Huang and Wentao Ni and Yuandong Tian and Jishen Zhao},
      year={2026},
      eprint={2602.22769},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2602.22769},
}`;

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-accent-blue mb-2 tracking-wider text-center">
          07 — CITATION
        </p>
        <h2 className="text-2xl font-bold text-center text-foreground mb-6">
          Cite This Work
        </h2>

        <div className="relative rounded-lg bg-muted border border-border overflow-hidden">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-md bg-background border border-border hover:bg-secondary transition-colors"
            aria-label="Copy BibTeX"
          >
            {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
          </button>
          <pre className="p-4 pr-12 text-xs font-mono text-foreground overflow-x-auto whitespace-pre">
            {bibtex}
          </pre>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground space-y-1">
          <p>AMA-Bench — Yujie Zhao, Boqin Yuan, Junbo Huang, Haocheng Yuan et al.</p>
          <p className="text-muted-foreground/60">&copy; 2026 AMA-Bench. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
