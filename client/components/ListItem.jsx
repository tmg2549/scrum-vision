import React, {Component} from 'react'

class ListItem extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <option
        productid={this.props.productinfo._id}
        value={this.props.productinfo.name}
      >{this.props.productinfo.name}
      </option>
    )
  }

}

export default ListItem;