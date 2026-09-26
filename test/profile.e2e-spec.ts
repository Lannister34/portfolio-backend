import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/database/prisma.service.js';

const prisma = {
  profile: {
    findFirst: vi.fn().mockResolvedValue({
      id: 1,
      name: 'Misha Sokovets',
      description: 'Senior full-stack engineer',
      links: { github: 'https://github.com/Lannister34' },
    }),
  },
  skill: {
    findMany: vi
      .fn()
      .mockResolvedValue([{ id: 1, name: 'TypeScript', category: 'LANGUAGE', profileId: 1 }]),
  },
  experience: {
    findMany: vi.fn().mockResolvedValue([
      {
        id: 1,
        company: 'Atlanta',
        position: 'Senior Full Stack Engineer',
        startDate: new Date('2025-07-01'),
        endDate: null,
        achievements: ['Built a CRM'],
        profileId: 1,
      },
    ]),
  },
  project: {
    findMany: vi.fn().mockResolvedValue([
      {
        id: 1,
        name: 'Portfolio backend',
        description: 'GraphQL business card API',
        url: null,
        repositoryUrl: 'https://github.com/Lannister34/portfolio-backend',
        profileId: 1,
      },
    ]),
  },
};

describe('profile query (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(PrismaService)
      .useValue(prisma)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns the profile with nested data', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
          profile {
            name
            links { github linkedin }
            skills { name category }
            experience { company isCurrent achievements }
            projects { name repositoryUrl }
          }
        }`,
      })
      .expect(200);

    expect(response.body).toEqual({
      data: {
        profile: {
          name: 'Misha Sokovets',
          links: { github: 'https://github.com/Lannister34', linkedin: null },
          skills: [{ name: 'TypeScript', category: 'LANGUAGE' }],
          experience: [{ company: 'Atlanta', isCurrent: true, achievements: ['Built a CRM'] }],
          projects: [
            {
              name: 'Portfolio backend',
              repositoryUrl: 'https://github.com/Lannister34/portfolio-backend',
            },
          ],
        },
      },
    });
  });
});
