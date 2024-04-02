import { Container, Row, Col } from 'reactstrap';
import AsideContent from '../../AsideContent';
import FooterLayout from '../../FooterLayout';
import HeaderLayout from '../../HeaderLayout';
import ContentSection from '../../contentSection';

const HomeLayout = () => {
  return (
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
  );
};

export default HomeLayout;
