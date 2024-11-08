import { pilgrimageSites } from "./pilgrimagesite";

const sites = pilgrimageSites;

export const getAllDioceses = sites.map((site) => {
  return site.diocese;
});
