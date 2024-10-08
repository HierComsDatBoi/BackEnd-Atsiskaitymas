import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: black;
  color: white;
  div:nth-of-type(2){
    width: 30vw;
  }
  img{
    height: 70vh;
  }
  `;

const Book = () => {
  const { id } = useParams();
  const [data, setData] = useState('');
  useEffect(() => {
    fetch(`http://localhost:5500/books/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, []);
  return (
    <StyledSection>
      {
        data ?
          <>
            <div><img src={data.imageUrl} alt={data.title} /></div>
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <ul>
                <li><strong>Author: </strong>{data.author}</li>
                <li><strong>Genres: </strong>
                  {
                    data.genres.map((genre, i) => <span key={i}>{genre} </span>)
                  }
                </li>
                <li><strong>Pages: </strong>{data.pages}</li>
                <li><strong>Publish Date: </strong>{data.publishDate}</li>
                <li><strong>Rating: </strong>{data.rating}</li>
                <li><strong>Available Copies: </strong>{data.amountOfCopies}</li>
              </ul>
            </div>
          </> :
          <p>Loading...</p>
      }
    </StyledSection>
  );
}

export default Book;