import { pilgrimageSites } from "./pilgrimagesite";

const sites = pilgrimageSites;

export const getAllImages = sites.map((site) => {
  return site.image;
})