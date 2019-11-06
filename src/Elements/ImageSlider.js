import React from 'react';
import $ from 'jquery';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "../Elements/slider.css";

function ImageList(props) {
  const numbers = props.list;
  const optionItems = numbers.map((val,i) =>
          <li data-thumb={val.thumb_image}>
            <a data-fancybox="gallery"   href={val.thumbImg}>
              <img src={val.thumbImg} />
            </a>
          </li>
  );
  return (optionItems);
}

class ImageSlider extends React.Component {
  constructor(props) {
        super(props);              
        
  }

  componentDidMount(){
   // console.log(this.state.galleryJson);
  };


  render() {
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];

    return (
        <ImageGallery items={this.props.galleryJson} style={{"margin-top":"-45px"}}/>
    )
  }
}

export default ImageSlider;
