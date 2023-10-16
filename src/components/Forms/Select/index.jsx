import { forwardRef } from "react"

export const Select = forwardRef(({ error,id, children,label, ...res }, ref) => {
    return (
        <div>
            <label className="title two" htmlFor={id}>{label}</label>
            <select className="inp select" {...res} ref={ref}>
                {children}
            </select >
            {error ? <p  className="error">{error.message}</p> : null}
        </div>
    )
})









