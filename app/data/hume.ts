import { Distribution, type Idol } from './idol'
import { ProduceStats } from './produceStats'

const hanamiUme: Idol = {
  statDistribution: Distribution.Balanced,
  stats: [ProduceStats.Da, ProduceStats.Vo, ProduceStats.Vi],
}

export { hanamiUme }
