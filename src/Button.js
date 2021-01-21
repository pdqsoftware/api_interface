import React from 'react'

class Button extends React.Component {

    render() {
        return (
            <div className="centre">
                { this.props.buttonType==="link" ? 
                    <div className="button-main">
                    <a href={ this.props.buttonAref } >{ this.props.buttonText }</a></div>
                :
                    <div className="button-main" onClick={ this.props.buttonAction }>{ this.props.buttonText } </div>
                }
            </div>
        )
     } 
 }

 export default Button