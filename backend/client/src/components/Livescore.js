import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import dateFormater  from '../utilFunctions/dateFormater'
import {livescoreDetailAction}  from '../actions/livescoreActions'
import Carousel from 'react-material-ui-carousel'


function Livescore (){
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(livescoreDetailAction())
    }, [])

    const  livescore= useSelector(state => state.livescore);
    const {livescoreDetails, loading,error} = livescore


return loading? <div>Loading...</div>:error? <div>{error}</div>:
<Carousel className="livescore-details">{livescoreDetails.map(livescore =>(
    <div className="team-next-fixture">
    <div className="team-next-fixture__title">
        <div>LIVESCORE</div>
    </div>
    <div className="team-next-fixture__title">
        <div>{livescore.league.data.name}</div>
    </div>
    <div className="team-next-fixture__teams-logo">
        <Link to={`/team/${livescore.localTeam.data.id}`}>
            <div className="teams-logo__img">
                <img src={livescore.localTeam.data.logo_path} />
                <div>{livescore.localTeam.data.name}</div>
            </div>
        </Link>


        <div>
            <div>VS</div>
        </div>
        <Link to={`/team/${livescore.visitorTeam.data.id}`}>
            <div div className="teams-logo__img">
                <img src={livescore.visitorTeam.data.logo_path} />
                <div>{livescore.visitorTeam.data.name}</div>
            </div>
        </Link>

    </div>
    <div className="team-next-fixture__title footer-fixture">
        <div>{dateFormater(livescore.time.starting_at.date, livescore.time.starting_at.time, livescore.time.starting_at.timezone)}</div>
    </div>
</div>
))}


</Carousel>


}

export default Livescore;
