import { Outlet, useLocation, useMatch } from "react-router-dom"
import styled from "styled-components"
import Aside from "../Components/dashboard/Aside"
import DashHeader from "../Components/dashboard/Header"
// links dashboard
import { BsSpeedometer2, BsCurrencyDollar, BsPiggyBank } from "react-icons/bs";
import { PiCopyrightBold } from "react-icons/pi";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoArrowUpOutline } from "react-icons/io5";
import { BiBullseye, BiBarChartSquare } from "react-icons/bi";
import { useThemeContext } from "../contexts/theme";
import { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Spinner } from "react-bootstrap";
import logo from "../assets/logos/FinanBoard/logo.png"
import logoLight from "../assets/logos/autor/th0mzzz-logo.png"
import logoDark from "../assets/logos/autor/th0mzzz-logo-dark.png"

const AppTemplate = styled.section`
    .dashboard-content{
        padding: 2rem;
        padding-left: calc(var(--aside-width) + 2rem);
        transition: all .4s ease-in-out;
    }
    & .app-container{
        position: relative;
        padding: 5rem 0;
        min-height: 80vh;

        & .loading {
            position: absolute;
                top: 50%;
                left: 50%;
                translate: -50% -50%;
                & img{
                    width: 100px;
                }
            & .dashboard-loading{
                color: var(--primary);
                width: 90px;
                height: 90px;
                position: absolute;
                top: 50%;
                left: 50%;
                translate: -50% -50%;
            }
        }
    } 

    @media (max-width: 768px) {
        .dashboard-content{
            padding-left: 2rem;
        }
    }
    `

const Footer = styled.footer`
display: flex;
flex-flow: row wrap;
align-items: center ;
justify-content: center;
color: var(--primary);
padding-top: 4rem;
& img{
    width: 180px;
    margin-left: 10px;
}
    `
const TemplateDashboard = () => {
    const {theme} = useThemeContext()
    const location = useLocation()
    const pathname = location.pathname
    const [title, setTitle] = useState("Dashboard")
    const { scroll } = useThemeContext()
    const [scrollBtn, setScrollBtn] = useState(false)

    useEffect(() => {
        if (scroll > 100) {
            setScrollBtn(true)
        } else {
            setScrollBtn(false)
        }
    }, [scroll])

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: <BsSpeedometer2 /> },
        { name: "Expenses", href: "/dashboard/expenses", icon: <TbShoppingBagMinus /> },
        { name: "Income", href: "/dashboard/incomes", icon: <BsCurrencyDollar /> },
        { name: "Charts", href: "/dashboard/insigths", icon: <BiBarChartSquare /> },
        { name: "Savings", href: "/dashboard/savings", icon: <BsPiggyBank /> },
        { name: "Goals", href: "/dashboard/goals", icon: <BiBullseye /> },
    ];
    const activeMap = {
        "/dashboard": !!useMatch("/dashboard"),
        "/dashboard/expenses": !!useMatch("/dashboard/expenses"),
        "/dashboard/incomes": !!useMatch("/dashboard/incomes"),
        "/dashboard/insigths": !!useMatch("/dashboard/insigths"),
        "/dashboard/savings": !!useMatch("/dashboard/savings"),
        "/dashboard/goals": !!useMatch("/dashboard/goals"),
    };


    useEffect(() => {
        // Verifica se o pathname corresponde a algum link do menu
        const matchedLink = links.find(link => link.href === pathname);

        if (matchedLink) {
            // Se encontrar, define o nome da página como o nome do link
            setTitle(matchedLink.name);
        } else {
            // Se não encontrar, você pode verificar outros links ou definir um título padrão
            if (pathname === "/dashboard/profile") {
                setTitle("Profile");
            } else {
                setTitle("Dashboard");
            }
        }
    }, [pathname]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [pathname]);



    return (
        <AppTemplate>
            <Button
                type={`primary scrollBtn ${scrollBtn ? "show" : ""}`}
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <IoArrowUpOutline />
            </Button>
            <Aside links={links} activeMap={activeMap} />
            <div className="dashboard-content">
                <DashHeader title={title} activeMap={activeMap} />
                <main className="app-container">
                    {loading ? (
                        <div className="loading">
                            <Spinner
                                className="dashboard-loading"
                                animation="border"
                            />
                            <img src={logo} alt="" />
                        </div>
                    ) : (<Outlet />)}
                </main>
                <Footer>
                    <span>
                    <PiCopyrightBold /> All Right Reserved. Made By
                    </span>
                    <img src={theme === "dark" ? logoDark : logoLight} alt="" />
                </Footer>
            </div>

        </AppTemplate>
    )
}

export default TemplateDashboard