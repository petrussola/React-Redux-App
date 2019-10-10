import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function PersonCard({listPeople, selectedPerson}) {
    
    const cardPerson = listPeople.find( person => {
        return person.name === selectedPerson;
    });

    return (
        <div>
            {
                !cardPerson ? <h1>noo</h1> : <h1>{cardPerson.name}</h1>
            }
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(PersonCard)