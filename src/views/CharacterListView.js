import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import {charsReducer} from "../reducers/starWarsReducer";
import {getCharacters, myCleverAction} from "../actions";
import Loader from 'react-loader-spinner'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
     console.log('componentDidMount')
      this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
        return <div>Hello<Loader /></div>
    }
    return (
      <div className="CharactersList_wrapper">
          {this.props.error!== ''
           ? <h1>{this.props.error}</h1>
           : <CharacterList characters={this.props.characters} />
           }
      </div>
    );
  }
}

function mapStateToProps({charsReducer}){
  // const characters = charsReducer.results
  console.log('charsReducer',charsReducer)
  return{
      fetching:  charsReducer.fetching,
      characters:  charsReducer.characters,
      nextUrl:charsReducer.nextUrl,
      error: charsReducer.error
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  // null /* mapStateToProps replaces null here */,
    mapStateToProps,
  {
      getCharacters,
  }
)(CharacterListView);
