import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { guestbookRouter } from "~/server/api/routers/guestbook";
import { blogpostRouter } from "~/server/api/routers/blogpost";
import { personalInfoRouter } from "~/server/api/routers/personalinfo";
import { aboutRouter } from "~/server/api/routers/about";
import { skillRouter } from "~/server/api/routers/skill";
import { socialsRouter } from "~/server/api/routers/socials";
import { routesRouter } from "~/server/api/routers/routes";
import { projectRouter } from "~/server/api/routers/project";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  guestbook: guestbookRouter,
  blogpost: blogpostRouter,
  personalInfo: personalInfoRouter,
  about: aboutRouter,
  skill: skillRouter,
  socials: socialsRouter,
  routes: routesRouter,
  projects: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
