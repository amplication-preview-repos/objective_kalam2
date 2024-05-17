import { Asset } from "../asset/Asset";
import { Trade } from "../trade/Trade";

export type Option = {
  asset?: Asset | null;
  createdAt: Date;
  expirationDate: Date | null;
  id: string;
  strikePrice: number | null;
  trades?: Array<Trade>;
  updatedAt: Date;
  volatility: number | null;
};
