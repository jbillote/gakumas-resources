import type { ProduceStat } from './produceStats'

const Distribution = {
  Balanced: 'balanced',
  Specialist: 'specialist',
} as const

type DistributionType = (typeof Distribution)[keyof typeof Distribution]

interface Idol {
  statDistribution: DistributionType
  stats: [ProduceStat, ProduceStat, ProduceStat]
}

export type { Idol, DistributionType }
export { Distribution }
