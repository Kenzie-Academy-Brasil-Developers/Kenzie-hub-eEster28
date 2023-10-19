import { z } from "zod"

export const registerFormSchema= z.object({
    name: z.string().min(1,"Nome é obrigatório"),
    email: z.string().min(1,"Email é obrigatório").email("Forneça um email válido"),
    password: z
    .string()
    .min(1,"Senha é obrigatória")
    .min(8, "É necessario pelo menos oito caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessario pelo menos uma letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessario pelo menos uma letra minúscula.")
    .regex(/(?=.*?[#?!@{}<>$^&*-])/,"É necessario pelo menos uma caractere especial.")
    .regex(/(?=.*?[0-9])/, "É necessario pelo menos um número."),
    confirmPassword: z.string().min(1,"Confirmar a senha é obrigatório."),
    bio:z.string().min(1,"A bio é obrigatório"),
    contact:z.string().min(1,"O contato é obrigatório"),
    course_module:z.string().min(1,"É obrigatório selecionar um módulo"),

}).refine(({password, confirmPassword})=> password === confirmPassword, {
    message: "As senha são diferentes ",
    path:["confirmPassword"]
})