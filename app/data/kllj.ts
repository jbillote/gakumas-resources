import { Distribution, type Idol } from './idol'
import { ProduceStats } from './produceStats'

const katsuragiLilja: Idol = {
  statDistribution: Distribution.Balanced,
  stats: [ProduceStats.Vi, ProduceStats.Da, ProduceStats.Vo],
}

export { katsuragiLilja }
