import React from 'react';

const Filters = (props) => {

    return (
        <ul className="list-group">
            {props.companyNames.map((company, i) => <li onClick={props.companySelected}
                key={i} className={company === props.selectedCompanyName ? 'list-group-item active' : 'list-group-item'}>{company}</li>)}
        </ul>
    )
}

export default Filters;