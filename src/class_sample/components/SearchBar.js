import React from "react";

class SearchBar extends React.Component {
   state = {term: ''}

    onInputHandler = event => {
     
        this.setState({term: event.target.value});
       // console.log(this.state.term);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
    render(){



        return (
            <div className="ui segment">
               <form className="ui form" onSubmit={this.onFormSubmit}>
                   <label> Youtube Videos </label>
                   <hr/>
                   <div className="ui fluid icon input">
                        <input type="text" placeholder="Search videos here..."
                           value={this.state.term} onChange={this.onInputHandler} />
                        <i className="search icon"></i>
                   </div>
              </form>
                
            </div>
        )
    }
}

export default SearchBar;