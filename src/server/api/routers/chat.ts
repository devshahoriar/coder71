import z from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const chatRouter = createTRPCRouter({
  chat: publicProcedure
    .input(
      z.object({
        message: z.string().min(1, "Message cannot be empty"),
        sessionId: z.string().optional(),
      }),
    )
    .mutation<{
      type: string;
      sessionId: string;
      message: string;
      task?: string;
    }>(async ({ input,ctx }) => {
      ctx.headers.append("Set-Cookie", "shuvo = 999");
      const { message, sessionId } = input;

      return {
        message: "aiResponse",
        type: "true",
        sessionId: "_sessionId",
      };
    }),
});
