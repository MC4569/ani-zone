

class AnimeSerializer {
  static async getSummary(anime, currentUserId) {
    const allowedAttributes = ['id', 'title', 'productionCompany', 'description', 'categoryId']
    const serializedAnime = {}

    for (const attribute of allowedAttributes) {
      serializedAnime[attribute] = anime[attribute]
    }
    return serializedAnime
  }
}

export default AnimeSerializer