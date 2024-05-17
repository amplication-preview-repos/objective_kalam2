import { OptionUpdateManyWithoutAssetsInput } from "./OptionUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  name?: string | null;
  options?: OptionUpdateManyWithoutAssetsInput;
  price?: number | null;
  volume?: number | null;
};
