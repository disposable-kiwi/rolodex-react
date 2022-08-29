import {Component} from 'react';
import Card from "../card/card.component.jsx";
import './card-list.styles.css';

const CardList = (props)=>{
    //we're just destructuring our props and this customEmployees is just the array of employee Objects we pass in on our parent Component of App
    //within this line <CardList customEmployees={filteredEmployees} />
    const {customEmployees} = props;

    return(
        <div className="card-list">
        {customEmployees.map((employee) => {
            const {name, email, id, imgUrl} = employee;
            return (
                <Card key={id} email={email} image={imgUrl} name={name} />
            );
          })}
          </div>
    );
};

export default CardList;