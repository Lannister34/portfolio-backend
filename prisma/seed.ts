import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import type { ProfileCreateInput } from '../src/generated/prisma/models.js';

const profile: ProfileCreateInput = {
  name: 'Misha Sokovets',
  description:
    'Senior full-stack engineer with 7 years of commercial experience in JavaScript and TypeScript. I design and build scalable, fault-tolerant applications end-to-end: Node.js backends (NestJS, Express, Fastify), React / Next.js frontends, microservice and event-driven architecture, PostgreSQL and MongoDB, queues and caching, Docker / Kubernetes. Led a team of 2–4 engineers, owning priorities, mentoring and delivery.',
  links: {
    github: 'https://github.com/Lannister34',
    linkedin: 'https://www.linkedin.com/in/misha-s-902a51177',
  },
  skills: {
    create: [
      { name: 'TypeScript', category: 'LANGUAGE' },
      { name: 'JavaScript', category: 'LANGUAGE' },
      { name: 'Node.js', category: 'RUNTIME' },
      { name: 'NestJS', category: 'FRAMEWORK' },
      { name: 'Express', category: 'FRAMEWORK' },
      { name: 'Fastify', category: 'FRAMEWORK' },
      { name: 'React', category: 'FRAMEWORK' },
      { name: 'Next.js', category: 'FRAMEWORK' },
      { name: 'REST API', category: 'API' },
      { name: 'WebSockets', category: 'API' },
      { name: 'PostgreSQL', category: 'DATABASE' },
      { name: 'MongoDB', category: 'DATABASE' },
      { name: 'Redis', category: 'DATABASE' },
      { name: 'Kafka', category: 'INFRASTRUCTURE' },
      { name: 'RabbitMQ', category: 'INFRASTRUCTURE' },
      { name: 'Docker', category: 'INFRASTRUCTURE' },
      { name: 'Kubernetes', category: 'INFRASTRUCTURE' },
      { name: 'AWS', category: 'INFRASTRUCTURE' },
      { name: 'Prometheus', category: 'INFRASTRUCTURE' },
      { name: 'Grafana', category: 'INFRASTRUCTURE' },
      { name: 'Git', category: 'TOOLING' },
      { name: 'GitHub Actions', category: 'TOOLING' },
      { name: 'GitLab CI', category: 'TOOLING' },
      { name: 'Jest', category: 'TOOLING' },
      { name: 'Puppeteer', category: 'TOOLING' },
      { name: 'Playwright', category: 'TOOLING' },
    ],
  },
  experiences: {
    create: [
      {
        company: 'Atlanta',
        position: 'Senior Full Stack Engineer',
        startDate: new Date('2025-07-01'),
        endDate: new Date('2026-05-31'),
        achievements: [
          'Designed and built bidirectional real-time synchronization of all business data between a legacy PHP system and the new Node.js CRM — user profiles, dictionaries, property objects with complex dependencies, property collections, documents, deals — keeping both systems consistent under parallel load.',
          'Designed and built end-to-end an extension-based browser-automation framework for realtors — automating routine workflows and import/export across multiple realty platforms.',
          'Developed backend and frontend features for the realty CRM (Node.js / NestJS, React / Next.js) within an existing codebase, plus features on the legacy PHP side.',
          'Maintained and improved a production Next.js website (TanStack Query) — optimized page load speed by 1.5–2x.',
        ],
      },
      {
        company: 'Bright Data',
        position: 'Senior SERP R&D Engineer',
        startDate: new Date('2022-09-01'),
        endDate: new Date('2025-06-30'),
        achievements: [
          'Owned key subsystems of a distributed SERP scraping platform running Google, Bing, Yandex and others at 50M+ requests/day with a 99%+ success rate.',
          'Implemented and maintained proxy and browser-fingerprint rotation and cooling strategies.',
          'Designed and shipped headless / headful unblocking strategies, bypassing CAPTCHA and other anti-bot protections.',
          'Drove continuous research into anti-bot protections and search-engine changes — reverse-engineering detection systems and prototyping new unblocking strategies.',
          'Developed and maintained SERP parsing modules covering Google and Yandex product verticals.',
          'Product/tech lead for the SERP product area — drove priorities, customer-facing escalations and technical delivery with a 2–4 engineer team.',
          'Optimized proxy infrastructure, achieving ~2x performance improvement.',
        ],
      },
      {
        company: 'Matterway',
        position: 'TypeScript Developer',
        startDate: new Date('2021-09-01'),
        endDate: new Date('2022-09-30'),
        achievements: [
          'Delivered browser-based RPA automations for enterprise clients including Mercedes-Benz, Audi and Porsche, eliminating repetitive manual back-office work — cutting time per workflow from 30 minutes – 2 hours down to ~1 minute.',
          'Worked directly with enterprise stakeholders to map their manual processes and turn them into reliable production automations.',
          'Built three end-to-end automation scenarios on top of a browser-extension framework.',
        ],
      },
      {
        company: 'Atlanta',
        position: 'Full Stack Developer',
        startDate: new Date('2020-11-01'),
        endDate: new Date('2021-07-31'),
        achievements: [
          'Designed and built a CRM from scratch on a microservice architecture (5 services; Node.js, Fastify, React, TypeScript).',
          'Delivered it full-stack — backend services, data layer, and the React frontend.',
          "Improved and maintained the agency's website — new features and fixes.",
        ],
      },
      {
        company: 'Mobster Agency',
        position: 'JavaScript Developer',
        startDate: new Date('2019-04-01'),
        endDate: new Date('2020-07-31'),
        achievements: [
          'Developed and maintained an ad-tech SDK and ad-rotation engine used across partner websites.',
          'Built interactive rich-media banners and landing pages, focused on cross-browser compatibility and performance.',
          'Worked across the JavaScript ad-delivery stack — rendering, targeting and rotation logic.',
        ],
      },
    ],
  },
  projects: {
    create: [
      {
        name: 'Portfolio backend',
        description:
          'GraphQL business card API: NestJS, Prisma, PostgreSQL and Apollo Sandbox, packaged with Docker.',
        repositoryUrl: 'https://github.com/Lannister34/portfolio-backend',
      },
      {
        name: 'devkit',
        description:
          'Portable engineering rules, quality gates and a code-review agent that install into any project through a Claude Code skill.',
        repositoryUrl: 'https://github.com/Lannister34/devkit',
      },
      {
        name: 'ComfyUI Hermes Nodes',
        description: 'Custom nodes for ComfyUI.',
        repositoryUrl: 'https://github.com/Lannister34/ComfyUI-HermesNodes',
      },
      {
        name: 'Immersion AI',
        description:
          'LLM frontend for roleplay and creative writing: SillyTavern-compatible characters, lorebooks, scenarios and AI generation, with a built-in llama-server or any OpenAI-compatible API.',
        repositoryUrl: 'https://github.com/Lannister34/Immersion-AI',
      },
    ],
  },
};

const connectionString: string | undefined = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

try {
  if ((await prisma.profile.count()) > 0) {
    console.log('Profile already exists, seed skipped');
  } else {
    const created = await prisma.profile.create({ data: profile });
    console.log(`Seeded profile "${created.name}"`);
  }
} finally {
  await prisma.$disconnect();
}
