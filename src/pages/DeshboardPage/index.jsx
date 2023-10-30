import { useContext } from "react"
import { HeaderDeshboard } from "../../components/Headers/HeaderDeshboard"
import { AddTechSection } from "../../components/Sections/AddTechSection"
import { UserSection } from "../../components/Sections/UserSection"
import { TechContext } from "../../providers/TechContext"
import { CreateTechModal } from "../../components/CreateTechModal"
import { TechList } from "../../components/Sections/TechList"
import { EditTechModal } from "../../components/EditTechModal"

export const DeshboardPage = () => {
    const {visibleAdd,  visibleEditing} = useContext(TechContext)

    return (
        <>
            <HeaderDeshboard />
            <main>
                <UserSection/>
                <AddTechSection />
                <TechList/>
                {visibleAdd && <CreateTechModal/>}
                {visibleEditing && <EditTechModal/>}
            </main>
        </>
    )
}