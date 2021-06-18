import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
    super()
    this.state = {
        family: [
            {
                name:'Nathen Amestoy',
                age: 26,
            },
            {
                name:'Erin Amestoy',
                hairColor: 'Blonde',
            },
            {
                name:'Natalie Amestoy',
                height: '5-3',
            }],

        userInput: '',
        filteredFamily: []
        }
        
    }
    handleChange(val){
        this.setState({userInput: val});
    }
    filterFamily(prop){
        let family = this.state.family;
        let filteredFamily = [];

        for(let i = 0; i < family.length; i++){
            if(family[i].hasOwnProperty(prop)){
                filteredFamily.push(family[i])
            }
        }
    this.setState({filteredFamily: filteredFamily});
    }
    render() { 
        
    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className='puzzleText'>ORIGINAL: {JSON.stringify(this.state.family, null, 10)}</span>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={ () => this.filterFamily(this.state.userInput)}>FILTER</button>
            <span className='resultsBox filterObjectRB'>FILTERED: {JSON.stringify(this.state.filteredFamily, null, 10)}</span>
        </div> 
    )
    }
}
 
export default FilterObject;