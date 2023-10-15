import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

export const InputPassword = ({ error, label, id, register }) => {

    const [isHidden, setIsHidden] = useState(true);

    return (
        <div>
            <label htmlFor={id}>
                {label}
            </label>

            <div>
                <input {...register} id={id} type={isHidden ? "password" : "text"} />

                <button type="button" onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? <MdVisibilityOff size={15} /> : <MdVisibility size={15} />}
                </button>
            </div>

            {error ? <p>{error.message}</p> : null}
        </div>
    );
};

