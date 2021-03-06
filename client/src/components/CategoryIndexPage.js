import React, { useState, useEffect } from 'react'

import CategoryTile from './CategoryTile.js'

const CategoryIndexPage = props => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const response = await fetch ('/api/v1/categories')

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setCategories(body.categories)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCategories
  }, [])

  const categoryTiles = categories.map(categoryObject => {
    return (
      <CategoryTile
        key={categoryObject.id}
        category={categoryObject}
      />
    )
  })

  return (
    <div className='grid-container text-center' id='category'>
      <h1>Categories</h1>
      <div className='grid-x grid-margin-x small-up-2 medium-up-3'>
        {categoryTiles}
      </div>
    </div>
  )
}

export default CategoryIndexPage