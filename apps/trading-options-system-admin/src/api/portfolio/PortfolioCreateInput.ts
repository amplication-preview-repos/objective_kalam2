import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioCreateInput = {
  balance?: number | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
