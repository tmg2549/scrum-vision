import React, {Component} from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListItem from '../components/ListItem'
import * as actions from '../actions/actions.js';

const mapStateToProps = state => ({
  productsList: state.products.productsList
});

const mapDispatchToProps = dispatch => ({
  getProduct: (event) => dispatch(actions.loadProductInfo(event))
});

class NavbarContainer extends Component {
  constructor(props){
    super(props);
  }



  render(){
    const array = this.props.productsList
    const elementsMap = array.map((element, i) => {
      return (<ListItem key={`option${i}`} productinfo={element} />)
    })
    return (
      <div className="navbar-display">
          <select name='productDropdown' id='productDropdown' onChange={this.props.getProduct}>
            <option value="">--Please choose an option--</option>
            {elementsMap}
          </select>
          <ul>
              <li>Overview</li>
              <li>Teams</li>
              <li>People</li>
          </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);