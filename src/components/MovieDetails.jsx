import React from 'react';

// Actors: 'Rami Malek, Christian Slater, Carly Chaikin',
// Awards: 'Won 3 Primetime Emmys. 21 wins & 85 nominations total',
// Country: 'United States',
// Director: 'N/A',
// Genre: 'Crime, Drama, Thriller',
// Language:
//   'English, Swedish, Danish, Chinese, Persian, Spanish, Samoan, Arabic, German',
// Metascore: 'N/A',
// Plot: 'Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he work...',
// Poster:
//   'https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
// Rated: 'TV-MA',
// Ratings: [
//   {
//     Source: 'Internet Movie Database',
//     Value: '8.6/10',
//   },
// ],
// Released: '24 Jun 2015',
// Response: 'True',
// Runtime: '49 min',
// Title: 'Mr. Robot',
// Type: 'series',
// Writer: 'Sam Esmail',
// Year: '2015–2019',
// imdbID: 'tt4158110',
// imdbRating: '8.6',
// imdbVotes: '377,887',
// totalSeasons: 'N/A',
// });

const MovieDetails = ({ data }) => {
  return (
    <div className='ms-4'>
      {data && (
        <div className='d-flex flex-column w-75'>
          <h1 className='text-warning' key={data.imdbID}>
            {data.Title}
          </h1>
          <ul className='d-flex flex-row list-unstyled'>
            <li className='pe-1'>
              <strong>Year:</strong> {data.Year},{' '}
            </li>
            <li className='pe-1'>
              {' '}
              <strong>Rated :</strong> {data.Rated},{' '}
            </li>
            <li className='pe-1'>
              {' '}
              <strong>Released:</strong> {data.Released}.
            </li>
          </ul>
          <p>
            <strong className='text-warning'> Rating: </strong>
            {data.imdbRating}
          </p>
          <p className='bg-warning text-dark pb-1 '>
            <strong>Genre: </strong>
            {data.Genre}
          </p>
          <p>
            <strong>Actors: </strong>
            {data.Actors}
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            <strong>Plot: </strong>
            {data.Plot}
          </p>
          <p>
            <strong className='text-warning'>&#9813; </strong>
            {data.Awards}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
