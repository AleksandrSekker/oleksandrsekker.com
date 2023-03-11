import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.project.findMany({
        select: {
          title: true,
          image: true,
          link: true,
          tags: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
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
        image: z.string(),
        link: z.string(),
        tags: z.array(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.project.create({
          data: {
            title: input.title,
            image: input.image,
            link: input.link,
            tags: input.tags,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
