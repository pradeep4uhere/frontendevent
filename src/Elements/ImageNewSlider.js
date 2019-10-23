import React from 'react';
import $ from 'jquery';
class ImageNewSlider extends React.Component {
  constructor(props) {
        super(props);
        this.state={
          gallery : this.props.gallery
        }
  }
  render() {
    let galleryData = this.props.gallery;
    console.log(galleryData);
    let optionItems = '';
    if(galleryData.length>0){ 
     return optionItems = this.props.gallery.map((val,i) =>
        <li data-thumb={val.thumb_image}>
          <a data-fancybox="gallery"   href={val.thumbImg}>
            <img src={val.defaultImg}/>
          </a>
        </li>
      );
    }
    return (
        <section className="slider">
        <div className="flexslider">
          <ul className="slides">
              {optionItems}
          </ul>
        </div>
      </section>
    )
  }
}

export default ImageNewSlider;
