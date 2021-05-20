import {filters} from "./constants";
import React, {useState} from "react";
import {Accordion, Card, Form} from "react-bootstrap";

function App() {
    const [fil, setFil] = useState([])

    const filHandler = (e) => {
        setFil(prevState => [...prevState, e.target.value])
    }


    return (
        <div className="app">
            <Accordion>
                {filters.map(filter =>
                    <Card key={filter.id} style={{width: '250px'}}>
                        <Card.Header >
                            <Accordion.Toggle eventKey={filter.id + ""} style={{border: `none`, backgroundColor: 'rgba(0,0,0,.005)'}}>
                                {filter.title}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={filter.id + ""}>
                            <Card.Body>
                                <Form.Group controlId="formBasicCheckbox">
                                    {filter.values.map(item => <Form.Check key={item.id} onChange={filHandler} type="checkbox" label={item.value} value={item.id} />)}
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion>
        </div>
    );
}

export default App;
