import React, {PureComponent} from 'react';

class Article extends PureComponent {

    constructor(props) {
            super(props)
           // console.log('props.defaultOpen',props.defaultOpen)
            this.state = {
                isOpen: props.defaultOpen,
                clicked: 0
            }
        }

   /* shouldComponentUpdate(nextProps,nextState){

        return nextState.isOpen !== this.state.isOpen
    }
*/
    componentWillMount() {
        console.log('---', 'mounting');
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.defaultOpen !== this.props.defaultOpen) {
            this.setState({
                isOpen : nextProps.defaultOpen
            })
        }
       // console.log('---', 'componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('---', 'componentWillUpdate');

    }

    //handleClick = handleClick.bind(this);
    render() {
        const {article} = this.props;
        //debugger;

        const body = this.state.isOpen && <section className='card-text'>{article.text}</section>
        return (
            <div className='card mx-auto' style={{width : '50%'}}>
                <div className='card-header'>
                    <h1 onClick={this.clickCounter}>{article.title}{this.state.clicked}
                        <button onClick={this.handleClick} className='btn btn-primary btn-lg float-right'>{this.state.isOpen ? 'CLOSE' : 'OPEN'}</button>
                    </h1>
                </div>
               <div className='card-body'>
                  <h6 className='card-subtitle text-muted'>Creation date: { (new Date(article.date)).toDateString()}</h6>
                   {body}
               </div>

            </div>
        )

    }

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen})

    }
    clickCounter = () => {
        this.setState({clicked : this.state.clicked + 1})
    }
}

export default Article

/* {article && article.map((item) => (
                    <React.Fragment>
                        <li>{item.title}
                        <button onClick={this.handleClick} value={item.title} >Nazar</button>
                        </li>
                        <li>{item.text}</li>
                        <li>{item.date}</li>
                        <hr/>
                        <br/>
                    </React.Fragment>

                ))}
                {!article &&
                        <div>
                            items not found
                        </div>
            }*/