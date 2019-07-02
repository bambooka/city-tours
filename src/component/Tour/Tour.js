import React from 'react';
import './tour.scss'

export default class Tour extends React.Component{
    render(){

        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt={info}/>
                    <span className="close-btn">
                        <i className="fa fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{""}
                        <span>
                            <i className="fa fa-angle-down"/>
                        </span>
                    </h5>
                    <p>{info}</p>
                </div>
            </article>
        )
    }
}