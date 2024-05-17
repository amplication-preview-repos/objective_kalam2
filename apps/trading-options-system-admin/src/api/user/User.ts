import { Portfolio } from "../portfolio/Portfolio";
import { Trade } from "../trade/Trade";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  portfolios?: Array<Portfolio>;
  trades?: Array<Trade>;
  updatedAt: Date;
  username: string | null;
};
