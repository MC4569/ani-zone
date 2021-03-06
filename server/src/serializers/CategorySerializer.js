
class CategorySerializer {
  static getSummary(category) {
    const allowedAttributes = ['id', 'name']
    const serializedCategory = {}

    for (const attribute of allowedAttributes) {
      serializedCategory[attribute] = category[attribute]
    }
    return serializedCategory
  }

  static async getDetails(category) {
    const serializedCategory = this.getSummary(category)
    serializedCategory.animes = await category.$relatedQuery('animes')
    return serializedCategory
  }
}

export default CategorySerializer