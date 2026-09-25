import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import type { Profile } from '../../generated/prisma/client.js';
import { ProfileModel } from '../profile/models/profile.model.js';
import { ExperienceService, type ExperienceWithStatus } from './experience.service.js';

@Resolver(() => ProfileModel)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @ResolveField()
  experience(@Parent() profile: Profile): Promise<ExperienceWithStatus[]> {
    return this.experienceService.findByProfile(profile.id);
  }
}
