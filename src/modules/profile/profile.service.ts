import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from '../../generated/prisma/client.js';
import { ProfileRepository } from './profile.repository.js';
import { ProfileLinks, profileLinksSchema } from './profile-links.js';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getProfile(): Promise<Profile> {
    const profile = await this.profileRepository.findFirst();
    if (profile === null) {
      throw new NotFoundException('Profile is not found');
    }
    return profile;
  }

  linksOf(profile: Profile): ProfileLinks {
    return profileLinksSchema.parse(profile.links);
  }
}
