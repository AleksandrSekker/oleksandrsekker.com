import { z } from "zod";

export const schema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().nonempty().email(),
  subject: z.string().min(4),
  message: z.string().min(8),
});
