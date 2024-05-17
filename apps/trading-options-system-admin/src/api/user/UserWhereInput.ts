import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PortfolioListRelationFilter } from "../portfolio/PortfolioListRelationFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  portfolios?: PortfolioListRelationFilter;
  trades?: TradeListRelationFilter;
  username?: StringNullableFilter;
};
