const Model = require('./Model.js')

class Anime extends Model {
  static get tableName() {
    return 'animes'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'productionCompany', 'description'],
      properties: {
        title: {type: 'string'},
        productionCompany: {type: 'string'},
        description: {type: 'string'}
      }
    }
  }

  static get relationMappings() {
    const {Category} = require('./index.js')

    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'animes.categoryId',
          to: 'categories.id'
        }
      }
    }
  }
}

module.exports = Anime