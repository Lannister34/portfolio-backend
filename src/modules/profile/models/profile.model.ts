import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProfileLinksModel } from './profile-links.model.js';

@ObjectType('Profile')
export class ProfileModel {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => ProfileLinksModel)
  links!: ProfileLinksModel;
}
