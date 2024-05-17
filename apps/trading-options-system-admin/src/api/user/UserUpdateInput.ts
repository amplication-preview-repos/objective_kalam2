import { PortfolioUpdateManyWithoutUsersInput } from "./PortfolioUpdateManyWithoutUsersInput";
import { TradeUpdateManyWithoutUsersInput } from "./TradeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  portfolios?: PortfolioUpdateManyWithoutUsersInput;
  trades?: TradeUpdateManyWithoutUsersInput;
  username?: string | null;
};
