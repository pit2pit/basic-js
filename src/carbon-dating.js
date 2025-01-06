const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
function dateSample(sampleActivity) {
  const activity = parseFloat(sampleActivity);
  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }
  const decayConstant = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / activity) / decayConstant;
  return Math.floor(age);
}
