import { forwardRef } from "react"

export const InputModal = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div>
            <label className="title two" htmlFor={id}>
                {label}
            </label>
            <input className="inp inp_modal" ref={ref} {...rest} />
            {error ? <p className="error">{error.message}</p> : null}
        </div>
    )
})
