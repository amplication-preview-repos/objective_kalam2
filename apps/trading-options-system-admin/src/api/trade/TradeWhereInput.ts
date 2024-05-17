import { StringFilter } from "../../util/StringFilter";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeWhereInput = {
  id?: StringFilter;
  option?: OptionWhereUniqueInput;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  tradeDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
