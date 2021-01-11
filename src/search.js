import React from "react";

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inputValue: "",
            images: []
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input type="search" placeholder="search" value={this.state.inputValue} onChange={this.handleValueChange}/>
            <input type="submit" onClick={this.handleSubmit}/>
            </form>
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("https://pixabay.com/api/?key=19846696-b92da147ee2599ad73333c712"+"&q="+this.state.inputValue)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              images: result
            });
            this.changeParentState()
          },
          (error) => {
            // this.setState({
            //   isLoaded: true,
            //   error
            // });
          }
        )
    }
      
    handleValueChange(event) {
        this.setState({inputValue: event.target.value});
    }

    changeParentState(){
        this.props.changeImagesSrc(this.state.images);
    }

}