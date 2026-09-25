import { Module } from '@nestjs/common';
import { ProjectRepository } from './project.repository.js';
import { ProjectResolver } from './project.resolver.js';
import { ProjectService } from './project.service.js';

@Module({
  providers: [ProjectResolver, ProjectService, ProjectRepository],
})
export class ProjectModule {}
