import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ExperienceModel } from '../../experience/models/experience.model.js';
import { SkillModel } from '../../skill/models/skill.model.js';
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

  @Field(() => [SkillModel])
  skills!: SkillModel[];

  @Field(() => [ExperienceModel])
  experience!: ExperienceModel[];
}
