const Model = require('./Model.js')

class Review extends Model {
  static get tableName() {
    return 'reviews'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['rating'],
      properties: {
        rating: {
          type: ['integer', 'string'],
          minimum: 1,
          maximum: 5
        },
        title: {
          type: 'string',
          minLength: 1,
          maxLength: 255
        },
        content: {
          type: 'string',
          minLength: 1,
          maxLength: 1000
        }
      }
    }
  }

  static get relationMappings() {
    const { User, Anime } = require('./index.js')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'reviews.userId',
          to: 'users.id'
        }
      },
      anime: {
        relation: Model.BelongsToOneRelation,
        modelClass: Anime,
        join: {
          from: 'reviews.animeId',
          to: 'animes.id'
        }
      }
    }
  }
}

module.exports = Review