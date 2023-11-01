import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { useForm } from "react-hook-form"
import { Select } from "../Forms/Select"
import { InputModal } from "../InputModal"

export const EditTechModal = () => {
    const {editTechs, editingTech, setVisibleEditing} = useContext(TechContext)
    const { register, handleSubmit } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status,
        }
    })

    return(
        <div role="dialog" className="modalOverlar">
        <div className="modalContainer">
          <div className="div_title">
            <h2 className="title four fo2">Tecnologia Detalhes</h2>
            <button className="btn_none delete" onClick={() => setVisibleEditing(false) }>X</button>
          </div>
          <form onSubmit={handleSubmit(editTechs)}>
  
            <InputModal
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
  
            <button className="btn" type="submit">Salvar alterações</button>
          </form>
        </div>
      </div>
    )
}