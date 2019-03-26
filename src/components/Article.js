import React from 'react';

function Article(props) {
const {article} = props;
console.log('from article ', article);
    return (
        <div>
        <h1> {article.title}</h1>
            <p>{article.text}</p>
            <hr/>
        </div>
    )
}

export default Article;