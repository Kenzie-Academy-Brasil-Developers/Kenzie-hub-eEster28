import { HeaderDeshboard } from "../../components/Headers/HeaderDeshboard"
import { FeedSection } from "../../components/Sections/FeedSection"
import { UserSection } from "../../components/Sections/UserSection"

export const DeshboardPage = ({user, setUser}) => {
    return (
        <>
            <HeaderDeshboard setUser={setUser}/>
            
            <main>
                <UserSection user={user}/>
                <FeedSection/>
            </main>
        </>
    )
}