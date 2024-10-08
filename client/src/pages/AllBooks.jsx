import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookCard from '../components/BookCard';

const StyledSection = styled.section`
  background-color: black;
  color: white;

  button {
    border: none;
    border-radius: 5px;
    background-color: gray;
    color: white;
    padding: 10px 15px;

    &:hover {
      cursor: pointer;
      background-color: orange;
    }
  }

  img {
    height: 50vh;
  }

  >div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    justify-items: center;
    margin: 0 10vw;
    >div{
      display: flex;
      width: 40vw;
      gap: 20px;
    }
  }
  `;

const AllBooks = () => {

  const [books, setBooks] = useState([]); 
  const [loadingState, setLoadingState] = useState(true);  

  useEffect(() => {
    fetch('http://localhost:5500/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoadingState(false);
      });
  }, []);

  return (
    <StyledSection>
      {
        loadingState ? <div>Loading...</div> :
          <div>
            {
              books.map(book =>
                <BookCard key={book._id} value={book} />
              )
            }
          </div>
      }
    </StyledSection>
  );
}

export default AllBooks;