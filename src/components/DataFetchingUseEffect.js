import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [post, setPost] = useState({})
  const [getById, setGetById] = useState(1)
  const [postById, setPostById] = useState({})

  const getPostById = () => {
    console.log(id)
    setGetById(id)
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        const data = res.data.slice(0, 5)
        setPosts(data)
      })
      .catch(err => {
        console.log(err) 
      })
  }, [])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${getById}`)
      .then(res => {
        console.log(res)
        setPostById(res.data)
      })
      .catch(err => console.log(err))
  }, [getById])

  return (
    <div>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>{post.title}</li>
          )) 
        }
      </ul>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={getPostById}>Get Post By Id</button>
      <p>{post.title}</p>
      <p>{postById.title}</p>
    </div>
  )
}

export default DataFetching
