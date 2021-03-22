import express from 'express'
import { ValidationError } from 'objection'
import { Review } from '../../../models'
import ReviewSerializer from '../../../serializers/ReviewSerializer.js'

const animeReviewsRouter = new express.Router({ mergeParams: true })

animeReviewsRouter.post('/', async (req, res) => {
  const animeId = req.params.animeId
  const body = req.body

  try {
    const newReview = await Review.query().insertAndFetch({ animeId })
    const serializedReview = await ReviewSerializer.getSummary(newReview, newReview.userId)
    return res.status(201).json({ review: serializedReview })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default animeReviewsRouter