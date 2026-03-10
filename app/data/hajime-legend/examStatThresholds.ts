import type { Stat } from "@/types/stat"

interface ExamStatThresholds {
    midterms: [Stat, Stat, Stat],
    finals: [Stat, Stat, Stat]
}

export { type ExamStatThresholds }
