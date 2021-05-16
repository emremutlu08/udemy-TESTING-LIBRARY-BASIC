import React from "react";

function Hello(props) {
  const greeting = "Hello Function Component!";
  console.log(props.children);

  return <h1>{greeting}</h1>;
}

export default Hello;
