import React, {useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";


const FilterItem = ({filter}) => {
    const [expanded, setExpanded] = useState(false);
    const [checked, setChecked] = useState(false)
    const [filters, setFilters] = useState([])

    const handleChange = () => {
        setExpanded(prevState => !prevState);
    };
    const handleCheckChange = (event) => {
        setFilters(prevState => [...prevState, event.target.value])
        setChecked(event.target.checked);
    };

    return (
        <div>
            <Accordion square expanded={expanded} onChange={handleChange}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                                  style={{border: "1px solid grey"}}>
                    <p style={{textTransform: 'capitalize'}}>{filter.title}</p>
                </AccordionSummary>
                <AccordionDetails style={{border: "1px solid grey"}}>
                    <FormGroup>
                        {filter.values.map(value => (
                            <FormControlLabel key={value.id}
                                              control={<Checkbox onChange={handleCheckChange} value={value.id}/>}
                                              label={value.value}
                            />
                        ))}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};


export default FilterItem;
