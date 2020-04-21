import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingUsingState() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setPost(res.data)
        setLoading(false)
        setError('')
      })
      .catch((err) => {
        console.log(err)
        setError('Something went wrong')
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h3>Data fetching using state</h3>
      {loading ? "Loading" : post.title}
      {error && error}
    </div>
  )
}

export default DataFetchingUsingState
