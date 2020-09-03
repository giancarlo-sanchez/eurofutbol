import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {fixtureDetailAction}  from '../actions/fixturesActions'
import dateFormater  from '../utilFunctions/dateFormater'



function TeamFixtures (props){

    console.log("this is TeamFixtures props",props)
    let index = props.fixtureId[0]?props.fixtureId[0].id:11867594;
    console.log("this is the fixture Id",index)
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fixtureDetailAction(index))
    }, [])

    const  fixtures= useSelector(state => state.fixtures);
    console.log("this is fixtures variable",fixtures)
    const {fixtureDetails, loading,error} = fixtures
    console.log("this is fixtureDetails",fixtureDetails,loading)
    let dateTimeZone;
    if(fixtureDetails){
        dateTimeZone = dateFormater(fixtureDetails.time.starting_at.date, fixtureDetails.time.starting_at.time, fixtureDetails.time.starting_at.timezone)
    }

return loading? <div>Loading...</div>:error? <div>{error}</div>:
<div className="team-next-fixture">
    <div className="team-next-fixture__title">
        <div>NEXT FIXTURE</div>
    </div>
    <div className="team-next-fixture__title">
        <div>{fixtureDetails.league.data.name}</div>
    </div>
    <div className="team-next-fixture__teams-logo">
        <Link to={`/team/${fixtureDetails.localTeam.data.id}`}>
            <div className="teams-logo__img">
                <img src={fixtureDetails.localTeam.data.logo_path} />
                <div>{fixtureDetails.localTeam.data.name}</div>
            </div>
        </Link>


        <div>
            <div>VS</div>
        </div>
        <Link to={`/team/${fixtureDetails.visitorTeam.data.id}`}>
            <div div className="teams-logo__img">
                <img src={fixtureDetails.visitorTeam.data.logo_path} />
                <div>{fixtureDetails.visitorTeam.data.name}</div>
            </div>
        </Link>

    </div>
    <div className="team-next-fixture__title footer-fixture">
        <div>{dateTimeZone}</div>
    </div>
</div>

}

export default TeamFixtures;
