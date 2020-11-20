import React from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div className="First">
        <Button id="create" color="warning" size="lg">
          Create Quiz
        </Button>
      </div>

      <div className="Second">
        <Form>
          <FormGroup row>
            <Label for="Add your question here" sm={2}>
              Question 1:
            </Label>
            <Col sm={4}>
              <Input
                id="Question"
                type="textarea"
                name="text"
                id="exampleText"
              />
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default App;
