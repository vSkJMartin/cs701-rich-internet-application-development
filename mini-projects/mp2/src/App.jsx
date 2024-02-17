import List from './components/List';
import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: #552583;
    color: #ffffff; /* Your desired text color */
    padding: 0.5rem 1rem; /* Adjust padding as needed */
    box-shadow: 0 2px 4px #fdb927;
`;

function App() {
  return (
    <StyledContainer>
        <StyledNav>
            <h1>Final Space</h1>
        </StyledNav>
        <List/>
    </StyledContainer>
  );
}

export default App
