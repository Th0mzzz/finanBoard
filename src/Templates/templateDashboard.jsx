import { Outlet, useLocation, useMatch } from "react-router-dom"
import styled from "styled-components"
import Aside from "../Components/dashboard/Aside"
import DashHeader from "../Components/dashboard/Header"
// links dashboard
import { BsSpeedometer2, BsCurrencyDollar, BsPiggyBank } from "react-icons/bs";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoArrowUpOutline } from "react-icons/io5";
import { BiBullseye, BiBarChartSquare } from "react-icons/bi";
import { useThemeContext } from "../contexts/theme";
import { useEffect, useState } from "react";
import Button from "../Components/Button";

const AppTemplate = styled.section`
    .dashboard-content{
        padding: 2rem;
        padding-left: calc(var(--aside-width) + 2rem);
        transition: all .4s ease-in-out;
    }
    & .app-container{
        padding: 5rem 0;
    } 

    @media (max-width: 768px) {
        .dashboard-content{
            padding-left: 2rem;
        }
    }
    `
const TemplateDashboard = () => {
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
        { name: "Insigths", href: "/dashboard/insigths", icon: <BiBarChartSquare /> },
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
                    <Outlet />
                </main>
            </div>
        </AppTemplate>
    )
}

export default TemplateDashboard