


const BookCard = ({data}) => {
  return ( data ? 
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
          </> : <div>Loading...</div>
   );
}
 
export default BookCard;