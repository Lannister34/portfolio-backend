import { Module } from '@nestjs/common';
import { SkillRepository } from './skill.repository.js';
import { SkillResolver } from './skill.resolver.js';
import { SkillService } from './skill.service.js';

@Module({
  providers: [SkillResolver, SkillService, SkillRepository],
})
export class SkillModule {}
