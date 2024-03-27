import { Col, Container, Row } from 'reactstrap';
import FooterLayout from './components/HomeLayout/FooterLayout';
import HeaderLayout from './components/HomeLayout/HeaderLayout';
import ContentSection from './components/HomeLayout/contentSection';
import AsideContent from './components/HomeLayout/AsideContent';
import { EncrypterProvider } from './context/EncrypterContext';

const App = () => {
  return (
    <EncrypterProvider>
      <main>
        <HeaderLayout />
        <Container fluid className=" mt-4 flex-shrink-0 flex-grow-1">
          <Row>
            <Col md={8} className="mt-5">
              <ContentSection />
            </Col>
            <Col md={4}>
              <AsideContent />
            </Col>
          </Row>
        </Container>
        <FooterLayout />
      </main>
    </EncrypterProvider>
  );
};

export default App;
