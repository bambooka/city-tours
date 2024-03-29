import React from 'react';
import Tour from '../Tour/Tour'
import './tourlist.scss'
import {tourData} from '../../tourData'

export default class TourList extends React.Component{
    state = {
        tours: tourData
    };

    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    };


    render(){
        console.log(this.state.tours);

        const {tours} = this.state;
        return (
            <section className="tourlist">
                {
                    tours.map(tour => (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    ))
                }
            </section>
        )
    }
}