const BookCard = ({ value }) => {

  const shortString = (str, num) => {
    return str.slice(0, num) + '...'
  }

  return (
    <>
      <div>

        <div><img src={value.imageUrl} alt={value.title} /></div>
        <div>
          <h2>{value.title}</h2>
          <p>{shortString(value.description, 150)}</p>
          <ul>
            <li><strong>Author: </strong>{value.author}</li>
            <li><strong>Genres: </strong>
              {
                value.genres.map((genre, i) => <span key={i}>{genre} </span>)
              }
            </li>
            <li><strong>Publish Date: </strong>{value.publishDate}</li>
          </ul>
          <button onClick={() => window.open(`/AllBooks/${value._id}`, '_blank')}>More Info</button>
        </div>
      </div>
    </>
  );
}

export default BookCard;