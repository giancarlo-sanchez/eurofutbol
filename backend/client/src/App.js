import React from 'react';
import './index.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import TeamPage from './components/TeamPage';
import ListPlayers from './components/ListPlayer';
import LeaguePage from './components/LeaguePage';
import LeagueListTeamsPage from './components/LeagueListTeamsPage';
import PlayerPage from './components/PlayerPage';
import LoginPanel from './components/LoginPanel';
import HomePage from './components/HomePage';
import { useSelector } from 'react-redux';
import LogOut from './components/LogOut'
import FavoritePlayerPage from './components/FavoritePlayerPage';
import SignUpPanel from './components/SignUpPanel';

function App() {
  const userSignin = useSelector(state =>state.userSignin);
  const { userInfo } = userSignin;
  return(
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
            <Link to="/"><div className="euro-futbol-logo">EuroFutbol⚽</div></Link>
              <div className="header-links">
                    {userInfo ? <div><Link to={`/profile`}>Welcome {userInfo.user.name}</Link> | <LogOut token={userInfo.token}/>  </div>: <Link to="/login">Sign In</Link>}
              </div>
            </header>

            <main className="main">
              <div className="content">
                <Route path="/profile" exact={true} component={FavoritePlayerPage}/>
                <Route path="/team/:id" component={TeamPage}/>
                <Route path="/player/:id" component={PlayerPage}/>
                <Route path="/league/:id" component={LeagueListTeamsPage}/>
                <Route path="/list-leagues" component={LeaguePage}/>
                <Route path="/login" exact={true} component={LoginPanel}/>
                <Route path="/register" exact={true} component={SignUpPanel}/>
                <Route path="/" exact={true} component={HomePage} />
              </div>

          </main>
            <footer className="footer">EuroFutbol⚽©</footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
