import { TARGET_RATINGS } from '../data/targetRatings'

const STAT_CAP = 2800
const STAT_RATING_MULTIPLIER = 2.1

const PLACEMENT_BONUS = 120

const PLACEMENT_RATING = 1700

const MIDTERM_RATING_MULTIPLIER = [
  { threshold: 200000, multiplier: 0 },
  { threshold: 60000, multiplier: 0.001 },
  { threshold: 50000, multiplier: 0.002 },
  { threshold: 40000, multiplier: 0.003 },
  { threshold: 30000, multiplier: 0.008 },
  { threshold: 20000, multiplier: 0.05 },
  { threshold: 10000, multiplier: 0.08 },
  { threshold: 0, multiplier: 0.11 },
]

const FINALS_RATING_MULTIPLIER = [
  { threshold: 8700, base: 2000000, multiplier: 0 },
  { threshold: 7300, base: 600000, multiplier: 0.001 },
  { threshold: 6500, base: 500000, multiplier: 0.008 },
  { threshold: 4500, base: 300000, multiplier: 0.01 },
  { threshold: 0, base: 0, multiplier: 0.015 },
]

function calculateCurrentRating(vo: number, da: number, vi: number, midtermScore: number): number {
  let statRating = 0
  statRating += Math.min(vo + PLACEMENT_BONUS, STAT_CAP)
  statRating += Math.min(da + PLACEMENT_BONUS, STAT_CAP)
  statRating += Math.min(vi + PLACEMENT_BONUS, STAT_CAP)
  statRating = Math.floor(statRating * STAT_RATING_MULTIPLIER)

  let midtermRating = 0
  for (const { threshold, multiplier } of MIDTERM_RATING_MULTIPLIER) {
    if (midtermScore > threshold) {
      midtermRating += (midtermScore - threshold) * multiplier
      midtermScore = threshold
    }
  }
  midtermRating = Math.floor(midtermRating)

  return PLACEMENT_RATING + statRating + midtermRating
}

function calculateTargetScores(currentRating: number): Record<string, number> {
  const targetScores: Record<string, number> = {}

  for (const key of Object.keys(TARGET_RATINGS)) {
    const targetRating = TARGET_RATINGS[key as keyof typeof TARGET_RATINGS] - currentRating
    for (const { threshold, base, multiplier } of FINALS_RATING_MULTIPLIER) {
      if (targetRating <= threshold || targetScores[key]) {
        continue
      }

      targetScores[key] = Math.ceil(base + (targetRating - threshold) / multiplier)
    }
  }

  return targetScores
}

export { calculateCurrentRating, calculateTargetScores }
