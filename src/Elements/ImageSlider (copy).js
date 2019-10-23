import React from 'react';
import $ from 'jquery';

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
        
  }

  componentDidMount(){
   // console.log(this.state.galleryJson);
   
  };


  render() {
    console.log('gall:')
    console.log(this.props.galleryJson)
    return (
        <section className="slider" style={{"margin-top":"-45px"}}>
        <div className="flexslider">
          <ul className="slides">
            <li data-thumb="../rudra/images/detailed-image.png">
                <a data-fancybox="gallery" href="../rudra/images/detailed-image.png">
                  <img src="../rudra/images/detailed-image.png" />
                </a>
            </li>
            <li data-thumb="../rudra/images/detailed-image.png">
             <a data-fancybox="gallery" href="../rudra/images/detailed-image.png">
              <img src="../rudra/images/detailed-image.png" />
              </a>
            </li>
            <li data-thumb="../rudra/images/detailed-image.png">
              <a data-fancybox="gallery" href="../rudra/images/detailed-image.png">
              <img src="../rudra/images/detailed-image.png" />
              </a>
            </li>
            <li data-thumb="../rudra/images/detailed-image.png">
            <a data-fancybox="gallery" href="../rudra/images/detailed-image.png">
              <img src="../rudra/images/detailed-image.png" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default ImageSlider;
