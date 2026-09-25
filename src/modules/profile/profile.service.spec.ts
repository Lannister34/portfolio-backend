import { Test } from '@nestjs/testing';
import { Profile } from '../../generated/prisma/client.js';
import { ProfileRepository } from './profile.repository.js';
import { ProfileService } from './profile.service.js';

async function serviceWith(profile: Profile | null): Promise<ProfileService> {
  const moduleRef = await Test.createTestingModule({
    providers: [
      ProfileService,
      {
        provide: ProfileRepository,
        useValue: { findFirst: vi.fn(async (): Promise<Profile | null> => profile) },
      },
    ],
  }).compile();
  return moduleRef.get(ProfileService);
}
describe('ProfileService', () => {
  it('returns the stored profile', async () => {
    const profile: Profile = {
      id: 1,
      name: 'Alex',
      description: 'Backend engineer',
      links: { github: 'https://github.com/alex' },
    };
    const service = await serviceWith(profile);

    await expect(service.getProfile()).resolves.toEqual(profile);
  });
});
