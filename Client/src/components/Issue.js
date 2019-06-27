import React , {Component} from 'react'

class Issue extends Component{
    render() {
        const titleStyle = {
            fontSize : '20px',
            margin: '15px',
            textDecoration : 'underline',
            color: 'rgb(68, 90, 144)'
        }
        const {id , title , description } = this.props.issue
        return (
            <div>
                <h3 style={titleStyle}> {id + "." + title }  </h3>
                <p> {description}</p>
                <a>Read More >></a>
            </div>
            )
    }
}

export default Issue;
