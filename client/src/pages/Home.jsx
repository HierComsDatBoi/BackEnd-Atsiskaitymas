import styled from "styled-components";

const StyledSection = styled.section`
  background-image: url('/media/library home.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
    >div{
    flex-direction: column;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.8);
    height: 30vh;
    width: 60vw;
    border-radius: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10vh auto;
    >
  }
`;
const Home = () => {
  return (
    <StyledSection>
      <div>
        <h2>Welcome to my library</h2>
        <p>Where none of your dreams will come true!</p>
      </div>
    </StyledSection>
  );
}

export default Home;