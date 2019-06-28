import React , {Component} from 'react'

class Issue extends Component{
    render() {
        const titleStyle = {
            fontSize : '20px',
            margin: '15px 0',
            textDecoration : 'underline',
            color: 'rgb(68, 90, 144)'
        }
        const {category , creator , _id , title , description } = this.props.issue
        return (
            <div>
                <h3 style={titleStyle}> {title }  </h3>
                <p> {description}</p>
                <p>{"Category : " + category}</p>
                <p>{"Creator : " + creator}</p>
                <a href={'/issues/'+ _id} variant="primary">Read more...</a>
                </div>   
            )
    }

  }

export default Issue;
