import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
class SocialCommittment extends React.Component {
  constructor() {
        super();
        this.state={
          
        }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
            <div className="container">
            <h1 className="text-center white-text mt-85">Social Commitment
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">
            At Rudra Xp, our endeavour is to make the most of the time that you take out for your travel pursuits and embellish them with characteristic, exclusive and rich experiences. We care for the unique perspective, the appreciation of excellence and that which maybe simple but not ordinary.</h2>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div className="container">
        <div className="col-lg-12 m-ft66">
          <div className="row m-t-50">
            <div className="col-xl-12">
            <p>At Rudra Xp, our endeavour is to make the most of the time that you take out for your travel pursuits and embellish them with characteristic, exclusive and rich experiences. We care for the unique perspective, the appreciation of excellence and that which maybe simple but not ordinary.</p>
<p>Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
</p>

<p>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
</p>
            </div>
            
          
          </div>
        </div>
      </div>
        
      <Footer/>
        </div>
    )
  }
}

export default SocialCommittment;