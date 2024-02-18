import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p style={footerText}>&copy; ShopShop | Designed by itay</p>
            <div style={socialIcons}>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook size='2em' style={iconStyle} />
              </a>
              <p style={contactInfo}>
                <span style={iconStyle}>&#9742;</span>0541634352
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#343a40',
  color: '#fff',
  padding: '20px 0',
  marginTop: '20px',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const footerText = {
  marginBottom: '0',
};

const socialIcons = {
  marginTop: '10px',
};

const iconStyle = {
  marginRight: '10px',
  color: '#fff',
};

const contactInfo = {
  marginTop: '5px',
};

export default Footer;
