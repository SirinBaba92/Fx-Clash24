import { BaseStat, Rarity } from '@/types';

export interface Part {
  id: number;
  name: string;
  rarity: Rarity;
  series: number;
  stats: PartStat[];
}

export interface PartStat extends BaseStat {
  speed: number;
  cornering: number;
  powerUnit: number;
  qualif: number;
  pitStopTime: number;
}
