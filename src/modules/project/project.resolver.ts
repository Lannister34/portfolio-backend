import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import type { Profile, Project } from '../../generated/prisma/client.js';
import { ProfileModel } from '../profile/models/profile.model.js';
import { ProjectService } from './project.service.js';

@Resolver(() => ProfileModel)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @ResolveField()
  projects(@Parent() profile: Profile): Promise<Project[]> {
    return this.projectService.findByProfile(profile.id);
  }
}
