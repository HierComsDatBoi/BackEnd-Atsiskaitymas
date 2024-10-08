import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
background-color: black;
color: white;
button{
  border:none;
  border-radius: 5px;
  background-color: gray;
  color: white;
  padding: 10px 15px;
  &:hover{
    cursor: pointer;
    background-color: orange;
  }
}
>div{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 80vw;
  gap:30px;
  margin: 0 auto;
  >div>div{
  margin: 5px 0;
  }
  img{
    height: 40vh;
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
                <div key={book._id}>
                  <h3>{book.title}</h3>
                  <div><img src={book.imageUrl} alt={book.title} /></div>
                  <div><strong>Genres: </strong>
                    {
                      book.genres.map((genre, i) =>
                        <span key={i}>{genre} </span>
                      )
                    }
                  </div>
                  <button onClick={() => window.open(`/AllBooks/${book._id}`, '_blank')}>More Info</button>
                </div>
              )
            }
          </div>
      }
    </StyledSection>
  );

}

export default AllBooks;