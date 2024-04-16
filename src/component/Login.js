import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

export const Login = ({ onIdsubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdsubmit(idRef.current.value);
  };
  const handleCreateId = () => {
    onIdsubmit(uuidV4);
  };
  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-4">
          Login
        </Button>
        <Button
          variant="secondary"
          onClick={handleCreateId}
          style={{ marginLeft: 10, marginRight: 10 }}
        >
          Create A New Id
        </Button>
        <Button
          onClick={() => {
            onIdsubmit(undefined);
            // localStorage.removeItem("whatsapp-clone-id");
          }}
        >
          Clear ID
        </Button>
      </Form>
    </Container>
  );
};
