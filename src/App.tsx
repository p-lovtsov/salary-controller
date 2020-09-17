import React from "react";
import { Form } from "./containers/Form";

function App() {
  const submit = (values: unknown) => {
    console.log(values);
  };

  return (
    <div className="App">
      <Form onSubmit={submit} />
    </div>
  );
}

export default App;
