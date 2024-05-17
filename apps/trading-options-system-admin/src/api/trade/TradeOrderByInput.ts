import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  optionId?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  tradeDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
