// import React, {useState} from 'react';
// import {Accordion, Card, Button} from "react-bootstrap";
//
//
// const FilterItem = ({filter, filHandler}) => {
//     const [expanded, setExpanded] = useState(false);
//     const [checked, setChecked] = useState(false)
//
//     const handleChange = () => {
//         setExpanded(prevState => !prevState);
//     };
//     const handleCheckChange = (event) => {
//         filHandler(event)
//         setChecked(event.target.checked);
//     };
//
//
//     return (
//         <Accordion defaultActiveKey="0">
//             <Card>
//                 <Card.Header>
//                     <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                         Click me!
//                     </Accordion.Toggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="0">
//                     <Card.Body>Hello! I'm the body</Card.Body>
//                 </Accordion.Collapse>
//             </Card>
//             <Card>
//                 <Card.Header>
//                     <Accordion.Toggle as={Button} variant="link" eventKey="1">
//                         Click me!
//                     </Accordion.Toggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="1">
//                     <Card.Body>Hello! I'm another body</Card.Body>
//                 </Accordion.Collapse>
//             </Card>
//         </Accordion>
//     )
// };
//
//
// export default FilterItem;
