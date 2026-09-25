import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import type { Profile, Skill } from '../../generated/prisma/client.js';
import { ProfileModel } from '../profile/models/profile.model.js';
import { SkillService } from './skill.service.js';

@Resolver(() => ProfileModel)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @ResolveField()
  skills(@Parent() profile: Profile): Promise<Skill[]> {
    return this.skillService.findByProfile(profile.id);
  }
}
