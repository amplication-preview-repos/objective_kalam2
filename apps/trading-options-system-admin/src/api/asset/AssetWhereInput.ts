import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AssetWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  options?: OptionListRelationFilter;
  price?: FloatNullableFilter;
  volume?: IntNullableFilter;
};
