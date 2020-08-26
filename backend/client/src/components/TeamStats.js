import React, {useEffect, useState} from 'react';
import statsTotal from '../utilFunctions/statUtil'
import Carousel from 'react-material-ui-carousel'


function TeamStats (stats){
    console.log("This are the stats:",stats)
    let filteredStats = statsTotal(stats.stats?stats.stats.data:[])
    console.log("this is filtered stats",filteredStats)


return stats.loading? <div>Loading...</div>:
<div className="list-stats">
    <div className="list-stats__title">
        <div>TEAM STATS FOR THE LAST 8 SEASONS</div>
    </div>
    <div>
        <div>GOALS FOR</div>
        <Carousel>
            <div className="text-box">
                <text>AT HOME:</text>
                <div>{filteredStats.goalForHome}</div>
            </div>
            <div className="text-box">
                <text>AS VISITOR:</text>
                <div>{filteredStats.goalForAway}</div>
            </div>
            <div className="text-box">
                <text>TOTAL:</text>
                <div>{filteredStats.goalForTotal}</div>
            </div>
        </Carousel>
    </div>

    <div>
        <div>GOALS AGAINST</div>
        <Carousel>
            <div className="text-box">
                <text>AT HOME:</text>
                <div>{filteredStats.goalAgainstHome}</div>
            </div>
            <div className="text-box">
                <text>AS VISITOR:</text>
                <div>{filteredStats.goalAgainstAway}</div>
            </div>
            <div className="text-box">
                <text>TOTAL:</text>
                <div>{filteredStats.goalAgainstTotal}</div>
            </div>
        </Carousel>
    </div>
    <div>
        <div>GAMES WIN</div>
        <Carousel>
            <div className="text-box">
                <text>AT HOME:</text>
                <div>{filteredStats.winHome}</div>
            </div>
            <div className="text-box">
                <text>AS VISITOR:</text>
                <div>{filteredStats.winAway}</div>
            </div>
            <div className="text-box">
                <text>TOTAL:</text>
                <div>{filteredStats.winTotal}</div>
            </div>
        </Carousel>
    </div>
    <div>
        <div>GAMES LOST</div>
        <Carousel>
            <div className="text-box">
                <text>AT HOME:</text>
                <div>{filteredStats.lostHome}</div>
            </div>
            <div className="text-box">
                <text>AS VISITOR:</text>
                <div>{filteredStats.lostAway}</div>
            </div>
            <div className="text-box">
                <text>TOTAL:   </text>
                <div>{filteredStats.lostTotal}</div>
            </div>
            {/* <div className="text-box">
                AT HOME:
            </div>
            <div className="text-box">
                AS VISITOR:
            </div><div className="text-box">
                TOTAL:
            </div> */}
        </Carousel>
    </div>


</div>
}

export default TeamStats;
