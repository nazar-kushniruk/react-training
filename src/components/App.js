import React, {Component} from 'react';
import articles from './fixtures'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    /*constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }*/

    /* componentWillMount() {
         this.setState({
             data :  articles
         })
 }*/
    state = {
        reverted: false
    }

    render() {
        const data = articles;
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>My App</h1>
                    <button className='btn btn-primary btn-lg' onClick={this.revert}>Revert</button>
                </div>

                <ArticleList articles={this.state.reverted ? data.reverse() : data } />
            </div>
        )

    }
    revert = () => {
        this.setState({
            reverted:!this.state.reverted
        })
        console.log('this.state.reverted->',this.state.reverted)
    }
}


export default App


