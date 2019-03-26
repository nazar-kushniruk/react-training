import React from 'react';
import articles from './fixtures'
import Article from './Article'

function App() {
    console.log(articles);
    return (
        /*<div> {articles[0].title}</div>*/
        <Article article={articles[0]}></Article>
    )
}

export default App