import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosService from '../common/Apiservice';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {toast} from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';


function Create() {
    const [createSovlo, setCreateSovlo] = useState(null);
    let [loading,setLoading]=useState(false);
      
     let navigate= useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
              setLoading(true);
        const formData = new FormData();
        formData.append('image', createSovlo);

        try {
            let res = await AxiosService.post('/sovlo/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            if(res.status==201){
                toast.success(res.data.message)
                navigate('/dashboard')
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error(error.response.data.message || "Error Occured")
        }finally{
             setLoading(false)
        }
    };

    return (
        <Container>
            <h1 className='text-center mt-3'>Add Sovlos</h1>
            <hr />
             <div className='container p-3'> 
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Choose an image file</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            onChange={(e) => setCreateSovlo(e.target.files[0])}
                        />
                    </Form.Group>
                    <Button variant="secondary" type="submit" className="mt-4 w-100">
                      {loading ? (
                            <>
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                            <span className="visually-hidden">Loading...</span>
                            </>
                        ) : (
                            'Add'
                        )}
                    </Button>
                </Form>
             </div>
        </Container>
    );
}

export default Create;
