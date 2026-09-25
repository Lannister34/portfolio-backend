import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType('Experience')
export class ExperienceModel {
  @Field()
  company!: string;

  @Field()
  position!: string;

  @Field(() => GraphQLISODateTime)
  startDate!: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endDate!: Date | null;

  @Field()
  isCurrent!: boolean;

  @Field(() => [String])
  achievements!: string[];
}
