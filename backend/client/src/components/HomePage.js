import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'


function HomePage(props){


    return <div className="container-home-page">
    <div className="home-page-grid-container">
        <Link exact to="/list-leagues">
        <div className="picture-map">
            <img src="https://i.postimg.cc/8CVMR41D/all-teams.png" />
        </div></Link>
        <div className="text-home-page">
            <div><text>The most Important competitions in one app</text></div>

            <Link exact to="/list-leagues">
            <div className="home-page-button">Explore</div></Link>
        </div>
    </div>
    <div className="picture-home-page-grid-container">
        <div className="picture-home-page">
            <Carousel>
                <img src="https://i.postimg.cc/RC7Jv4dC/best-picture.jpg" />
                <img src="https://i.postimg.cc/v82XnLmm/Top-20-Best-Football-Player-in-The-World-1.jpg" />
                <img src="https://i.postimg.cc/vTHLpDHX/50c838de682f30ab222d72286d7b1d2a.jpg" />
                <img src="https://i.postimg.cc/5t08fyhR/skysports-premier-league-restart-5015502.jpg" />
                <img src="https://i.postimg.cc/02LZNYkJ/uefa-1-2017.jpg" />
            </Carousel>

        </div>
    </div>


</div>
}

export default HomePage;
