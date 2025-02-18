import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 5px;

  a {
    text-decoration: none;
    color: var(--primary);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: var(--text);
  }
`;

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x); 

    return (
        <BreadcrumbContainer>
            {pathnames.length > 0 && <span>  </span>}

            {pathnames.map((value, index) => {
                let to = `${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                if(to === "dashboard") to = "/dashboard"
                return (
                    <span key={to}>
                        {!isLast ? <Link to={to}>{decodeURIComponent(value)}</Link> : value}
                        {!isLast && " > "}
                    </span>
                );
            })}
        </BreadcrumbContainer>
    );
}
