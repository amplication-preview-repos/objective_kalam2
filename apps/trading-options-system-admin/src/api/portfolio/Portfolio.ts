import { User } from "../user/User";

export type Portfolio = {
  balance: number | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
