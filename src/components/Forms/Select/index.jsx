import { forwardRef } from "react"

export const Select = forwardRef(({ error, children,label, ...res }, ref) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select {...res} ref={ref}>
                {children}
            </select>
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})









