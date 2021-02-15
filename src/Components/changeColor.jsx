import React from 'react'


function changeColor() {
return { color: "white" }; 

this.setState({ color: "lightgrey" }); 

let style = { backgroundColor: this.state.color };
// The wrapper (root) component
return (
<div id="change-color" style={style}>
<a onClick={this.changeColor}>change</a>
</div>
)

};

export default changeColor;