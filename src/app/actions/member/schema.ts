import z from "zod";


export const NewMemberSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    phone: z.string().min(1),
    address: z.string().min(1),
    joindate: z.string().min(1),
    expirydate: z.string().min(1),
})

export const UpdateMemberSchema = NewMemberSchema;

export type NewMember = z.infer<typeof NewMemberSchema>
export type UpdateMember = z.infer<typeof UpdateMemberSchema>