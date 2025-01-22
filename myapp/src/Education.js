import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'; // Custom CSS for hover effects and uniform card sizes

function GridExample() {
  // Array of image URLs, titles, and corresponding links
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
    <Container>
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
  );
}

export default GridExample;
