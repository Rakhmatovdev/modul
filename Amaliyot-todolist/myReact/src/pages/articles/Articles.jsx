import {NavLink} from 'react-router-dom'
import { useFetch } from '../../hook/useFetch'

function Articles() {
    
  const { data : articles, isPending, error } = useFetch('https://fakestoreapi.com/products')
  return (
    <div className='article-container'>
        {isPending && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}

        {articles && articles.map((article) => {
            return (
                <div className='card' key={article.id}>
                    <h3>
                        Title: {article.title}
                    </h3>
                    <p>
                       Kategoriya: <i>{article.category}</i>
                    </p>

                    <NavLink to={`/articles/${article.id}`}>Read More</NavLink>
                </div>
            )
        })}
    </div>
  )
}

export default Articles