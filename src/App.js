import "./App.css";
import Layout from "./components/layouts/Layout";
import Home from "./pages/home/Home";
import "./index.css";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <div className="container">
          <Row>
            <Col className="col-6 text-light pb-3">Products</Col>
            <Col className="col-6 text-light">These are the products</Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
}

export default App;
