const PRIMARY_MULTIPLIER = 0.24
const SECONDARY_MULTIPLIER = 0.318
const TERTIARY_MULTIPLIER = 0.15
const MASTER_ITEM_MULTIPLIER = 0.55

const SPECIALIST_FINAL_AUDITION_GAIN_PRIMARY = 215
const SPECIALIST_FINAL_AUDITION_GAIN_SECONDARY = 129
const SPECIALIST_FINAL_AUDITION_GAIN_TERTIARY = 86

const BALANCED_FINAL_AUDITION_GAIN_PRIMARY = 172
const BALANCED_FINAL_AUDITION_GAIN_SECONDARY = 142
const BALANCED_FINAL_AUDITION_GAIN_TERTIARY = 116

const ASARI_EVENT_TARGET = 1500

function calculateRequiredStats(specialist: boolean): [number, number, number] {
  const finalAuditionGainPrimary = specialist
    ? SPECIALIST_FINAL_AUDITION_GAIN_PRIMARY
    : BALANCED_FINAL_AUDITION_GAIN_PRIMARY
  const finalAuditionGainSecondary = specialist
    ? SPECIALIST_FINAL_AUDITION_GAIN_SECONDARY
    : BALANCED_FINAL_AUDITION_GAIN_SECONDARY
  const finalAuditionGainTertiary = specialist
    ? SPECIALIST_FINAL_AUDITION_GAIN_TERTIARY
    : BALANCED_FINAL_AUDITION_GAIN_TERTIARY

  const statMultiplierGainPrimary = Math.floor(finalAuditionGainPrimary * PRIMARY_MULTIPLIER)
  const statMultiplierGainSecondary = Math.floor(finalAuditionGainSecondary * SECONDARY_MULTIPLIER)
  const statMultiplierGainTertiary = Math.floor(finalAuditionGainTertiary * TERTIARY_MULTIPLIER)

  const itemStatMultiplierGainPrimary = Math.floor(
    finalAuditionGainPrimary * MASTER_ITEM_MULTIPLIER * (PRIMARY_MULTIPLIER + 1),
  )
  const itemStatMultiplierGainSecondary = Math.floor(
    finalAuditionGainSecondary * MASTER_ITEM_MULTIPLIER * (SECONDARY_MULTIPLIER + 1),
  )
  const itemStatMultiplierGainTertiary = Math.floor(
    finalAuditionGainTertiary * MASTER_ITEM_MULTIPLIER * (TERTIARY_MULTIPLIER + 1),
  )

  const totalGainPrimary =
    finalAuditionGainPrimary + statMultiplierGainPrimary + itemStatMultiplierGainPrimary
  const totalGainSecondary =
    finalAuditionGainSecondary + statMultiplierGainSecondary + itemStatMultiplierGainSecondary
  const totalGainTertiary =
    finalAuditionGainTertiary + statMultiplierGainTertiary + itemStatMultiplierGainTertiary

  return [
    ASARI_EVENT_TARGET - totalGainPrimary,
    ASARI_EVENT_TARGET - totalGainSecondary,
    ASARI_EVENT_TARGET - totalGainTertiary,
  ]
}

export { calculateRequiredStats }
