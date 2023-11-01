import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { Select } from "../Select"
import { Textarea } from "../Textarea"
import { registerFormSchema } from "./registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerFormSchema) })
    const {userRegister} = useContext(UserContext)

    return (
        <div className="form_conteiner">
            <h2 className="title">Crie sua conta</h2>
            <span className="headline">Rapido e grátis, vamos nessa</span>
            <form onSubmit={handleSubmit(userRegister)}>

                <Input
                    label="Nome"
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
                    placeholder="Mais uma vez a senha"
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

                <Select label="Selecionar módulo" id="course_module " error={errors.course_module}  {...register("course_module")} >
                    <option value="">Selecione o módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                </Select>
                <button className="btn" type="submit">Cadastrar</button>
            </form>

        </div>
    )
} 