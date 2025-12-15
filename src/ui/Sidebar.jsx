import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 1024px) {
    padding: 2.4rem 1.6rem;
  }

  @media (max-width: 768px) {
    grid-row: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem;
    border-right: none;
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
