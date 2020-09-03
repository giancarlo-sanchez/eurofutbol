import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'


function HomePage(props){


    return <div className="container-home-page">
    <div className="home-page-grid-container">
        <Link exact to="/list-leagues">
        <div className="picture-map">
            <img alt="" src="https://i.postimg.cc/8CVMR41D/all-teams.png" />
        </div></Link>
        <div className="text-home-page">
            <div><text>The most Important competitions in one app</text></div>

            <Link exact to="/login">
            <div className="home-page-button">Explore</div></Link>
        </div>
    </div>
    <div className="picture-home-page-grid-container">
        <div className="picture-home-page">
            <Carousel>
                <img alt="" src="https://i.postimg.cc/RC7Jv4dC/best-picture.jpg" />
                <img alt="" src="https://i.postimg.cc/v82XnLmm/Top-20-Best-Football-Player-in-The-World-1.jpg" />
                <img alt="" src="https://i.postimg.cc/vTHLpDHX/50c838de682f30ab222d72286d7b1d2a.jpg" />
                <img alt="" src="https://i.postimg.cc/5t08fyhR/skysports-premier-league-restart-5015502.jpg" />
                <img alt="" src="https://i.postimg.cc/02LZNYkJ/uefa-1-2017.jpg" />
            </Carousel>

        </div>
    </div>
    <div className="title__apptour">SCREENSHOTS TOUR</div>
    <div className="picture-home-page-grid-container">
        <div className="picture-home-page">
            <Carousel>
                <img alt="" src="https://i.postimg.cc/kgfv2xXN/first.png" />
                <img alt="" src="https://i.postimg.cc/HLN02dMV/second.png" />
                <img alt="" src="https://i.postimg.cc/7Lj7zXvz/third.png" />
                <img alt=""src="https://i.postimg.cc/VvQVKjtr/fourth.png" />
                <img alt="" src="https://i.postimg.cc/4NMhqBdS/fifth.png" />
            </Carousel>

        </div>
    </div>
    <div>
        <a href="https://github.com/giancarlo-sanchez/eurofutbol/tree/master/backend">
            <div className="links-homePage">
                    <div>Github Repo</div>
                    <img alt="" src='https://image.flaticon.com/icons/png/512/25/25231.png'/>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/giancarlo-sanchez-6b28301aa/">
            <div className="links-homePage-2">
                <div>My</div>
                <img alt="" src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003%E2%80%932011.png'/>
            </div>
        </a>
    </div>


</div>
}

export default HomePage;
