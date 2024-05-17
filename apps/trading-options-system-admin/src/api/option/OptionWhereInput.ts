import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type OptionWhereInput = {
  asset?: AssetWhereUniqueInput;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  strikePrice?: FloatNullableFilter;
  trades?: TradeListRelationFilter;
  volatility?: FloatNullableFilter;
};
