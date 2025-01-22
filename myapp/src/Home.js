import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const App = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/courses/${query}`); // Redirects to the course page
    } else {
      alert('Please enter a course name or ID to search!');
    }
  };
  const cardData = [
    {
      image: 'https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-form-cyborg-bot-brain-robotic-hand-digital-brain_127544-853.jpg?t=st=1731679436~exp=1731683036~hmac=acae51101d586c76630c051bb0cc1a7fe61131192ac780183d4a3118c6d65e5e&w=740',
      link: '/courses/artificial',
      title: 'AI and Robotics',
    },
    {
      image: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?t=st=1731679202~exp=1731682802~hmac=c9092a0e503cabd09915e86f78cf3f6cfbe4003309dbb9306b0017f8bfcd9c53&w=740',
      link: '/courses/webdevelopment',
      title: 'Web Development',
    },
    {
      image: 'https://img.freepik.com/free-photo/web-design-internet-website-responsive-software-concept_53876-124757.jpg?w=826',
      link: '/courses/webdesign',
      title: 'Web Design',
    },
    {
      image: 'https://img.freepik.com/premium-photo/cyber-security-data-protection-business-technology-privacy-concept_628331-247.jpg?w=900',
      link: '/courses/cyber',
      title: 'Cyber Security',
    },
    {
      image: 'https://img.freepik.com/premium-vector/amazon-logotype-white-background-logo-internet-service-sale-goods-online-store-platform-arrow-free-shipping-worldwide-shopping-editorial_661108-8065.jpg?w=740',
      link: '/courses/amazon',
      title: 'Amazon',
    },
    {
      image: 'https://img.freepik.com/free-photo/master-painting-mini-figures-with-brush_114579-12156.jpg?t=st=1731679836~exp=1731683436~hmac=55442995c45cb1c7dfb9ce19927422000501d88753fa33624e2aa456f1a96527&w=826',
      link: '/courses/arts',
      title: 'Arts & HandCrafts',
    },
  ];
  return (
    <>

      <Container fluid className='bg-secondary-subtle'>
        <Row className="d-flex justify-content-between text-center">
          <Col className="" xxl={3} xl={3} lg={6} sm={12}>
            <Image src={require("./02.jpg")} style={{ width: "150px", }} />
          </Col>
          <Col className="bg-secondary p-5 fw-bold" xxl={3} xl={3} lg={6} sm={12}  >
            Office # 102,<br></br>Floor #1 Talha Heights<br></br>
            Road Satellite Town,Rawalpindi
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5">
        <Row>
          <Col>
            <Navbar expand="lg" className="bg-secondary">
              <Container fluid>
                <Navbar.Brand href="#"><Image src={require("./04.webp")} style={{ width: "70px", }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link to="/">
                    <Link style={{color:'black'}} to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link >
                      <Link style={{color:'black'}} to="/Education">Education</Link>
                    </Nav.Link>
                    <Nav.Link style={{color:'black'}} href="#action2">Courses</Nav.Link>
                    <NavDropdown style={{color:'black'}} title="Courses Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item>
                      <Link to="/courses/amazon">Amazon</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                      <Link to="/courses/artificial">Artificial Intelligence</Link>
                     
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                      <Link to="/courses/webdevelopment">Web Development</Link>
                    
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                      <Link to="/courses/cyber"> Cyber Security</Link>
                       
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                      <Link to="/courses/webdesign">   Web Design</Link>
                     
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item >
                      <Link to="/courses/arts">Arts & HandCrafts</Link>
                        
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link >
                    <Link style={{color:'black'}} to="/ContactPage">     Contact Us</Link>
                 
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
             className="me-2"
              aria-label="Search"
                value={query}
           onChange={(e) => setQuery(e.target.value)} // Update query state
           />
          <Button variant="outline-success" className="bg-light" type="submit">
            Search
           </Button>
           </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5">
        <Row className='bg-light' p-5>
          <Carousel fade>
            <Carousel.Item>
              <img className='d-block w-100 '
                src="https://images.pexels.com/photos/5621952/pexels-photo-5621952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt='first slide'
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100'
                src="https://images.pexels.com/photos/5621945/pexels-photo-5621945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt='EDUCATE HTML LEARNING' />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100'
                src="https://images.pexels.com/photos/5530437/pexels-photo-5530437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt='first slide' />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>


      <Container className="text-center p-5">
        <Row className=" mt-5 text-primary">
          <Col xxl={3} >
            <h1 className="fw-bolder text-bg-light" style={{ fontSize: 100 }}>IT Trainings</h1>
            <br></br>
            <h2 className="text-bg-info p-3 mt-2">Pakistan's No.1 IT Training Institute</h2>
            <br></br>
            <h4 className="text-bg-secondary p-3 mt-2">Certified Courses with Money Making Skills! Empower Yourself with Practical Skills that Open Doors to Lucrative Opportunities

            </h4>

          </Col>
        </Row>
      </Container>

      <Container fluid className="text-center bg-dark-subtle p-5">
        <Row className=" mt-5 text-primary">
          <Col xxl={3} >
            <h1 className="fw-bold" style={{ fontSize: 90 }}>Admissions are open for the fresh batch.<br></br> Let’s grow together!</h1>
            <br></br>
            <Button variant="primary" size="lg">
              <Link style={{color:'white'}} to="/signup"> Join Us Now</Link>
            </Button>{' '}
          </Col>
        </Row>
      </Container>


      <Container className="pt-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {cardData.map((data, idx) => (
            <Col key={idx}>
              <a href={data.link} target="_blank" rel="noopener noreferrer" className="card-link">
                <Card className="hover-card fixed-card">
                  <Card.Img variant="top" src={data.image} className="fixed-image" />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="text-center my-5 pt-3">
        <h2 className="mb-4">About Us</h2>
        <Row className="justify-content-center">
          <Col md={4} className="d-flex justify-content-center">
            <Image
              src="https://img.freepik.com/free-photo/young-car-dealer-working-office_23-2148332980.jpg?t=st=1731349847~exp=1731353447~hmac=926e2083814efef41fdfa436bffa016ebf47712c9529f0dcf6a48cfe97e03816&w=740"  // Replace with your image URL
              rounded
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={8}>
            <p className="pt-5">
              We, Achievers Academy, situated at Malad West, Islamabad, Maharashtra are a leading institute
              offering a wide range of computer courses for all. Our mission is quality training with an
              affordable fee structure. Our uniquely designed curriculum makes our students employable
              and future ready. We have a dedicated team of skilled teachers and counsellors who make
              sure that regular up-gradation of courses is provided to students along with career guidance.
              Our professional team works harmoniously in unison, pushing the frontiers in growth and
              quality in imparting education.
            </p>
          </Col>
        </Row>
      </Container>

      <footer className="pt-3" >
        <Container fluid className="footer bg-body-secondary mt-5">
          <Row>
            <Col md={3} className="bird-feeds bg-warning p-5">
              <h3 className="p-2">BIRD FEEDS</h3>
              <p>
                Check out about this Course<br />
                <a href="https://en.wikipedia.org/wiki/Web_development">Web Development</a><br />
                2 weeks ago
              </p>
              <p>
                Check out about this Course<br />
                <a href="https://en.wikipedia.org/wiki/Artificial_intelligence">Artificial Intelligence</a><br />
                2 weeks ago
              </p>
              <p>
                Check out about this Course<br />
                <a href="https://en.wikipedia.org/wiki/Computer_security">Cyber Security</a><br />
                2 weeks ago
              </p>
            </Col>

            <Col md={3} className="newsletter bg-body-secondary text-center">
              <h3 className="p-5">NEWSLETTER</h3>
              <p>Get Your Daily News About Phone Product and Send us Your Email to Contact Us and Get Information.</p>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Your Email Address" />
                </Form.Group>
                <Button variant="primary" type="submit">Sign Up</Button>
              </Form>
            </Col>

            <Col className="bg-info">
              <h3 className="text-center">Links</h3>
              <div className="d-flex flex-column align-items-center">
                <p>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="3x" className="my-3" />
                  </a>
                </p>
                <p>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="3x" className="my-3" />
                  </a>
                </p>
                <p>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="3x" className="my-3" />
                  </a>
                </p>
                <p>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="3x" className="my-3" />
                  </a>
                </p>
              </div>
            </Col>

            <Col md={3} className="contact text-center">
              <h3 className="p-5">CONTACT</h3>
              <p>Phone: 1-000-000-0000<br />1-000-000-0000</p>
              <p>Fax: 1-000-000-0000</p>
              <p>Email: abcdefg@hijs.dfh<br />fjashf@jkfs.ckd</p>
            </Col>
          </Row>
        </Container>
      </footer>


    </>
  )
}

export default App
