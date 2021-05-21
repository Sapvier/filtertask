import {filters} from "./constants";
import React, {useEffect, useState} from "react";
import {Accordion, Card, Form} from "react-bootstrap";
import Items from "./Items";

function App() {
    const [fil, setFil] = useState({
        color: [],
        sdd: [],
        size: [],
        length: []
    })
    const [data, setData] = useState({
        data: []
    })

    useEffect(() => {
        const { color, sdd, size, length } = fil;

        const colorFilter = color.length ? `color=${color}` : '';
        const sddFilter = sdd.length ? `&sdd=${sdd}` : '';
        const sizeFilter = size.length ? `&size=${size}` : '';
        const lengthFilter = length.length ? `&length=${length}` : '';


        const params = `?${colorFilter}${sddFilter}${sizeFilter}${lengthFilter}`;

        fetch(`http://localhost:5000/${params}`)
            .then(r => r.json())
            .then(r => setData(r))
    }, [fil]);

    const filHandler = (id, filter) => {
        if (fil[filter].includes(id)) {
            setFil({...fil, [filter]: fil[filter].filter(item => item !== id)})
        }
        else setFil({...fil, [filter]: [...fil[filter], id]})
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
                                    {filter.values.map(item => <Form.Check key={item.id} onChange={() => filHandler(item.id, filter.title)} type="checkbox" label={item.value} value={item.id} />)}
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion>
            <Items data={data.data}/>
        </div>
    );
}

export default App;
