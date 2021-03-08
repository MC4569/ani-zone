const Model = require('./Model.js')

class Category extends Model {
  static get tableName() {
    return 'categories'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    }
  }

  static get relationMappings() {
    const Anime = require('./Anime.js')

    return {
      animes: {
        relation: Model.HasManyRelation,
        modelClass: Anime,
        join: {
          from: 'categories.id',
          to: 'animes.categoryId'
        }
      }
    }
  }
}

module.exports = Category