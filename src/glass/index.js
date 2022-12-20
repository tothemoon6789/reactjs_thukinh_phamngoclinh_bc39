import React, { Component } from 'react';
import dataGlass from './dataGlass.json'
import Item from './item';
class Glass extends Component {
    constructor(props){
        super(props);
        this.state={
            dataGlass:dataGlass,
            detail:dataGlass[0]
        }
    }
    render() {
        return (
            <>
            <div className='fluid' style={{
                    "background-image":"url('https://img.freepik.com/free-vector/gradient-beach-sunset-landscape-background_52683-64263.jpg?w=2000')",
                    "backgroundRepeat":"no-repeat",
                    "backgroundSize":"cover",
                    "height":"100vh"}}>

                <h3 className='text-center text-light p-3' style={{"background":"rgba(0,0,0,0.5)"}}>Try Glasses App Online</h3>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <div className='col-md-4 position-relative bg-info px-0'>
                                <img src='./images/model.jpg' className='img-fluid' />
                                <img src={this.state.detail.url} className='position-absolute' style={{ "top": "25%", "left": "20%", "width": "60%" ,"opacity":"0.8"}} />
                                <div className='w-100 position-absolute' style={{ "height":"30%","top": "70%", "left": "0px", "background-color": "rgba(253,198,143,.5" }}>
                                    <h6 className='pl-2 pt-1 mb-0 text-light' >{this.state.detail.name}</h6>
                                    <p className='pl-2 text-light' >Price: {this.state.detail.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center'>

                            <div className='col-md-4 px-0'>
                                <img src='./images/model.jpg' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className='container p-4 bg-light mt-2 rounded'>
                        <div className='row'>
                            {dataGlass.map((item) => {
                                return <Item glass={item} comunicateFather={(glass) => {
                                    this.setState({detail:glass})
                                }}/>
                            })}
                        </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default Glass;