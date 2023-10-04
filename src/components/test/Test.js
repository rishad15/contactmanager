import React, { Component } from 'react'

 class Test extends Component {
  state={
    id:'',
    title:'',
    body:''
  }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => 
        this.setState({
          id:data.id,
          title:data.title,
          body:data.body
        }))
    }
    // componentWillMount(){
    //   console.log("Component will mount")
        
    // }
    // componentDidUpdate(){
    //   console.log("Component updated")

    // }
    // componentWillReceiveProps(){

    // }
  render() {
    const {id,title,body}=this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>

      </div>
    )
  }
}
export default Test;