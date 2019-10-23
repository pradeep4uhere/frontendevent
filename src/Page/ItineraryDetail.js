import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import ImageSlider from '../Elements/ImageSlider';
class Destination extends React.Component {
  constructor() {
        super();
        this.state={
          eventDetails:[
            {
              id:100,
              title:"Mahak-(Morning)",
              place:"Jaipur",
              price:"INR 1500.00",
              image:"../rudra/images/pic1.png"
            },
            {
              id:101,
              title:"Ghungroo–Country’s only Dinner Theatre",
              place:"Delhi",
              price:"INR 3500.00",
              image:"../rudra/images/pic1.png"
            },
            {
              id:102,
              title:"Sham e Taj",
              place:"Agra",
              price:"INR 1000.00",
              image:"../rudra/images/pic1.png"
            }, 
            {
              id:103,
              title:"Sham e Mumbai",
              place:"Mumbai",
              price:"INR 1950.00",
              image:"../rudra/images/pic1.png"
            }
            
            ]
        }
        
  }

  

  render() {
    const { postList }= this.props;
    const {eventDetails} = this.state;
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
          <div className="container">
            <h1 className="text-center white-text mt-85">Moonland on Earth : Lahaul – Ladakh Tour
            </h1><p className="text-white small text-center">AGRA</p>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">“There are no lines in nature, only areas of colour, one against another."<br /><i> – Edouard Manet</i></h2>
          </div>
        </div>
        <div className="container">
          <ImageSlider/>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-xl-8">
              <div className="col-xl-12"><h2>The Trekker’s Basecamp</h2> <p>Get on to a Tonga and ride into an evening of a glorious sunset with the Taj and an exclusive introduction to the extra ordinary story of humble beginnings, dedication, an undying love for the art, achievements and life of the National Award winning Master craftsman of the legendary marble Inlay work (as in the Taj Mahal). Some of the Masterpieces created by him are so intricate that now they can never be created again thanks to his unmatched commitment and finesse. </p>
                <p>
                  Witness a small piece of craft being created right there as the skilled craftsmen work their magic. Be his private guest and enjoy a sit down dinner, in the courtyard of his home cum workshop, in the heart of the city.</p> </div>		  
              <div className="col-xl-12">
                <h4>ADDONS</h4>
                <div id="accordion1" role="tablist">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne1">
                      <h5 className="mb-0"><a data-toggle="collapse" href="#collapseOne1" role="button" aria-expanded="true" aria-controls="collapseOne1"> Unconquered Mewar (North India - Rajasthan) </a> </h5>
                    </div>
                    <div id="collapseOne1" className="collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordion1">
                      <div className="card-body"><span className="bold">October - April</span> (INR): 112250 | (USD): 1727<br /><span className="bold">May - September</span> (INR): 89900 | (USD): 1383<br />
                        <a href>View Destinations &gt;&gt;</a>&nbsp;&nbsp;<a href>View Includes &gt;&gt;</a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne1">
                      <h5 className="mb-0"><a data-toggle="collapse" href="#collapseOne2" role="button" aria-expanded="true" aria-controls="collapseOne2"> Soup for Soul (Central India - UP and MP) </a> </h5>
                    </div>
                    <div id="collapseOne2" className="collapse" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordion1">
                      <div className="card-body"><span className="bold">October - April </span>(INR): 120250 | (USD): 1850 |<br />
                        <span className="bold">May - September </span>(INR): 90800 | (USD): 1397<br />
                        <a href>View Destinations &gt;&gt;</a>&nbsp;&nbsp;<a href>View Includes &gt;&gt;</a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne1">
                      <h5 className="mb-0"><a data-toggle="collapse" href="#collapseOne3" role="button" aria-expanded="true" aria-controls="collapseOne3"> Coffee with Hoysalas (South India) </a> </h5>
                    </div>
                    <div id="collapseOne3" className="collapse " role="tabpanel" aria-labelledby="headingOne3" data-parent="#accordion1">
                      <div className="card-body"><span className="bold">October - April </span>(INR): 112250 | (USD): 1727<br /><span className="bold">May - September </span>(INR): 89900 | (USD): 1383<br />
                        <a href>View Destinations &gt;&gt;</a>&nbsp;&nbsp;<a href>View Includes &gt;&gt;</a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne4">
                      <h5 className="mb-0"><a data-toggle="collapse" href="#collapseOne4" role="button" aria-expanded="true" aria-controls="collapseOne4"> 7 Days Kerala </a> </h5>
                    </div>
                    <div id="collapseOne4" className="collapse" role="tabpanel" aria-labelledby="headingOne4" data-parent="#accordion1">
                      <div className="card-body"><span className="bold">October - April </span>(INR): 112250 | (USD): 1727<br /><span className="bold">May - September </span>(INR): 89900 | (USD): 1383<br />
                        <a href>View Destinations &gt;&gt;</a>&nbsp;&nbsp;<a href>View Includes &gt;&gt;</a>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div id="accordion1" role="tablist">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne1">
                      <div className="row">
                        <div className="circular-landscape" style={{marginLeft: '10px'}}><img src="../rudra/images/dest2.png" alt="" /></div>
                        <div className="col-xl-10"><h3 className="mb-0"><a data-toggle="collapse" href="#collapseOne1" role="button" aria-expanded="true" aria-controls="collapseOne1">
                              Day1 : Manali </a> </h3><br /><p style={{marginTop: '-20px'}}>Arrive Manali and check in to the hotel.</p></div>
                      </div>
                    </div>
                    <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordion1">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-12"><img src="../rudra/images/manali.png" alt="" className="img-fluid" /></div>
                          <div className="col-xl-12"><br />
                            <p>Arrive Manali and check in to the hotel.Manali has a beauty of its own. Fields of wild flowers, small picturesque hamlets and fruit laden orchards make it into a picture perfect 
                              destinations. 
                              The day is yours to relax and soak in the beauty of the valley with its rivers and steams. 
                              Evening proceed to the popular market to get the vibe of the town before getting together to a relaxed dinner.
                              Overnight at Hotel Johnsons in Manali.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo1">
                      <div className="row">
                        <div className="circular-landscape" style={{marginLeft: '10px'}}><img src="../rudra/images/dest3.png" alt="" /></div>
                        <div className="col-xl-10"><h3 className="mb-0"><a data-toggle="collapse" href="#collapseTwo1" role="button" aria-expanded="true" aria-controls="collapseTwo1">Day 2: Keyllong</a> </h3><br /><p style={{marginTop: '-20px'}}>Morning breakfast. Proceed to Keylong in Lahaul via Rohtang Pass  at 13,050 ft.... </p></div>
                      </div>
                    </div>
                    <div id="collapseTwo1" className="collapse" role="tabpanel" aria-labelledby="headingTwo1" data-parent="#accordion1">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-12"><img src="../rudra/images/manali.png" alt="" /></div>
                          <div className="col-xl-12"><br /><p>Don your forest gear and come join us as we venture into the heart of some of the most popular forests in India. Carefully crafted for all nature enthusiasts, this wildlife tour highlights the rich biodiversity of India’s green abodes – sanctuaries to countless animals and home to millions of plants.</p>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingThree1">
                      <div className="row">
                        <div className="circular-landscape" style={{marginLeft: '10px'}}><img src="../rudra/images/dest4.png" alt="" /></div>
                        <div className="col-xl-10"><h3 className="mb-0"><a data-toggle="collapse" href="#collapseThree1" role="button" aria-expanded="true" aria-controls="collapseThree1">
                              Day 3: Sarchu</a> </h3><br /><p style={{marginTop: '-20px'}}>(Optional) Morning yoga by the riverside.Morning breakfast</p></div>
                      </div>
                    </div>
                    <div id="collapseThree1" className="collapse" role="tabpanel" aria-labelledby="headingThree1" data-parent="#accordion1">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-12"><img src="../rudra/images/manali.png" alt="" /></div>
                          <div className="col-xl-12"><br /><p>Prepare to dive into a realm of otherworldly charm. Ladakh stands apart from the rest of the country – stark, distant, and brooding, with swirls of white clouds often providing the only sense of motion for miles. The snow-brushed peaks seem to hold up the marvellous lakes and valleys and the amazing people living in and... </p>
                          </div>
                        </div>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="shadow-block text-center"><span className="price-red-large">INR 19,500<br />USD: 1,146.00</span><br /><br /><p>
                  <button type="button" className="btn btn-red-border btn-lg text-uppercase btn-red-small1" data-toggle="modal" data-target="#exampleModalCenter">Details</button>			</p><p><span className="text-black-medium">Departure Date:</span><br /><input type="date" /></p><p>
                  <button type="button" className="btn btn-red btn-lg btn-block text-uppercase btn-red-small1">Book This Experience</button>
                </p>
                <p className="text-center small bold">Share</p>
                {/* Add font awesome icons */}
                <a href="#" className="fa fa-facebook" />
                <a href="#" className="fa fa-twitter" />
                <a href="#" className="fa fa-google" />
                <a href="#" className="fa fa-linkedin" />
                <a href="#" className="fa fa-pinterest" />
              </div>
              <br />
              <div className="promo-text text-center"> 
                <p>The departure is guaranteed. This would be a small group of diverse people (maximum 12) from across the world, bound by their interest in this tour. For a tailor made version of this 
                  program, please email us<a href> info@rudraxp.com</a></p>
              </div>
            </div>  
          </div>
          <br /><br /><br />
          {/* Modal */}
          <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="exampleModalLongTitle">Details</h2>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div id="accordion2" role="tablist">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne2">
                        <h5 className="mb-0"> <a data-toggle="collapse" href="#collapseOne5" role="button" aria-expanded="true" aria-controls="collapseOne5"> Terms &amp; Conditions </a> </h5>
                      </div>
                      <div id="collapseOne5" className="collapse show" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordion2">
                        <div className="card-body"><p>
                            All Prices are on twin sharing.
                            Single person Supplement : Rs 24,500/ USD 350 for main itinerary.
                            Rs 9,500/ USD 180 (min 2 pax) for addon for 2 nights Pangong and 1 night Leh
                            The prices mentioned are based on accommodations, handpicked to give the most fulfilling and enriching experience of a destination. These may change in relation with what gets added, upgraded or improved in a particular destination. We also choose the most valuable room in terms of experience in the chosen hotel, which is mostly a higher category, more private and truly represents the spirit of the place.
                            We use Toyota Innovas, by default for all travel. Please check with us for upgrade to a Luxury SUV, or also for the option of the costs without transport.
                            Foreign nationals are requested to bear in mind that there maybe some nominal cost additions owing to differences in entrances to monuments, wild life entry fees or other similar charges.<br />
                          </p><h3>Payment:</h3>
                          Booking Advance of INR 25,000.00 / USD 400 per person
                          Final Full Payment 60 days prior to arrival.
                          Package doesn’t include:<br /><br />
                          - All entrance / camera fees.<br />
                          - Tips &amp; Gratuities &amp; personal expenses<br />
                          - Visa Fees &amp; Airport tax or Airport improvement fees.<br />
                          - Travel Insurance.<br />
                          - All Expenses other than mentioned in What Price Includes.<br /><br />
                          <h3>Cancellation Policy</h3>
                          - Booking advance non – refundable from the time of booking.<br />
                          - 75% of Package Cost non – refundable within 45 days before departure .<br />
                          - 100% of Package Cost non – refundable within 30 days before departure. <br />
                          <p /></div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo2">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseTwo2" role="button" aria-expanded="false" aria-controls="collapseTwo2"> Itinerary Includes </a> </h5>
                      </div>
                      <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordion2">
                        <div className="card-body">- Tour starts from Manali and includes pick up from Kullu Airport / your hotel.<br />
                          - Accommodation in all the hotels on twin sharing.<br />
                          - Daily breakfast and dinner<br />
                          - All prevailing taxes like GST and Service tax wherever applicable.<br />
                          - All transport by Toyota Innova with 3 persons in a car and a Smart-chauffer.<br />
                          - Road tax, toll tax, driver’s allowance, parking etc.<br />
                          - A Tour Guide - Friend all through<br />
                          - Oxygen equipment back up<br />
                          - Memories of a lifetime</div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree2">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree2" role="button" aria-expanded="false" aria-controls="collapseThree2"> Intinerary Cost </a> </h5>
                      </div>
                      <div id="collapseThree2" className="collapse" role="tabpanel" aria-labelledby="headingThree2" data-parent="#accordion2">
                        <div className="card-body">(INR): 74500.00<br />(USD): 1,146.00</div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree4">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree4" role="button" aria-expanded="false" aria-controls="collapseThree4"> 2 nights Pangong Tso 1 night Leh Addon Includes </a> </h5>
                      </div>
                      <div id="collapseThree4" className="collapse" role="tabpanel" aria-labelledby="headingThree4" data-parent="#accordion2">
                        <div className="card-body">- Accommodation in all the hotels on twin sharing.<br />
                          - Daily breakfast and dinner<br />
                          - All prevailing taxes like GST wherever applicable.<br />
                          - All transport by Toyota Innova with 3 persons in a car and a Smart-chauffer.<br />
                          - Road tax, toll tax, driver’s allowance, parking etc.<br />
                          - Oxygen equipment back up<br />
                          - Memories of a lifetime</div>
                      </div>
                    </div>	
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree5">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree5" role="button" aria-expanded="false" aria-controls="collapseThree5"> Cost for 2 nights Pangong Tso 1 night Leh addon </a> </h5>
                      </div>
                      <div id="collapseThree5" className="collapse" role="tabpanel" aria-labelledby="headingThree5" data-parent="#accordion2">
                        <div className="card-body">(INR): 24500<br />(INR): 0<br />(USD): 377<br />(USD): 0</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>*/}
              </div>
            </div>
          </div>
        </div>
      <br/><br/><br/>
      <Footer/>
        </div>
    )
  }
}

export default Destination;
