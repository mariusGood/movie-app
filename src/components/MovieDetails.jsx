import React from 'react';

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
