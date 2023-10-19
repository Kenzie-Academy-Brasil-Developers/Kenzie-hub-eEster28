import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { Select } from "../Select"
import { Textarea } from "../Textarea"
import { registerFormSchema } from "./registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerFormSchema) })

    const navigate = useNavigate()

    const userRegister = async (useData) => {
        try {
            const { data } = await api.post("/users", useData)
            toast.success("Conta criada com sucesso!")
            navigate("/")
        } catch (error) {
            console.error(error)
            toast.error("Opss! Algo deu errado!")
        }
    }
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
                    <option value="primeiro">Primeiro módulo</option>
                    <option value="segundo">Segundo módulo</option>
                    <option value="terceiro">Terceiro módulo</option>
                    <option value="quarto">Quarto módulo</option>
                    <option value="quinto">Quinto módulo</option>
                    <option value="sexto">Sexto módulo</option>
                </Select>
                <button className="btn" type="submit">Cadastrar</button>
            </form>

        </div>
    )
} 