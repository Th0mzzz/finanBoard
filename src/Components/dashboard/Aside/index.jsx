import styled from "styled-components";
import { BsGrid, BsSpeedometer2, BsCurrencyDollar, BsPiggyBank } from "react-icons/bs";
import { TbShoppingBagMinus } from "react-icons/tb";
import { BiBullseye } from "react-icons/bi";
import Button from "../../../Components/Button";
import logo from "../../../assets/logos/FinanBoard/logo.png"
import { Link, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
const AsideContainer = styled.aside`
    display: flex;
    flex-flow: column nowrap;
    gap:2rem;
    width: 100%;
    max-width: var(--aside-width);
    transition: all .8s ease-in-out;
    padding: 3rem 0;
    background: var(--container);
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
`
const AsideTop = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    gap: 1.5rem;
    & img{
        width: clamp(100px, 20vw, 120px);
    }
`

const AsideContent = styled.div`
    list-style: none;
    padding: 3rem clamp(1rem, 100%, 25px) ;
    width: 100%;
    ul{
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        & li{
            width: 100%;
            margin: 0.8rem 0;

            a{
                display: flex;
                width: 100%;
                gap: 20px;
                padding: 8px 16px;
                transition: all .4s;
                border-radius: 10px;

                & svg{
                    width: 25px;
                    height: 25px;
                    font-size: 25px;
                }
                &.active{
                background:var(--primary) ;
                color: var(--container);
                }
                &:hover{
                background:var(--primary-hover) ;
                    color: var(--container);
                }
                &.closed{
                    width: fit-content;
                }
            }
        }
    }
`
export default function Aside() {
    const [ativo, setAtivo] = useState(true);

    useEffect(() => {
        if (ativo) {
            document.documentElement.classList.remove("closed");
        } else {
            document.documentElement.classList.add("closed");
        }
    }, [ativo]);


    const links = [
        { name: "Dashboard", href: "/dashboard", icon: <BsSpeedometer2 /> },
        { name: "Expenses", href: "/expenses", icon: <TbShoppingBagMinus /> },
        { name: "Income", href: "/income", icon: <BsCurrencyDollar /> },
        { name: "Savings", href: "/savings", icon: <BsPiggyBank /> },
        { name: "Goals", href: "/goals", icon: <BiBullseye /> },
    ];
    const activeMap = {
        "/dashboard": !!useMatch("/dashboard"),
        "/expenses": !!useMatch("/expenses"),
        "/income": !!useMatch("/income"),
        "/savings": !!useMatch("/savings"),
        "/goals": !!useMatch("/goals"),
    };



    return (
        <AsideContainer $ativo={ativo}>
            <AsideTop>
                <Button type="menu-btn" onClick={() => { setAtivo(!ativo) }}>
                    <BsGrid />
                </Button>
                <Link to={"/dashboard"}>
                    <img src={logo} alt="FinanBoard´s Logo" />
                </Link>
            </AsideTop>
            <AsideContent >
                <ul>
                    {links.map((link, i) => {
                        return (

                            <li key={i}>
                                <Link to={link.href} className={`link ${activeMap[link.href] ? "active" : ""} `}>
                                    {link.icon}
                                    {ativo ? link.name : null}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </AsideContent>
        </AsideContainer>
    )
}