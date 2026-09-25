import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { SkillCategory } from '../../../generated/prisma/client.js';

registerEnumType(SkillCategory, { name: 'SkillCategory' });

@ObjectType('Skill')
export class SkillModel {
  @Field()
  name!: string;

  @Field(() => SkillCategory)
  category!: SkillCategory;
}
