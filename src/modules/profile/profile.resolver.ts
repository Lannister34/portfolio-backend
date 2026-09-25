import { Query, Resolver } from '@nestjs/graphql';
import type { Profile } from '../../generated/prisma/client.js';
import { ProfileModel } from './models/profile.model.js';
import { ProfileService } from './profile.service.js';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel)
  profile(): Promise<Profile> {
    return this.profileService.getProfile();
  }
}
