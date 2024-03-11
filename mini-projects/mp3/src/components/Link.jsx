import styled from "styled-components";

const AppLink = styled.a`
    color: #61dafb;
`;

function Link({ url, title }) {
    return (
        <AppLink href={url} target='_blank' rel='noopener noreferrer'>{title}</AppLink>
    );
}

export default Link;