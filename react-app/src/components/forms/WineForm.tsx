import React, { FC } from 'react';
import styles from './WineForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function WineForm () {
  return (
    <Form>
        <div className='row'><div className='col-1'></div>
            <div className='col-5'>
                <Form.Group className="mb-1" controlId="formBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="email" placeholder="Enter Brand" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                    Optional
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formReview">
                    <Form.Label>Review</Form.Label>
                    <Form.Control type="text" placeholder="Review" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="number" placeholder="Year" />
                </Form.Group>
            </div>
            <div className='col-5'>
                <Form.Group className="mb-1" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formGrapeType">
                    <Form.Label>Varietal</Form.Label>
                    <Form.Control type="text" placeholder="Varietal" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formWineType">
                    <Form.Label>Type of Wine</Form.Label>
                    <Form.Control type="text" placeholder="eg: White, Red, Sparkling" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control type="text" placeholder="Thoughts on wine" />
                </Form.Group>
            </div>
        </div>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
