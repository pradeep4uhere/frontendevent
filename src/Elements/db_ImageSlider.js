import React from 'react';
import $ from 'jquery';
require('react-flex-slider/assets/index.css');
function ImageList(props) {
  const numbers = props.list;
  const optionItems = numbers.map((val,i) =>
          <li data-thumb={val.thumb_image}>
          <a data-fancybox="gallery"   href={val.thumbImg}>
            <img src={val.defaultImg}/>
          </a>
          </li>
  );
  return (
          <section className="slider">
          <div className="flexslider">
            <ul className="slides">
                {optionItems}
                </ul>
            </div>
          </section>
  );
}

class ImageSlider extends React.Component {
  constructor(props) {
        super(props);
        this.state={
            gallery : this.props.gallery
        }
        
        console.log(this.state.gallery)
  }

  componentDidMount(){
   
    };



  render() {
    //let galleryData = this.props.gallery;
    //console.log(galleryData);
   
    return (
           <ImageList list={this.props.gallery}/>
    )
}
}

export default ImageSlider;
