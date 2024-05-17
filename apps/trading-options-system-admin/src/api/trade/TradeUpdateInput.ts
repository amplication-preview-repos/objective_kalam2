import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeUpdateInput = {
  option?: OptionWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
  tradeDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
