import styled, { keyframes } from "styled-components";
import {NavLink} from "react-router-dom";

const StyledNavLink = styled(NavLink)`
    color: #61dafb;
    margin-right: 10px;
`;

const StyledNav = styled.nav`
    margin-bottom: 10px;
`;

const AppLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const AppLogo = styled.img`
    height: 60px;
    pointer-events: none;
    
    @media (prefers-reduced-motion: no-preference) {
        animation: ${AppLogoSpin} infinite 20s linear;
    }
`;

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

function Header({logo}) {
    return(
        <AppHeader>
            <AppLogo src={logo} alt='logo'/>
            <h1>My Portfolio</h1>
            <StyledNav>
                <StyledNavLink to="/">
                    About me
                </StyledNavLink>
                <StyledNavLink to="/projects">
                    Projects
                </StyledNavLink>
            </StyledNav>
        </AppHeader>
    );
}

export default Header;