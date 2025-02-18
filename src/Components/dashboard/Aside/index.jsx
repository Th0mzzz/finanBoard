import { BsGrid } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import Button from "../../../Components/Button";
import logo from "../../../assets/logos/FinanBoard/logo.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './aside.css'

export default function Aside({ links, activeMap }) {
    const [ativo, setAtivo] = useState(true);
    function linkFecharMenu() {
        if (window.innerWidth < 768) {
            setAtivo(false)
        }
    }
    useEffect(() => {
        if (ativo) {
            document.documentElement.classList.remove("closed");
        } else if (!ativo) {
            document.documentElement.classList.add("closed");
        }
    }, [ativo]);

    return (
        <aside className={"asideContainer"}>
            <div className={"asideTop"}>

                <Button type="menu-btn" onClick={() => { setAtivo(!ativo) }}>
                    <BsGrid />
                </Button>
                <Link to={"/dashboard"}>
                    <img src={logo} alt="FinanBoard´s Logo" />
                </Link>
            </div>
            <div className={"asideContent"}>
                <ul>
                    {links.map((link, i) => {
                        return (

                            <li key={i}>
                                <Link onClick={() => { linkFecharMenu() }} to={link.href} className={`link ${activeMap[link.href] ? "active" : ""} `}>
                                    <span>{link.icon}</span>
                                    <span className={`span-li`}>{link.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <Link to={"/sair"} className={`link`}>
                            <span><BiLogOut/></span>
                            <span className={`span-li`}>Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}