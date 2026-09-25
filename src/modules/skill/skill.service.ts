import { Injectable } from '@nestjs/common';
import type { Skill } from '../../generated/prisma/client.js';
import { SkillRepository } from './skill.repository.js';

@Injectable()
export class SkillService {
  constructor(private readonly skills: SkillRepository) {}

  findByProfile(profileId: number): Promise<Skill[]> {
    return this.skills.findByProfileId(profileId);
  }
}
