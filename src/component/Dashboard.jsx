import React, { useEffect, useState } from 'react';
import AxiosService from '../common/Apiservice';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {toast} from 'react-toastify'

function Dashboard() {
    const [sovlos, setSovlos] = useState([]);

    const getImages = async () => {
        try {
            let res = await AxiosService.get('/sovlo/images');
            if (res.status === 200) {
                setSovlos(res.data.allImages);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message || "Error Occured")
        }
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <Container>
               
            <h1 className='text-center mt-3' >Dashboard</h1>
            <hr />
            {/* <button className='btn btn-primary mb-5'>Add</button> */}
            <Row>
                { sovlos.length>0?  (
                     sovlos.map((sovlo) => (
                      <Col key={sovlo._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                          <Card>
                              <Card.Img
                                  variant="top"
                                  src={`${import.meta.env.VITE_API_URL}/images/${sovlo.sovloImage}`}
                                  alt="sovlo image"
                                  width='300px'
                                  height='300px'
                              />
                          </Card>
                      </Col>
                  ))
                ) :(
                  <p>No Images Available</p>
                )
              } 
            </Row>
        </Container>
    );
}

export default Dashboard;
