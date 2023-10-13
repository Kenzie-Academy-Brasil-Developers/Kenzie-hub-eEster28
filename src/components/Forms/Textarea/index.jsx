import { forwardRef } from "react";

export const Textarea = forwardRef(({ error,id, label, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={id}>
                {label}
            </label>
            <textarea ref={ref} {...rest}></textarea>
            {error ? <p>{error.message}</p> : null}
        </div>
    );
});
