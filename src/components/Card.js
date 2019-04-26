import React from 'react';
import './Card.css';
import ColorUtil from '../helpers/Color.js';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            bgColor: ColorUtil.getRandomRGBColor()
        }
    }

    render() {
        const {id, name, email} = this.props;

        return (
            <div className="Card" style={{backgroundColor: this.state.bgColor}}>
                <div className="Card-imageWrp">
                    <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt={name} className="Card-image"/>
                </div>

                <div className="Card-body">
                    <h3 className="Card-title">{name}</h3>

                    <div className="Card-metaWrp">
                        <div className="Card-meta">{email}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;