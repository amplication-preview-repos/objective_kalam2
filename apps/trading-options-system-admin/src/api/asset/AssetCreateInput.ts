import { OptionCreateNestedManyWithoutAssetsInput } from "./OptionCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  name?: string | null;
  options?: OptionCreateNestedManyWithoutAssetsInput;
  price?: number | null;
  volume?: number | null;
};
