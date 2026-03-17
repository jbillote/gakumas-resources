import type { Stat } from '@/types/stat'
import { Distribution, type DistributionType } from './idol'

const HajimeLegendExamStatThresholds: Record<
  DistributionType,
  Record<string, [Stat, Stat, Stat]>
> = {
  [Distribution.Specialist]: {
    midterms: [
      {
        nijuumaru: 648,
        maru: 584,
        sankaku: 519,
      },
      {
        nijuumaru: 432,
        maru: 390,
        sankaku: 347,
      },
      {
        nijuumaru: 360,
        maru: 325,
        sankaku: 289,
      },
    ],
    finals: [
      {
        nijuumaru: 2124,
        maru: 1914,
        sankaku: 1703,
      },
      {
        nijuumaru: 1417,
        maru: 1277,
        sankaku: 1136,
      },
      {
        nijuumaru: 1180,
        maru: 1064,
        sankaku: 947,
      },
    ],
  },
  [Distribution.Balanced]: {
    midterms: [
      {
        nijuumaru: 618,
        maru: 557,
        sankaku: 495,
      },
      {
        nijuumaru: 460,
        maru: 415,
        sankaku: 369,
      },
      {
        nijuumaru: 359,
        maru: 324,
        sankaku: 288,
      },
    ],
    finals: [
      {
        nijuumaru: 2028,
        maru: 1828,
        sankaku: 1627,
      },
      {
        nijuumaru: 1510,
        maru: 1361,
        sankaku: 1211,
      },
      {
        nijuumaru: 1179,
        maru: 1063,
        sankaku: 946,
      },
    ],
  },
}

export { HajimeLegendExamStatThresholds }
