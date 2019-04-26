import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({cats}) => {
    return (
        <div className="CardList">

            {
                cats.map(({id, name, email}) => {
                    return (
                        <Card key={id} id={id} name={name} email={email}/>
                    )
                })
            }

        </div>
    )
};

export default CardList;