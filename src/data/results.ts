export type MethodCategory = "RAG" | "Memory" | "Proposed";

export interface MemorySystemResult {
  method: string;
  category: MethodCategory;
  recall: number;
  causal: number;
  stateUpdate: number;
  stateAbstract: number;
  avg: number;
}

export interface LLMResult {
  model: string;
  recall: number;
  causal: number;
  stateUpdate: number;
  stateAbstract: number;
  avg: number;
}

export interface DomainStat {
  domain: string;
  source: string;
  samples: number;
  qaPairs: number;
  avgTurns: number;
  avgTokens: number;
  image: string;
}

export interface AblationResult {
  variant: string;
  recall: number;
  causal: number;
  stateUpdate: number;
  stateAbstract: number;
  avg: number;
}

export const memorySystemResults: MemorySystemResult[] = [
  { method: "BM25", category: "RAG", recall: 0.3301, causal: 0.4264, stateUpdate: 0.3450, stateAbstract: 0.2498, avg: 0.3436 },
  { method: "Qwen3-Emb-4B", category: "RAG", recall: 0.4843, causal: 0.4974, stateUpdate: 0.3520, stateAbstract: 0.3011, avg: 0.4227 },
  { method: "GraphRAG", category: "RAG", recall: 0.3077, causal: 0.3905, stateUpdate: 0.3140, stateAbstract: 0.2879, avg: 0.3258 },
  { method: "HippoRAG2", category: "RAG", recall: 0.4579, causal: 0.5080, stateUpdate: 0.4403, stateAbstract: 0.3538, avg: 0.4480 },
  { method: "MemAgent", category: "Memory", recall: 0.2550, causal: 0.3380, stateUpdate: 0.2849, stateAbstract: 0.2202, avg: 0.2768 },
  { method: "MEM1", category: "Memory", recall: 0.1180, causal: 0.1427, stateUpdate: 0.1205, stateAbstract: 0.1080, avg: 0.1229 },
  { method: "A-MEM", category: "Memory", recall: 0.3084, causal: 0.3653, stateUpdate: 0.3088, stateAbstract: 0.2873, avg: 0.3186 },
  { method: "Mem0", category: "Memory", recall: 0.2011, causal: 0.2645, stateUpdate: 0.2101, stateAbstract: 0.1516, avg: 0.2104 },
  { method: "MemoRAG", category: "Memory", recall: 0.4708, causal: 0.5497, stateUpdate: 0.4257, stateAbstract: 0.3659, avg: 0.4606 },
  { method: "MemGPT", category: "Memory", recall: 0.3289, causal: 0.4404, stateUpdate: 0.2809, stateAbstract: 0.2526, avg: 0.3304 },
  { method: "Mem-alpha", category: "Memory", recall: 0.2876, causal: 0.4172, stateUpdate: 0.3064, stateAbstract: 0.2171, avg: 0.3117 },
  { method: "MemoryBank", category: "Memory", recall: 0.3231, causal: 0.4100, stateUpdate: 0.3006, stateAbstract: 0.3332, avg: 0.3397 },
  { method: "SimpleMem", category: "Memory", recall: 0.2012, causal: 0.1884, stateUpdate: 0.1764, stateAbstract: 0.1373, avg: 0.1811 },
  { method: "AMA-Agent", category: "Proposed", recall: 0.6238, causal: 0.6145, stateUpdate: 0.5305, stateAbstract: 0.4719, avg: 0.5722 },
];

export const llmResults: LLMResult[] = [
  { model: "Claude Haiku 3.5", recall: 0.4943, causal: 0.4507, stateUpdate: 0.4287, stateAbstract: 0.3090, avg: 0.4361 },
  { model: "GPT-5-mini", recall: 0.6951, causal: 0.7157, stateUpdate: 0.6575, stateAbstract: 0.6235, avg: 0.6784 },
  { model: "GPT 5.2", recall: 0.7741, causal: 0.8047, stateUpdate: 0.6563, stateAbstract: 0.6037, avg: 0.7226 },
  { model: "Gemini 2.5 Flash", recall: 0.5834, causal: 0.5087, stateUpdate: 0.5000, stateAbstract: 0.4196, avg: 0.5168 },
  { model: "Qwen2.5-14B-1M", recall: 0.5570, causal: 0.4111, stateUpdate: 0.4728, stateAbstract: 0.3368, avg: 0.4638 },
  { model: "Qwen3-32B", recall: 0.6149, causal: 0.5178, stateUpdate: 0.4903, stateAbstract: 0.3657, avg: 0.5181 },
  { model: "Qwen3-14B", recall: 0.5675, causal: 0.4430, stateUpdate: 0.4502, stateAbstract: 0.3176, avg: 0.4659 },
  { model: "Qwen3-8B", recall: 0.5024, causal: 0.3776, stateUpdate: 0.3987, stateAbstract: 0.2923, avg: 0.4109 },
];

export const domainStats: DomainStat[] = [
  { domain: "Text 2 SQL", source: "Spider", samples: 51, qaPairs: 612, avgTurns: 21.80, avgTokens: 6049, image: "cat-spider" },
  { domain: "Open World Tool QA", source: "GAIA", samples: 30, qaPairs: 360, avgTurns: 41.40, avgTokens: 288651, image: "cat-gaia" },
  { domain: "Web Task Execution", source: "WebArena", samples: 31, qaPairs: 372, avgTurns: 24.77, avgTokens: 34265, image: "cat-webarena" },
  { domain: "Gaming", source: "BALROG", samples: 30, qaPairs: 360, avgTurns: 149.87, avgTokens: 14909, image: "cat-balrog" },
  { domain: "Embodied AI", source: "ALFWorld", samples: 30, qaPairs: 360, avgTurns: 130.33, avgTokens: 26306, image: "cat-alfworld" },
  { domain: "Software Engineering", source: "SWE-bench", samples: 36, qaPairs: 432, avgTurns: 103.22, avgTokens: 19296, image: "cat-swebench" },
];

export const totalStats = { samples: 208, qaPairs: 2496 };

export const ablationResults: AblationResult[] = [
  { variant: "AMA-Agent (Full)", recall: 0.62, causal: 0.61, stateUpdate: 0.53, stateAbstract: 0.47, avg: 0.57 },
  { variant: "w/o Causality Graph", recall: 0.48, causal: 0.48, stateUpdate: 0.36, stateAbstract: 0.35, avg: 0.43 },
  { variant: "w/o Tool-Aug. Retrieval", recall: 0.47, causal: 0.51, stateUpdate: 0.42, stateAbstract: 0.31, avg: 0.44 },
];

export const fullContextBaseline = 0.5181; // Qwen3-32B full context
