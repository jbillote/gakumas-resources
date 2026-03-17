import { Distribution, type Idol } from './idol'
import { ProduceStats } from './produceStats'

const shinosawaHiro: Idol = {
  statDistribution: Distribution.Balanced,
  stats: [ProduceStats.Vo, ProduceStats.Da, ProduceStats.Vi],
}

export { shinosawaHiro }
