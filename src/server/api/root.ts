import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { blogpostRouter } from "~/server/api/routers/blogpost";
import { personalInfoRouter } from "~/server/api/routers/personalinfo";
import { aboutRouter } from "~/server/api/routers/about";
import { skillRouter } from "~/server/api/routers/skill";
import { projectRouter } from "~/server/api/routers/project";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  blogpost: blogpostRouter,
  personalInfo: personalInfoRouter,
  about: aboutRouter,
  skill: skillRouter,
  projects: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
