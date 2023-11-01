import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select } from "../Forms/Select"
import { createTechSchema } from "./createTechModal.schema"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { InputModal } from "../InputModal"


export const CreateTechModal = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(createTechSchema) })
  const {createTech, setVisibleAdd} = useContext(TechContext)

  return (
    <div role="dialog"  className="modalOverlar">
      <div  className="modalContainer">
        <div className="div_title">
          <h2  className="title four fo2">Cadastrar Tecnologia</h2>
          <button className="btn_none delete" onClick={() => setVisibleAdd(false) }>X</button>
        </div>
        <form onSubmit={handleSubmit(createTech)}>

          <InputModal
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

          <button className="btn"  type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </div>
  )
}