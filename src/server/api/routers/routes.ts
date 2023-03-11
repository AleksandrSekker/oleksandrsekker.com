import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const routesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.routes.findMany({
        select: {
          title: true,
          icon: true,
          link: true,
          id: true,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  postMessage: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        icon: z.string(),
        link: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.routes.create({
          data: {
            title: input.title,
            icon: input.icon,
            link: input.link,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
