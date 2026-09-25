import type { ProfileLinksModel } from '../modules/profile/models/profile-links.model.js';

declare global {
  namespace PrismaJson {
    type ProfileLinks = ProfileLinksModel;
  }
}
