import React, {Component} from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  productsList: state.products.productsList
});

class OverviewContainer extends Component {
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
          <select name='productDropdown' id='productDropdown'>
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
{/* <li><NavLink to="/view/"></NavLink></li> */}
{/* <li><NavLink to="/view/teams"></NavLink></li>
<li><NavLink to="/view/people"></NavLink></li> */}

export default connect(mapStateToProps, null)(NavbarContainer);