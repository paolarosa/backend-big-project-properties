import { z } from 'zod'

const addressSchema = z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(10).nullish(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const createAddressSchema = addressSchema.omit({
    id: true
})

export { addressSchema, createAddressSchema }