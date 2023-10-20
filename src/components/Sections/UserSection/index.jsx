import Style from "./style.module.scss"

export const UserSection = ({ user }) => {
    return (
        <section className={Style.conteiner}>
            <div>
                <h2 className="title">Olá, {user.name}</h2>
                <span className="headline bold"> {user.course_module}  (Conteúdo do módulo)</span>
            </div>
        </section>
    )
}