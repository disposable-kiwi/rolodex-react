import {Component} from 'react';
import Card from "../card/card.component.jsx";
import './card-list.styles.css';

class CardList extends Component{

    render(){
        //doing this will show us that this.props is a hash of custom attributes passed in (ex. ours would look like this this.props = { customEmployees: filteredEmployees })
        console.log(this.props);
        //so therefore we can also destructure that hash/Object so that we can circumcent having to reference this.props.employees and just reference employees by destructuring it like so
        const {customEmployees} = this.props;

        return(
            <div className="card-list">
            {customEmployees.map((employee) => {
                const {name, email, id, imgUrl} = employee;
                return (
                    <Card id={id} email={email} image={imgUrl} name={name} />
                );
              })}
              </div>
        );
    }
}

export default CardList;