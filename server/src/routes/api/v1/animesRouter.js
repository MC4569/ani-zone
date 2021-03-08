import express from 'express' 

import { Anime } from '../../../models/index.js' 
import AnimeSerializer from '../../../serializers/AnimeSerializer.js'

const animesRouter = new express.Router()

animesRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const userId = req.query.userId
  try {
    const anime = await Anime.query().findById(id)
    const serializedAnime = await AnimeSerializer.getSummary(anime, userId)
    return res.status(200).json({ anime: serializedAnime })
  } catch (error) {
    return res.status(500).json({ errors })
  }
})

export default animesRouter