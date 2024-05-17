import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeCreateInput = {
  option?: OptionWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
  tradeDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
