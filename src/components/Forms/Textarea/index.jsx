import { forwardRef } from "react"

export const Textarea = forwardRef(({ error,id, label, ...rest }, ref) => {
    return (
        <div>
            <label className="title two" htmlFor={id}>
                {label}
            </label>
            <textarea className="inp" ref={ref} {...rest}></textarea>
            {error ? <p  className="error">{error.message}</p> : null}
        </div>
    )
})