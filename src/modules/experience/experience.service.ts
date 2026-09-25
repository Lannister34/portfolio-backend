import { Injectable } from '@nestjs/common';
import type { Experience } from '../../generated/prisma/client.js';
import { ExperienceRepository } from './experience.repository.js';

export type ExperienceWithStatus = Experience & { isCurrent: boolean };

@Injectable()
export class ExperienceService {
  constructor(private readonly experiences: ExperienceRepository) {}

  async findByProfile(profileId: number): Promise<ExperienceWithStatus[]> {
    const positions = await this.experiences.findByProfileId(profileId);
    return positions.map((position: Experience) => ({
      ...position,
      isCurrent: position.endDate === null,
    }));
  }
}
