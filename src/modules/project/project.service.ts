import { Injectable } from '@nestjs/common';
import type { Project } from '../../generated/prisma/client.js';
import { ProjectRepository } from './project.repository.js';

@Injectable()
export class ProjectService {
  constructor(private readonly projects: ProjectRepository) {}

  findByProfile(profileId: number): Promise<Project[]> {
    return this.projects.findByProfileId(profileId);
  }
}
