import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const blogpostRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.blogpost.findMany({
        select: {
          title: true,
          tags: true,
          description: true,
          image: true,
          createdAt: true,
          updatedAt: true,
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
  getOne: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.blogpost.findUnique({
          where: {
            id: input.id,
          },
          select: {
            title: true,
            body: true,
            description: true,
            tags: true,
            updatedAt: true,
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
        body: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.blogpost.create({
          data: {
            title: input.title,
            body: input.body,
            description: input.description,
            tags: input.tags,
            image: input.image,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
