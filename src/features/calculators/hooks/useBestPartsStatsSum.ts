import type { BestPart, BestPartsSum } from '../types';

interface Props {
  bestBrake: BestPart;
  bestEngine: BestPart;
  bestFrontWing: BestPart;
  bestGearbox: BestPart;
  bestRearWing: BestPart;
  bestSuspension: BestPart;
}

const useBestPartsStatsSum = (props: Props): BestPartsSum => {
  const { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension } = props;

  return {
    cornering:
      bestBrake.stat.cornering +
      bestEngine.stat.cornering +
      bestFrontWing.stat.cornering +
      bestGearbox.stat.cornering +
      bestRearWing.stat.cornering +
      bestSuspension.stat.cornering,
    pitStopTime:
      bestBrake.stat.pitStopTime +
      bestEngine.stat.pitStopTime +
      bestFrontWing.stat.pitStopTime +
      bestGearbox.stat.pitStopTime +
      bestRearWing.stat.pitStopTime +
      bestSuspension.stat.pitStopTime,
    powerUnit:
      bestBrake.stat.powerUnit +
      bestEngine.stat.powerUnit +
      bestFrontWing.stat.powerUnit +
      bestGearbox.stat.powerUnit +
      bestRearWing.stat.powerUnit +
      bestSuspension.stat.powerUnit,
    qualifying:
      bestBrake.stat.qualifying +
      bestEngine.stat.qualifying +
      bestFrontWing.stat.qualifying +
      bestGearbox.stat.qualifying +
      bestRearWing.stat.qualifying +
      bestSuspension.stat.qualifying,
    speed:
      bestBrake.stat.speed +
      bestEngine.stat.speed +
      bestFrontWing.stat.speed +
      bestGearbox.stat.speed +
      bestRearWing.stat.speed +
      bestSuspension.stat.speed,
  };
};

export default useBestPartsStatsSum;
