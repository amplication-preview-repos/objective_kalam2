import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { TradeCreateNestedManyWithoutOptionsInput } from "./TradeCreateNestedManyWithoutOptionsInput";

export type OptionCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  expirationDate?: Date | null;
  strikePrice?: number | null;
  trades?: TradeCreateNestedManyWithoutOptionsInput;
  volatility?: number | null;
};
