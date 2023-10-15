import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { loginFormSchema } from "./loginForm.schema"
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPassword } from "../InputPassword";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const LoginForm = ({setUser}) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginFormSchema) })

    const navigate = useNavigate();

    const submit  = async (useData) => {
        try {
            const { data } = await api.post("/sessions", useData);
            setUser(data.user.name)
            localStorage.setItem("@TOKEN", data.token);
            navigate("/deshboard");
            toast.success("Login realizado com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Opss! Algo deu errado!");
        }
    };
    
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    error={errors.email}
                    {...register("email")}
                />
    
                <InputPassword
                    label="Senha"
                    id="password"
                    error={errors.password}
                    register={register("password")}
                />
                <button type="submit">Entrar</button>
            </form>
            <span>Ainda não possui uma conta?</span>
            <button onClick={()=> navigate("/register")}>Cadastre-se</button>
        </div>
    )
} 