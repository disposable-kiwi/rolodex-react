import { Component } from "react";
import "./card.styles.css";

const Card = (props)=>{
    //we destructure our props as we have done before
    //we destructure this from our custom props from this place in our parent component of CardList:
    // <Card id={id} email={email} image={imgUrl} name={name} />
    const { name, email, image, id } = props;

    return (
        <div className="card-container" key={id}>
            <img alt="Employee Card" src={image}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;