import React, { Component } from 'react';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { themeGet } from 'themes/';

import { 
  getActiveType,
  selectCustomArray, 
  selectCustomLabels, 
  selectActiveObjects 
} from 'store/selectors';

import Button from 'components/button';

import { setActiveType } from 'store/actions';

import TestImage from './assets/loading.gif';

require('themes/app.scss');

const $BasicList = styled.ul`
  padding: 0;
  list-style:none;

  >li{
    display: inline-block;
  }
`


const $ObjectsList = styled.ul`

  h3{
    color: ${themeGet('color', 'white')}
  }
  .fancytext{
    font-style:italic;
  }
`

const $Example = styled.section`

  background-color:  ${themeGet('color', 'black')};
  color: ${themeGet('color', 'blue')};
`
class Example extends Component {

  render(){
    const { customTitle, customLabels, customArray, setActiveType, activeType, activeObjects } = this.props;

    return(
      <$Example id="app" >
        <h1>{ customTitle }</h1>
        <h1>{ `${customLabels.title} : ${customLabels.subTitle}` }</h1>
        <img src={TestImage} alt="loading"/>
        
        <$BasicList>
          { customArray.map((c, i) => (
            <li key={i}>
              <Button text={c} isActive={c === activeType} onClick={() => setActiveType(c)}/>
            </li>
          ))}
        </$BasicList>
        <$ObjectsList>
          { activeObjects.map((o, i) => (
            <li key={i}>
              <h3>{o.name}</h3>
              <p className={'fancytext'}>{o.animal}</p>
            </li>
          ))}
        </$ObjectsList>
      </$Example>
    );
  }
}

const mapStateToProps = (state) => ({
  customTitle: state.data.customData && state.data.customData.customTitle,
  activeType: getActiveType(state),
  customArray: selectCustomArray(state),
  customLabels: selectCustomLabels(state),
  activeObjects: selectActiveObjects(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setActiveType },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example)

