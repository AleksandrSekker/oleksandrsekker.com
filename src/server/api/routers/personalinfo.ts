import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const personalInfoRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.personalinfo.findMany({
        select: {
          firstName: true,
          lastName: true,
          jobTitle: true,
          subTitle: true,
          image: true,
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
        firstName: z.string(),
        lastName: z.string(),
        jobTitle: z.string(),
        subTitle: z.string(),
        image: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.personalinfo.create({
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
            jobTitle: input.jobTitle,
            subTitle: input.subTitle,
            image: input.image,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
