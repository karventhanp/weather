import React, { Component } from 'react';
import axios from 'axios';
import './Css/home.css';
class Home extends Component {
    state = {
        name: 'erode',
        data: [],
        err: {}
    }
    componentDidMount = () => {
        axios.post('http://localhost:5000/getweather',{name:this.state.name})
        .then(res=>this.setState({data:res.data}))
        .catch(err=>console.log(err));
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value });
    }
    getWeather = (e) => {
        e.preventDefault();
        const name = this.state.name;
        if (name === '') {
            this.setState({ err: { location: "Please Enter Your Location !" } });
            return;
        }
        else {
            axios.post('http://localhost:5000/getweather', { name: name })
                .then(res => {
                    if (res.data.success === false) {
                        this.setState({ data: [], err: { location: "Please enter valid location or give space between two words !" } });
                    } else {
                        this.setState({ data: res.data })
                        this.setState({ err: {} })
                    }
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        const { current, location } = this.state.data;
        return (<div className='container mt-2'>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 form">
                   
                    <form onSubmit={this.getWeather} >
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search Your Location" aria-describedby="button-addon2"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                            <div className="input-group-append">
                                <input type='submit' className="btn btn-outline-primary" id="button-addon2" value='Search' />
                            </div>

                        </div>
                        <div className="form-group">
                            {
                                this.state.err.location ? 
                            <h5 className='text-center text-danger bg-white p-2 err'>{this.state.err.location}</h5>
                                :
                                ""
                            }
                        </div>
                    </form>

                </div>
                <div className="col-md-4">
                </div>
            </div>
            {
                this.state.data.length !== 0 ?
                    <div className="row mt-2">
                        <div className="col-md-5 box1">
                            <h4 className="text-center mt-3 mb-3 text-primary">Location</h4>
                            <h5>Country : {location.country}</h5>
                            <h5>Region : {location.region}</h5>
                            <h5>Location : {location.name}</h5>
                            <h5>TimeZone : {location.timezone_id}</h5>
                            <h5>Latitude : {location.lat}</h5>
                            <h5>Longtitude : {location.lon}</h5>
                        </div>
                        <div className="col-md-2 mb-3"></div>
                        <div className="col-md-5 mb-3 box2">
                            <h4 className="text-center pt-3 pb-3 text-primary">Weather Data</h4>
                            <h5 className="text-center"><img alt='weather' src={current.weather_icons} /></h5>
                            <h5>Weather Status : {current.weather_descriptions}</h5>
                            <h5>Temperature : {current.temperature}&#8451;</h5>
                            <h5>Wind Speed : {current.wind_speed} (miles per hour)</h5>
                            <h5>Wind Direction : {current.wind_dir}</h5>
                            <h5>CloudCover : {current.cloudcover} (okta)</h5>
                            <h5>Humidity : {current.humidity} </h5>
                            <h5>Pressure : {current.pressure} (inches of mercury)</h5>
                            <h5>Visibility : {current.visibility}</h5>
                            <h5>Is_day : {current.is_day}</h5>
                        </div>
                    </div>
                    :
                    ""
            }
        </div>);
    }
}

export default Home;