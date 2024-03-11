import styled from "styled-components";

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
`;

const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
`;

const StyledSpan = styled.span`
    font-weight: 600;
`;

function List({ items }) {
    return (
        <StyledUl>
            {items.map((item) => (
                <StyledLi key={item.field}>
                    <StyledSpan>{item.field}: </StyledSpan>
                    {item.value}
                </StyledLi>
            ))}
        </StyledUl>
    );
}

export default List;