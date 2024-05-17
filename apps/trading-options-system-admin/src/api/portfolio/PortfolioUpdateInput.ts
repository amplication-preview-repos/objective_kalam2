import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PortfolioUpdateInput = {
  balance?: number | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
