import styled from "styled-components"

const Item = styled.div`
    padding: .4rem .8rem;
    background: var(--background);
    border-radius: 10px;
    width: 100%;
    max-width: 180px;
    color: var(--primary);
    & p{
        color: var(--secondary);
    }
    & h3{
        font-weight: bold;
    }
`

const DadosItem = ({title, data}) => {
    return (
        <Item>
            <p className="text">{title}</p>
            <h3 className="subtitle">{data}</h3>
        </Item>
    )
}

export default DadosItem