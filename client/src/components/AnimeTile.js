import React from 'react' 
import { Link } from 'react-router-dom' 

const AnimeTile = ({anime}) => {
  return (
    <div>
      <Link to={`/animes/${anime.id}`}>
        <h4>{anime.title}</h4>
        <h4>{anime.productionCompany}</h4>
        <p>{anime.description}</p>
      </Link>
    </div>
  )
}

export default AnimeTile