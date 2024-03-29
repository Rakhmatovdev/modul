import { useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch'


function ArticleDetail() {
  const { id } = useParams()
  const url = 'https://fakestoreapi.com/products/' + id
  const {data:article, isPending, error} = useFetch(url)
  
  return (
    <div>
      {isPending && <h2>{isPending}</h2>}
      {error && <h2>{error}</h2>}
      {article && <div className='d-flex'>
       <h2><img src={article.image} alt={article.title} height={200} style={{width:"200px"}}/></h2>
        <h2> Title: {article.title}</h2>
        <p>Description: <i>{article.description}</i></p>
        <b>Price:{article.price}</b>
        <p>
          {article.body}
        </p>
      </div>}
    </div>
  )
}

export default ArticleDetail