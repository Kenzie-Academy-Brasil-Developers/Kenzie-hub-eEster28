import { z } from "zod";

export const createTechSchema = z.object({
    title: z.string().min(1, "O título é obrigatório."),
    status: z.string().min(1, "Selecionar o status é obrigatória."),
})