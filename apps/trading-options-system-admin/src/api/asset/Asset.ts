import { Option } from "../option/Option";

export type Asset = {
  createdAt: Date;
  id: string;
  name: string | null;
  options?: Array<Option>;
  price: number | null;
  updatedAt: Date;
  volume: number | null;
};
