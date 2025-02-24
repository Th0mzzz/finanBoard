import styled from "styled-components";
import Title from "../../Title";
import { LuMoon, LuSunMedium, LuBell } from "react-icons/lu";
import Reminder from "../../Reminder/index.jsx"
import Button from "../../Button";
import { useThemeContext } from "../../../contexts/theme";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import defaultUser from "../../../assets/testUser.jpg"
import Breadcrumb from "../BreadCrumb";
const HeaderStyled = styled.header`
position: relative;
z-index: 100;
    & h1{
        color: var(--primary);
        margin-bottom: 0;
    }
    & nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .header-options{
        display: flex;
        max-width: 60%;
        width: auto;
        align-items: center;
        gap: .5rem;
        & .perfil{
            margin-left:1rem;
            img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: cover;
            }
        }
    }
`
const MenuNotifi = styled.div`
    height: fit-content;
    & .notifications{
        position: absolute;
        width: fit-content;
        max-width: 360px;
        right: 5px;
        margin-top: 1rem;
        overflow: hidden;
        background-color: var(--container);
        border-radius: 20px;
        border: 0px solid var(--primary);
        transition: background .4s, height .4s , border .4s, padding .4s;
        height: 0;
        z-index: 110;

        &.show{
            border-width: 1px;
            height: 400px;
        }
        & .d-flex{
            overflow-y: auto;
            height: 100%;
            padding: .5rem 1rem;

        }
    }
`

export default function DashHeader({ title }) {
    const { theme, toggleTheme } = useThemeContext()
    const [menuNoti, setMenuNoti] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuNoti(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <HeaderStyled>
            <nav>
                <div className="title-container">
                    <Title><h1>{title}</h1></Title>
                    <Breadcrumb />

                </div>

                <div className="header-options">
                    <Button type={"btn-icon"} onClick={() => toggleTheme()}>
                        {theme === "light"
                            ? <LuMoon />
                            : <LuSunMedium />
                        }
                    </Button>
                    <MenuNotifi className="notifi-container" ref={menuRef}>
                        <Button type={"btn-icon"} onClick={() => { setMenuNoti(!menuNoti) }}>
                            <LuBell />
                        </Button>
                        <div className={`notifications ${menuNoti ? "show" : ""}`}>
                            <div className="d-flex flex-column gap-1">
                                <Reminder type="success" text="Notification" title="Notify Title" />
                                <Reminder type="danger" text="Notification" title="Notify Title" />
                                <Reminder type="warning" text="Notification" title="Notify Title" />
                            </div>
                        </div>
                    </MenuNotifi>
                    <Link to={"profile"} className="perfil">
                        <img src={defaultUser} alt="Profile Image" />
                    </Link>
                </div>
            </nav>
        </HeaderStyled >
    )
}
