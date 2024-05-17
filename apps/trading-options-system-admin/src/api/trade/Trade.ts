import { Option } from "../option/Option";
import { User } from "../user/User";

export type Trade = {
  createdAt: Date;
  id: string;
  option?: Option | null;
  price: number | null;
  quantity: number | null;
  tradeDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
