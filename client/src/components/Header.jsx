import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(50, 50, 50);
  border-bottom: solid 2px orange;
  display: flex;
  align-items: center;
  >div{
  padding-left: 10vw;
  }
  >div>img {
      margin: 0 20px;
      height: 80px;
    }

  >nav>a {
  color: white;
  font-weight: bold;
  margin: 0 10px;
  }`;

const Header = () => {
  return ( 
    <StyledHeader>
      <div><img src="/media/book logo.png" alt="book logo" /></div>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/allBooks">All Books</Link>
      </nav>

    </StyledHeader>
   );
}
 
export default Header;