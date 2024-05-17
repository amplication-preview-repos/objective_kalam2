import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { TradeUpdateManyWithoutOptionsInput } from "./TradeUpdateManyWithoutOptionsInput";

export type OptionUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  expirationDate?: Date | null;
  strikePrice?: number | null;
  trades?: TradeUpdateManyWithoutOptionsInput;
  volatility?: number | null;
};
