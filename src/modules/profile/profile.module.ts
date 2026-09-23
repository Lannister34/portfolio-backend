import { Module } from '@nestjs/common';
import { ProfileRepository } from './profile.repository.js';
import { ProfileService } from './profile.service.js';

@Module({
  providers: [ProfileService, ProfileRepository],
  exports: [ProfileRepository],
})
export class ProfileModule {}
