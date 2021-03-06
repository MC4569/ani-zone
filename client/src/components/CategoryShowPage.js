import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom' 


const CategoryShowPage = props => {
  const [category, setCategory] = useState ({
    id: "",
    name: "",
    animes: []
  })

  const categoryId = props.match.params.id

  const getCategory = async () => {
    try {
      const response = await fetch(`/api/v1/categories/${categoryId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const body = await response.json()
      setCategory(body.category)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className='grid-container text-center' id='category-show'>
      <div className='showpage-content'>
        <h1>{category.name}</h1>
      </div>
    </div>
  )
}

export default CategoryShowPage