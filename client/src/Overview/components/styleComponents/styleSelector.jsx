import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.jsx';
import $ from 'jquery';


class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styleList: [],
      currentProduct: '',
      currentStyle: ''
    }

    this.onClick = this.onClick.bind(this);

  }

  onClick(e) {
    //console.log('Checking E ', e.target.props)
    console.log('Checking Props', this.props)
    //console.log('Target Value', e.target.dataset.value)
  }



  render () {
    if(!this.props) {
      return (
        <div>
          <h1>NO DATA HERE NANANANANAN BATMAN</h1>
        </div>
      )
    } else {
      //console.log('Where props? ', this.props)
    return (
      <div>
         <h1 data-testid = 'style'>Available Styles</h1>
        <br></br>
      <div className = 'grid-4'>
        {this.props.styleList.map((style) =>
      <Style value = {style} onClick = {this.onClick} name={style.name} pic = {style.photos[0].thumbnail_url} key ={style.style_id} />
    )}
      </div>
      </div>
    )
  }
}

}

export default StyleSelector;