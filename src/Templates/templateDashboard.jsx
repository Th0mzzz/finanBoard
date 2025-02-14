import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Aside from "../Components/dashboard/Aside"
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
            <Aside />
            <div className="dashboard-content">

                <header>

                </header>
                <main className="app-container">
                    <Outlet />
                </main>
                <footer>

                </footer>
            </div>

        </AppTemplate>
    )
}

export default TemplateDashboard