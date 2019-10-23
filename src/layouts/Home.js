import React from 'react';

class Default extends React.Component {
  constructor() {
        super();
        this.state={
        }
  }


  render() {
    const { postList }= this.props;
    return (
    <div style={{'fontSize':'12px'}}>
    <div class="col-md-12">
    <br/>
    <div class="row">
      <div class="col-md-8">
      <div class="default"><b>Top Headlines</b></div>
        <hr/>
        <PostItem type="100"/>
      </div>

      <div class="col-md-4">
        <div class="default"><b>Popular News</b></div>
        <hr/>
        <div style={{'max-height':'750px','overflow':'auto'}}>
        <PostItemList type="101"/>
        </div>
      </div>
    </div>
    <hr style={{'border':'thin dashed'}}/>

     <div class="row">


      <div class="col-md-5">
        <div class="default"><b>Movies</b></div>
        <hr/>
        <div class="row">
          <div className="col-md-6">
            <PostItemList type="97"/>
          </div>
          <div className="col-md-6">
            <PostItemList type="88"/>
          </div>
      </div>


      </div>

      

      <div class="col-md-5">
        <div class="default"><b>Business News</b></div>
        <hr/>
        <div class="row">
          <div className="col-md-6">
            <PostItemList type="101"/>
          </div>
          <div className="col-md-6">
            <PostItemList type="101"/>
          </div>
      </div>

      </div>

      <div class="col-md-2">
         <div class="default"><b>Popular Post</b></div>
         <hr/>
         <TopItemList type="101"/>
      </div>
    </div>
    <hr/>
     <div class="row">


      <div class="col-md-5">
        <div class="default"><b>Local News</b></div>
        <hr/>
        <div class="row">
          <div className="col-md-12" style={{'fontSize':'12px'}}>
            <TextTruncate
              line={1}
              truncateText="…"
              text=<TitleItemList type="98"/>
              />
          </div>
      </div>
      </div>
      <div class="col-md-5">
        <div class="default"><b>Business News</b></div>
        <hr/>
        <div class="row">
          <div className="col-md-6">
            <PostItemList type="101"/>
          </div>
          <div className="col-md-6">
            <PostItemList type="101"/>
          </div>
      </div>

      </div>

      <div class="col-md-2">
         <div class="default"><b>Popular Category</b></div>
         <hr/>
         <div className="col-md-12" style={{'fontSize':'12px'}}>
            <CategoryList/>
            
          </div>
      </div>
    </div>

    </div>
    </div>
    )
  }
}

export default Home;
