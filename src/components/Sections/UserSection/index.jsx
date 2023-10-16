import Style from "./style.module.scss"

export const UserSection = ({ user }) => {
    return (
        <section className={Style.conteiner}>
            <div>
                <h2 className="title">Olá, {user}</h2>
                <span className="headline bold">Primeiro módulo  (Introdução ao Frontend)</span>
            </div>
        </section>
    )
}