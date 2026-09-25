import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service.js';
import type { Profile } from '../../generated/prisma/client.js';

@Injectable()
export class ProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  findFirst(): Promise<Profile | null> {
    return this.prisma.profile.findFirst();
  }
}
