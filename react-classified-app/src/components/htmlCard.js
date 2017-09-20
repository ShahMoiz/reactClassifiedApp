import React from 'react';

import './css/htmlCard.css';
export default class HtmlCard extends React.Component {
    func(){
        if(this.props.cate === "mobile"){
            return (
                <div className="col-sm-7">
                        <p>{this.props.name}</p>
                        <p>{this.props.brand}</p>
                        <p>link > link > link</p>
                        <p>{this.props.description}</p>
                    </div>
            )
        }
    }
    render(){
        return(
            <section>
  <div className="container-fluid py-3">
    <div className="card">
      <div className="row ">
        <div className="col-md-3 col-sm-3">
            <img src="http://www.psdgraphics.com/file/user-icon.jpg" alt="" className="img-circle user-img"/>
            <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100 img-responsive" />
          </div>
          <div className="col-md-7 col-sm-7 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">{this.props.name}</h4>
              <p className="card-text">{this.props.description}</p>
              <p className="card-text">{this.props.link}</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">Price: {this.props.price}PKR</h4>
              <p>Negotiable</p>
              {/* <a href="#" className="btn btn-primary"></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
</section>

            // <div className="container-fluid">

            //     <div className="row">
            //         <div className="col-sm-3" style={{border: '1px solid black'}}>
            //                 <img src={this.props.img} alt="" />
            //         </div>
            //         <div className="col-sm-7">
            //             <p>{this.props.name}</p>
            //             <p>{this.props.brand}</p>
            //             <p>link > link > link</p>
            //             <p>{this.props.description}</p>
            //         </div>
            //         <div className="col-sm-1">
            //             Price: {this.props.price}PKR
            //         </div>
            //     </div>
            // </div>
        )
    }
}