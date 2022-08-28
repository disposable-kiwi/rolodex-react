import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {

        const { name, email, image, id } = this.props;

        return (
            <div className="card-container" key={id}>
                <img alt="Employee Card" src={image}></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    };
}

export default Card;