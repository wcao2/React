import React from 'react'

function About() {
  //react.fragment is a ghost element, it doesn't actually show on the Dom,however I need it for JSX
  return (
    <React.Fragment>
        <h1>About</h1>
        <p>This is the TodoList App created by WeiCao in 3/31/2019</p>
    </React.Fragment>
  )
}


export default About;