import React, { FC, useState } from 'react';
import styles from './WineForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios, { AxiosResponse } from 'axios';
import { Wine } from '../../Models/wine';
import { v4 as uuidv4 } from 'uuid';



export default function WineForm () {

    const responseBody = (response: AxiosResponse) => response.data;
    
    const [wine, setWine] = useState<Wine>({id: uuidv4(),brand:'', name:'', review:'', year:0, price:0, grapeType:'', wineType:4, notes:''});
    const [showResults, setShowResults] = useState(false);

    const requests = {
        post: (url: string, body: {}) =>
          axios
            .post(url, body)
            .then(responseBody)
      };

      const url = process.env.REACT_APP_API_URL + 'wines';
      
      function SubmitForm(event: any) {
        event.preventDefault();
        wine.year = Number(wine.year);
        wine.price = Number(wine.price);
        wine.wineType = Number(wine.wineType);
        requests.post(url, wine);
        setShowResults(true);
      }

      const updateData = (e: { target: { name: any; value: any; }; }) => {
        setWine({
            ...wine,
            [e.target.name]: e.target.value
        })
        const numberFields = ["wineType", "year", "price"];
        
    }

    const Activities = {
        create: (wine: Wine) => requests.post('/wines', wine)
      };

      const Results = () => (
        <div id="FormSubmittedAlert" className="alert alert-success" style={{maxWidth:'30%'}} role="alert">
        Wine Submitted!
        </div>
      )


      
  return (
    <div>
        { showResults ? <Results /> : null }
        
        <Form onSubmit={SubmitForm}>
            <div className='row'><div className='col-1'></div>
                <div className='col-5'>
                    <Form.Group className="mb-1" controlId="formBrand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder="Enter Brand" value={wine?.brand} name="brand" onChange={updateData} />
                        <Form.Text className="text-muted">
                        Required
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={wine?.name} onChange={updateData}/>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formReview">
                        <Form.Label>Review</Form.Label>
                        <Form.Control type="text" placeholder="Review" name="review" value={wine?.review} onChange={updateData}/>
                        <Form.Text className="text-muted">
                        Required
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" placeholder="Year" name="year" onChange={updateData}/>
                    </Form.Group>
                </div>
                <div className='col-5'>
                    <Form.Group className="mb-1" controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price" name="price" onChange={updateData}/>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formGrapeType">
                        <Form.Label>Varietal</Form.Label>
                        <Form.Control type="text" placeholder="Varietal" name="grapeType" value={wine?.grapeType} onChange={updateData}/>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formWineType">
                        <Form.Label>Type of Wine</Form.Label>
                        <Form.Control type="number" placeholder="Red=1 White=2 Sparkling=3 Other=4" name="wineType" onChange={updateData}/>
                        <Form.Text className="text-muted">
                        Required  
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formNotes">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control type="text" placeholder="Thoughts on wine" name="notes" value={wine?.notes} onChange={updateData}/>
                    </Form.Group>
                </div>
            </div>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>
  );
}
