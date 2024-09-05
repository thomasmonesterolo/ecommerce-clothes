import { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BookSearch = ({ onSearch }) => {
  return (
    <>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Form>
              <Form.Group controlId="formBasicSearch">
                <Form.Control
                  type="text"
                  placeholder="Buscar "
                  onChange={(e) => onSearch(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>      
    </>
  );
};

BookSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default BookSearch;