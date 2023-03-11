import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const socialsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.socials.findMany({
        select: {
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
        icon: z.string(),
        link: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.socials.create({
          data: {
            icon: input.icon,
            link: input.link,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
