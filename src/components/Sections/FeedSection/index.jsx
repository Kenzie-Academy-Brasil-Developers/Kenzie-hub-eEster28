import Style from "./style.module.scss"

export const FeedSection = () => {
    return (
        <section className={Style.conteiner} >
            <div>
                <h2 className="title">Que pena! Estamos em desenvolvimento :(</h2>
                <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
        </section>
    )
}