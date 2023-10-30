import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { useForm } from "react-hook-form"
import { Input } from "../Forms/Input"
import { Select } from "../Forms/Select"

export const EditTechModal = () => {
    const {editTechs, editingTech, setVisibleEditing} = useContext(TechContext)
    const { register, handleSubmit } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status,
        }
    })

    return(
        <div role="dialog">
        <div>
          <div>
            <h2>Tecnologia Detalhes</h2>
            <button onClick={() => setVisibleEditing(false) }>X</button>
          </div>
          <form onSubmit={handleSubmit(editTechs)}>
  
            <Input
              label="Nome"
              id="title"
              type="text"
              placeholder="Digite o nome da tecnologia"
              {...register("title")}
            />
  
            <Select label="Selecionar  status" id="status"  {...register("status")} >
              <option value="">Selecione o status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
  
            <button type="submit">Salvar alterações</button>
          </form>
        </div>
      </div>
    )
}