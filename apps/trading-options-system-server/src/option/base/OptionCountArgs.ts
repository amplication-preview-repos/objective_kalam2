/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OptionWhereInput } from "./OptionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class OptionCountArgs {
  @ApiProperty({
    required: false,
    type: () => OptionWhereInput,
  })
  @Field(() => OptionWhereInput, { nullable: true })
  @Type(() => OptionWhereInput)
  where?: OptionWhereInput;
}

export { OptionCountArgs as OptionCountArgs };
