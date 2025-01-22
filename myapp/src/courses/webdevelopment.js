import React from 'react';
import {Container,Row,Col, Image} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './../App.css';
import hat from './../04.webp';
const WebDevelopment = () => {
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
  const items = [
    {
      icon: '📚', // Replace with actual icon/image URL
      title: 'Up-Gradation of Courses',
    },
    {
      icon: '👍', // Replace with actual icon/image URL
      title: '100% Job Assistance',
    },
    {
      icon: '🎓', // Replace with actual icon/image URL
      title: '100% Practical Training',
    },
    {
      icon: '👥', // Replace with actual icon/image URL
      title: 'Small Batches for Personalised Attention',
    },
    {
      icon: '💻', // Replace with actual icon/image URL
      title: 'Advanced Technology',
    },
    {
      icon: '🌟', // Replace with actual icon/image URL
      title: 'Experienced Faculty',
    },
    {
      icon: '🚀', // Replace with actual icon/image URL
      title: 'Career Growth Support',
    },
    {
      icon: '📈', // Replace with actual icon/image URL
      title: 'Result-Oriented Learning',
    },
  ];

  // Group items into sets of 4
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }
  return (
    <>
    <Navbar expand="lg" className="bg-secondary">
              <Container fluid>
                <Navbar.Brand href="#"><Image src={hat} style={{ width: "70px", }} /></Navbar.Brand>
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
                    <NavDropdown title="Courses Link" id="navbarScrollingDropdown">
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
    <Container xxl={3} xl={3} lg={6} md={6} sm={12} fluid style={{border: '2px solid GrayText',
    backgroundColor: 'lightblue',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpeg")`, // replace with your actual image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}>
      <Row style={{color:'grey',padding:'100px'}}>
        <h1 style={{paddingBottom:'40px',color: 'white',
  textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}} className="text-opacity-100">Full Stack Web Development</h1>
        <h3 style={{paddingBottom:'3px',color: 'white',
  textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}}>A full-stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), back-end Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB)
        </h3>
        <p style={{ padding: '50px', marginRight: '20px' }}>
  <Button style={{ float: 'left', marginLeft: '-40px' }} type="button" variant="primary" className="custom-btn">
     <Link style={{color:'black'}} to="/signup"> Get Started</Link>
  </Button>
  </p>
      </Row>
    </Container>
    <br></br>
    <Container className= "mt-5">
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
        alt='first slide'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Row>
    </Container>
    <br></br>
    <Container Container xxl={3} xl={3} lg={6} md={6} sm={12} style={{padding:'70px',backgroundColor:'steelblue'}}>
      <h1 style={{paddingBottom:'30px',color: 'white',
  textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}}>The Importance of Full-stack Developers in Today's Digital World
      </h1>
      <h3 style={{paddingBottom:'30px'}}>Full-stack developers play a pivotal role in today's digital world due to their comprehensive understanding and proficiency across front-end and back-end development technologies. Their ability to work on all web application layers, from the user interface to the server-side logic and database management, makes them highly versatile and valuable in various industries. Here's an elaboration on the importance of full-stack developers:</h3>
    <Accordion style={{paddingTop:'10px'}} defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h3>Versatility and Efficiency</h3></Accordion.Header>
        <Accordion.Body>
          <h4>
        Full-stack developers are proficient in multiple programming languages, frameworks, and tools, allowing them to transition seamlessly between different layers of development. This versatility enables them to take on diverse projects and tasks, from designing user interfaces to optimizing database queries. This leads to more efficient development cycles and quicker time-to-market for products.
        </h4>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h3>End-to-End Development</h3></Accordion.Header>
        <Accordion.Body>
        <h4>
        Full-stack developers with expertise in front-end and back-end technologies can oversee the entire web application development process. They can translate client requirements into functional user interfaces, implement server-side functionalities, and ensure seamless integration between various components, resulting in cohesive and robust software solutions.
        </h4>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h3>Problem-Solving and Innovation</h3></Accordion.Header>
        <Accordion.Body>
        <h4>
        Full-stack developers possess a holistic understanding of software architecture and development principles, allowing them to tackle complex technical challenges and implement innovative solutions. Their ability to identify bottlenecks, optimize performance, and troubleshoot issues across the entire stack contributes to digital products' overall success and scalability.
        </h4>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    <br></br>
    <Container className="pb-5" style={{padding:'70px',backgroundColor:'darkblue',border:'2px' }}>
<h1 style={{paddingBottom:'40px',color: 'white',
  textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}}>Benefits of Full Stack Web Development</h1>
    <ListGroup>
      <ListGroup.Item style={{
        borderWidth: '5px', // Make border thicker
        borderColor: '#0d6efd',
        borderStyle: 'solid',
        padding: '20px', // Increase padding for larger item size
        marginBottom: '10px', // Add space between items
      }} variant="primary"><strong>Complete ownership:</strong> Full stack developers can provide complete ownership and understanding of the project. This allows the client to maintain a continuous line of communication with the developer and have complete access to the work. 
      </ListGroup.Item>
      <br></br>
      <ListGroup.Item style={{
        borderWidth: '5px',
        borderColor: '#6c757d',
        borderStyle: 'solid',
        padding: '20px',
        marginBottom: '10px',
      }} variant="secondary"><strong>Time and cost savings:</strong>Full stack developers can save time and cost by working with a range of tools and frameworks for both the front-end and back-end. This can be especially beneficial for startups and mid-sized businesses. 
      </ListGroup.Item>
      <br></br>
      <ListGroup.Item style={{
        borderWidth: '5px',
        borderColor: '#198754',
        borderStyle: 'solid',
        padding: '20px',
        marginBottom: '10px',
      }} variant="success"><strong>Increased productivity: </strong>Full stack developers can work in a collaborative environment to coordinate the development of both the front-end and back-end. This can lead to increased productivity for the developers, which can save time and cost for the business. 
      </ListGroup.Item>
      <br></br>
      <ListGroup.Item style={{
        borderWidth: '5px',
        borderColor: '#dc3545',
        borderStyle: 'solid',
        padding: '20px',
        marginBottom: '10px',
      }} variant="danger"><strong>Faster bug fixing and troubleshooting:</strong>Full stack developers can fix bugs and troubleshoot faster. 
      </ListGroup.Item>
      <br></br>
      <ListGroup.Item style={{
        borderWidth: '5px',
        borderColor: '#ffc107',
        borderStyle: 'solid',
        padding: '20px',
        marginBottom: '10px',
      }} variant="warning"><strong>Seamless knowledge transfer and collaboration: </strong> Full stack developers can collaborate seamlessly with other team members. 
      </ListGroup.Item>
      <br></br>
      <ListGroup.Item  style={{
        borderWidth: '5px',
        borderColor: '#0dcaf0',
        borderStyle: 'solid',
        padding: '20px',
        marginBottom: '10px',
      }} variant="info"><strong>Database handling:</strong>Full stack developers can use database and web storage technologies to store, manipulate, and retrieve large amounts of data quickly and efficiently. 
      </ListGroup.Item>
      <br></br>
      <ListGroup.Item variant="light"><strong>Version control: </strong>Full stack developers can use version control to keep track of changes, collaborate with team members, and revert to previous versions if needed. 
      </ListGroup.Item>
    </ListGroup>
    </Container>
    <br></br>
    <Container className="pt-4">
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
    <Container className="why-us-carousel text-center my-5 pt-5">
      <h2 className="section-title" style={{paddingTop:'30px'}}>Why Us</h2>
      <Carousel style={{marginTop:'20px',paddingTop:'150px'}} interval={3000} controls indicators>
        {groupedItems.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around flex-wrap">
              {group.map((item, idx) => (
                <div key={idx} className="icon-carousel-item text-center">
                  <div className="icon" style={{ fontSize: '50px', color: '#00A2FF' }}>
                    {item.icon}
                  </div>
                  <h5 className="mt-3">{item.title}</h5>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
    <Container className="text-center my-5 pt-5">
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
            We, Achievers Academy, situated at Malad West, Mumbai, Maharashtra are a leading institute
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
              <Button variant="primary" type="submit">
                  <Link style={{color:'white'}} to="/signup">Sign Up</Link>
                </Button>
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

export default WebDevelopment