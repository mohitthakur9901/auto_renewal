import z from "zod";

export const UserSchema = z.object({
    username: z.string().min(1),
    email: z.string().email().min(1),
    phone: z.string().min(1),
    upiid: z.string(),
    address : z.string().min(1),
    placeName: z.string().min(1),
    qrcode : z.string(),
   
});

export type User = z.infer<typeof UserSchema>;