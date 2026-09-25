import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('ProfileLinks')
export class ProfileLinksModel {
  @Field(() => String, { nullable: true })
  github?: string;

  @Field(() => String, { nullable: true })
  linkedin?: string;
}
