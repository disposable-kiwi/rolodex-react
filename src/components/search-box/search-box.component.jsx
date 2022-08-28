import {Component} from 'react';

class SearchBox extends Component{
    constructor(){
        super();

        this.state={};
    }

    render(){

        const {handleClick, placeholder, className} = this.props;
        
        return (
            <input className={className} type="search" placeholder={placeholder}
            onChange={handleClick}
          />
        );
    };
}

export default SearchBox;