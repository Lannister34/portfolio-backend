import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service.js';
import type { Skill } from '../../generated/prisma/client.js';

@Injectable()
export class SkillRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByProfileId(profileId: number): Promise<Skill[]> {
    return this.prisma.skill.findMany({ where: { profileId }, orderBy: { id: 'asc' } });
  }
}
