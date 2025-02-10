import { Outlet } from "react-router-dom"
import styled from "styled-components"
const AppTemplate = styled.section`
    & .app-container{
        padding: 0 3rem;
    } 
    & header{
        background: var(--background);
    }
    `

const TemplateDashboard = () => {
    return (
        <AppTemplate>
            <header>

            </header>
            <main className="app-container">
                <Outlet />
            </main>
            <footer>

            </footer>
        </AppTemplate>
    )
}

export default TemplateDashboard