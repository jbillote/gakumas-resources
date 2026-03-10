import { arimuraMao } from './amao'
import { amayaTsubame } from './atbm'
import { fujitaKotone } from './fktn'
import { hatayaMisuzu } from './hmsz'
import { himesakiRinami } from './hrnm'
import { hanamiSaki } from './hski'
import { hanamiUme } from './hume'
import { juouSena } from './jsna'
import { kuramotoChina } from './kcna'
import { katsuragiLilja } from './kllj'
import { shinosawaHiro } from './shro'
import { shiunSumika } from './ssmk'
import { tsukimuraTemari } from './ttmr'
import type { ExamStatThresholds } from './examStatThresholds'

const characterStats: Record<string, ExamStatThresholds> = {
  amao: arimuraMao,
  atbm: amayaTsubame,
  fktn: fujitaKotone,
  hmsz: hatayaMisuzu,
  hrnm: himesakiRinami,
  hski: hanamiSaki,
  hume: hanamiUme,
  jsna: juouSena,
  kcna: kuramotoChina,
  kllj: katsuragiLilja,
  shro: shinosawaHiro,
  ssmk: shiunSumika,
  ttmr: tsukimuraTemari,
}

export { characterStats }
