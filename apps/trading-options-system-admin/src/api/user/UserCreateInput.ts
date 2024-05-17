import { PortfolioCreateNestedManyWithoutUsersInput } from "./PortfolioCreateNestedManyWithoutUsersInput";
import { TradeCreateNestedManyWithoutUsersInput } from "./TradeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  portfolios?: PortfolioCreateNestedManyWithoutUsersInput;
  trades?: TradeCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
