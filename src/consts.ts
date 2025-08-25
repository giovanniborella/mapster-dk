import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Mapster.dk",
  EMAIL: "rgb@mapster.dk",
  NUM_PROJECTS_ON_HOMEPAGE: 3
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Minimal and lightweight portfolio.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, physical and digital.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/giovanniborella"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/giovanniborella",
  },
  {
    NAME: "Instagram",
    HREF: "https://www.instagram.com/mapsterdk/"
  }
];
