import { SortOrder } from "../../util/SortOrder";

export type OptionOrderByInput = {
  assetId?: SortOrder;
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  strikePrice?: SortOrder;
  updatedAt?: SortOrder;
  volatility?: SortOrder;
};
