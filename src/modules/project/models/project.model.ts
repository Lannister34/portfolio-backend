import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Project')
export class ProjectModel {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => String, { nullable: true })
  url!: string | null;

  @Field()
  repositoryUrl!: string;
}
