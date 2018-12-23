import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import PlatformChoices from '../components/PlatformChoices';
import choices from '../platforms.json'
import CatalogContainer from '../components/CatalogContainer';

class CatalogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlatForm: choices.platforms[0]
    }
    this.platFormSelected = this.platFormSelected.bind(this);
  }

  platFormSelected(selectedPlatForm) {
    this.setState({ selectedPlatForm })
  }

  render() {
    return (
      <Fragment>
        <Header text={`Games catalog ${this.state.selectedPlatForm}`} />
        <PlatformChoices 
          choices={choices.platforms}
          handleClick={this.platFormSelected} 
          selectedPlatForm={this.state.selectedPlatForm}
        />
        <CatalogContainer />
      </Fragment>
    )
  }
}

export default CatalogScreen;