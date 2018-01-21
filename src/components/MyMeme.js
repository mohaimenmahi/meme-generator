import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMeme extends Component {
  render(){
    return(
      <div>

      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		myMemes: state.myMemes
	};
}

export default connect(mapStateToProps, null)(MyMeme);
