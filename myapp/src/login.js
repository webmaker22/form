import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
  };
  function YourComponent() {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevents the default form submission behavior
      navigate('/'); // Navigate to the home page
    };
  }
  return (
    <Container>
      <div className="text-center bg-body-secondary p-5">
        <Image
          src="https://pnygroup.co/wp-content/uploads/2021/11/cropped-PNY-GROUP-OF-COMPANIES-logo-1.png"
          alt="Logo"
          style={{ maxWidth: '150px', marginBottom: '20px' }}
        />
        <h1>Login</h1>
        <Form className="p-3" onSubmit={handleSubmit}>
          <Row className="mb-3 justify-content-center">
            <Form.Group as={Col} md={6} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 justify-content-center">
            <Form.Group as={Col} md={6} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 justify-content-center">
            <Form.Group as={Col} md={6} controlId="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember me"
                style={{ textAlign: 'center' }}
              />
            </Form.Group>
          </Row>

          <form onSubmit={handleSubmit}>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
        </Form>
        <p className="mt-3">Don't have an account? Sign up now.</p>
        <Button style={{ alignItems:'center' }} type="button" variant="primary" className="custom-btn">
     <Link style={{color:'black'}} to="/signup">Sign Up</Link>
  </Button>
      </div>
    </Container>
  );
};

export default Login;
