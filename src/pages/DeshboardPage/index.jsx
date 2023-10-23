import { HeaderDeshboard } from "../../components/Headers/HeaderDeshboard"
import { FeedSection } from "../../components/Sections/FeedSection"
import { UserSection } from "../../components/Sections/UserSection"

export const DeshboardPage = () => {
    return (
        <>
            <HeaderDeshboard />
            <main>
                <UserSection/>
                <FeedSection />
            </main>
        </>
    )
}