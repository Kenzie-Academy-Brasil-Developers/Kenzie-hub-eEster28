import { forwardRef } from "react"

export const Select = forwardRef(({ error, children, ...res }, ref) => {

    return (
        <div>
            <select {...res} ref={ref}>
                {children}
            </select>
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})












{/* <div>
<select {...register("departament")}>
  <option value="">Selecione um setor</option>
  <option value="ensino">Ensino</option>
  <option value="desing">Design</option>
  <option value="programação">Programação</option>
</select>
{errors.departament && <p>{errors.departament.message}</p>}
</div> */}