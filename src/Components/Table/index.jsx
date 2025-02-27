import styled from "styled-components";

const TableCSS = styled.div`
    width: 100%;
    overflow: auto;
    max-height: 400px;
    margin-top: 3rem;
    & table{
        min-width: 100%;
        color: var(--text);
        border-spacing: 0 10px;
        & thead{
            color: var(--primary);
        }
        & th, & td{
            padding: 1rem;
            border-bottom: 10px solid transparent;
        }
        & tbody > tr{
            border-left: 2px solid var(--secondary);
            cursor: pointer;
            transition: all .2s;
            margin-bottom: 1rem;
            &:hover{
                color: var(--primary);
                border-color: var(--primary);
                background: var(--background);
            }
        }
    }
`
const TableMenuCss = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
gap: 1.2rem;
padding: 1rem 0;
`
const Table = ({ head, children }) => {
    return (
        <TableCSS>
            <table>
                <thead>
                    <tr>
                        {head.map((th, i) => {
                            return <th key={i}>{th}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </TableCSS>
    )
}

export const TableMenu = ({ children }) => {
    return (
        <TableMenuCss>
            {children}
        </TableMenuCss>
    )
}

export default Table;