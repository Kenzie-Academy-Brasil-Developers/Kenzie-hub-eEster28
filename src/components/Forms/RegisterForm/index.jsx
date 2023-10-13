import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { Select } from "../Select"
import { Textarea } from "../Textarea"
import { registerFormSchema } from "./registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerFormSchema) })

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>
            <form onSubmit={handleSubmit(submit)}>

                <Input
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="Digite aqui seu nome"
                    error={errors.name}
                    {...register("name")}
                />

                <Input
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="Digite aqui seu email"
                    error={errors.email}
                    {...register("email")}
                />

                <InputPassword
                    label="Senha"
                    id="password"
                    placeholder="Digite aqui sua senha"
                    error={errors.password}
                    register={register("password")}
                />

                <InputPassword
                    label="Confimar Senha"
                    id="password"
                    placeholder="Digite novamente sua senha"
                    error={errors.confirmPassword}
                    register={register("confirmPassword")}
                />

                <Textarea
                    label="Bio"
                    id="bio"
                    placeholder="Fale sobre você"
                    error={errors.bio}
                    {...register("bio")}
                />
                
                <Input
                    label="Contato"
                    id="contact"
                    type="number"
                    placeholder="Opção de contato"
                    error={errors.contact}
                    {...register("contact")}
                />

                <Select  label="Selecionar módulo" id="course_module " error={errors.course_module}  {...register("course_module")} >
                    <option value="">Selecione o módulo</option>
                    <option value="primeiro">Primeiro módulo</option>
                    <option value="segundo">Segundo módulo</option>
                    <option value="terceiro">Terceiro módulo</option>
                    <option value="quarto">Quarto módulo</option>
                    <option value="quinto">Quinto módulo</option>
                    <option value="sexto">Sexto módulo</option>
                </Select>
                <button type="submit">Cadastrar</button>
            </form>
    
        </div>
    )
} 