import React from 'react';
import {MenuItem, SelectField} from "material-ui";

const RatingSelect = ({rating, onChange}) => {
    const items = [...new Array(10).keys()].map(i => <MenuItem key={i} value={i + 1} primaryText={i + 1}/>);
    return (
        <SelectField value={rating} onChange={(e, i, v) => onChange(v)} maxHeight={200}>
            {items}
        </SelectField>
    )
};

export default RatingSelect;
