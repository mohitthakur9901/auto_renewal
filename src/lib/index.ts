import { join } from "path";
import { z } from "zod"; // make sure zod is imported

export const User = z.object({
  username: z.string(),
  email: z.string(),
  phone: z.string(),
  upiid: z.string(),
});
export const MemberSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  joindate: z.string(),
  expirydate: z.string(),
});
