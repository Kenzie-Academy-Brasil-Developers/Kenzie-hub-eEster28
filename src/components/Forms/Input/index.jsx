import { forwardRef } from "react"

export const Input = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div>
            <label className="title two" htmlFor={id}>
                {label}
            </label>
            <input className="inp" ref={ref} {...rest} />
            {error ? <p className="error">{error.message}</p> : null}
        </div>
    )
})
