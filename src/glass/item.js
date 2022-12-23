import React, { Component } from 'react';

class Item extends Component {
    render() {
        const {glass}=this.props;
        return (
            <>
                <div className='col-md-2'>
                    <button className='btn btn-default border' onClick={() => {
                        this.props.comunicateFather(glass)
                    }}>
                        <img className='img-fluid' src={glass.url} />
                    </button>
                </div>
            </>
        );
    }
}

export default Item;