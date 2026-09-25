import { Module } from '@nestjs/common';
import { ExperienceRepository } from './experience.repository.js';
import { ExperienceResolver } from './experience.resolver.js';
import { ExperienceService } from './experience.service.js';

@Module({
  providers: [ExperienceResolver, ExperienceService, ExperienceRepository],
})
export class ExperienceModule {}
