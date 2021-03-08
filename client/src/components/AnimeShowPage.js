import React, { useState, useEffect } from 'react' 

const AnimeShowPage = props => {
  const [anime, setAnime] = useState({})

  const getAnime = async () => {
    const animeId = props.match.params.id
    try {
      const response = await fetch(`/api/v1/animes/${animeId}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setAnime(body.anime)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getAnime()
  }, [])

  return (
    <div className='anime-show'>
      <h2>{anime.title}</h2>
      <h2>{anime.productionCompany}</h2>
      <p>{anime.description}</p>
    </div>
  )
}

export default AnimeShowPage