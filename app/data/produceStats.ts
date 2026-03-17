const ProduceStats = {
  Vo: 0,
  Da: 1,
  Vi: 2,
} as const

type ProduceStat = (typeof ProduceStats)[keyof typeof ProduceStats]

export type { ProduceStat }
export { ProduceStats }
