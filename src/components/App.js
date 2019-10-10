import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container">
            <header className="jumbotron">
                <h1 className="display-3">App name</h1>
            </header>
            <ArticleList articles ={articles}/>
        </div>
    )
}

export default App