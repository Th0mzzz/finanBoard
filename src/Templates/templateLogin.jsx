import { Link, Outlet, useLocation } from "react-router-dom"
import styled from "styled-components"
import tipografia from '../assets/logos/FinanBoard/tipografia.png'
import { useEffect, useState } from "react"
import loginBg from '../assets/logos/FinanBoard/bg-login.jpg'
import Title from "../Components/Title"
const AppTemplate = styled.section`
    display: flex;
    min-height: 100vh;
    background-image: url(${loginBg});
    background-size: cover;
    background-position: bottom;
    & .bg-login{
        padding: 1rem;
        flex-grow:1;
        width: 50%;
        display: none;
        align-items: end;
        a{
        color: #fff;
        }
        &.show{
            display: flex;
        }
    }
    & .app-container{
        padding: 1rem;
        width: 100%;
        max-width: 768px;
        position: relative;

    } 
    & .form-container{
        background: var(--container);
        height: 100%;
        padding: clamp(1rem, 10vh, 4rem) clamp(1.5rem, 10vw, 4.5rem);
        border-radius: 20px;
        width: 100%;
        max-width: 100%;
        position: relative;

        & header{
            display: flex;
            align-items: center;
            flex-flow: wrap;
            justify-content: center;
            gap: 2rem;
            & .logotipo{
            width: 100%;
            max-width: 360px;
            height: fit-content;
        }

        & .form-content{
            display: flex;
            justify-content: center;
            width: 100%;
            flex-direction: column;
        }
    }
    & form{
        display: flex;
        flex-direction: column;
        display: block;
        justify-content: center;
    }
    }

    @media (min-width:991px) {
        & .form-container{
            & header{
                justify-content: space-between;
            }
        }
    }
`

const TemplateLogin = () => {
    const [largura, setLargura] = useState(window.innerWidth);
    const [path, setPath] = useState(window.innerWidth);

    useEffect(() => {
        const atualizarLargura = () => setLargura(window.innerWidth);
        window.addEventListener("resize", atualizarLargura);
        return () => window.removeEventListener("resize", atualizarLargura);
    }, []);

    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname)
    }, [location.pathname]);

    return (
        <AppTemplate>
            <div className={largura > 991 ? "bg-login show" : "bg-login"}>
                <a href="https://br.freepik.com/search?color=green&format=search&last_filter=color&last_value=green&query=finances&selection=1&type=photo">Imagem de freepik</a>
            </div>
            <main className="app-container">
                <section className="form-container">
                    <header>
                        <Link to={'/'}>
                            <img className="logotipo" src={tipografia} alt="Logotipo do FinanBoard" />
                        </Link>
                        <Title >
                            <h1 style={{ color: "var(--primary)", margin: "1.5rem 0rem" }}>{path === "/login" ? "Sign In" : "Register"}</h1>
                            <p className="text">
                                {path === "/login"
                                    ? (<>Don’t have an account yet? <Link className="link" to={"register"}>Register.</Link></>)
                                    : (<>Already have an account? <Link className="link" to={"/login"}>Sign in.</Link></>)
                                }
                            </p>
                        </Title>
                    </header>
                    <section className="form-content">
                        <Outlet />
                    </section>
                </section>
            </main>
        </AppTemplate>
    )
}

export default TemplateLogin