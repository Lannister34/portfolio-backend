import { z } from 'zod';

export const profileLinksSchema = z.object({
  github: z.url().optional(),
  linkedin: z.url().optional(),
});
export type ProfileLinks = z.infer<typeof profileLinksSchema>;
