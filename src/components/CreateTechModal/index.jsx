import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Forms/Input"
import { Select } from "../Forms/Select"
import { createTechSchema } from "./createTechModal.schema"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"


export const CreateTechModal = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(createTechSchema) })
  const {createTech, setVisibleAdd} = useContext(TechContext)

  return (
    <div role="dialog">
      <div>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setVisibleAdd(false) }>X</button>
        </div>
        <form onSubmit={handleSubmit(createTech)}>

          <Input
            label="Nome"
            id="title"
            type="text"
            placeholder="Digite o nome da tecnologia"
            error={errors.title}
            {...register("title")}
          />

          <Select label="Selecionar  status" id="status " error={errors.status}  {...register("status")} >
            <option value="">Selecione o status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </div>
  )
}