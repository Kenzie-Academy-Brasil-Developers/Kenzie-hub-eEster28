import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

export const InputPassword = ({ error, label, id, register,placeholder }) => {

    const [isHidden, setIsHidden] = useState(true);

    return (
        <div>
            <label className="title two" htmlFor={id}>
                {label}
            </label>

            <div className="password_conteiner">
                <input  className="inp" placeholder={placeholder}  {...register} id={id} type={isHidden ? "password" : "text"} />

                <button type="button" onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? <MdVisibilityOff size={15} /> : <MdVisibility size={12} />}
                </button>
            </div>

            {error ? <p  className="error">{error.message}</p> : null}
        </div>
    );
};

