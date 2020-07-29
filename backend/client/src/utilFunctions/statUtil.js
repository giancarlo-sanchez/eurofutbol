
export default function statsTotal(arr){
    let winHome = 0
    let winAway = 0
    let winTotal = 0
    let lostHome = 0
    let lostAway = 0
    let lostTotal = 0
    let goalForHome = 0
    let goalForAway = 0
    let goalForTotal = 0
    let goalAgainstHome = 0
    let goalAgainstAway = 0
    let goalAgainstTotal = 0
    arr.forEach(season=>{
        winHome += parseInt(season.win.home);
        winAway += parseInt(season.win.away);
        winTotal += parseInt(season.win.total);
        lostHome += parseInt(season.lost.home);
        lostAway += parseInt(season.lost.away);
        lostTotal += parseInt(season.lost.total);
        goalForHome += parseInt(season.goals_for.home);
        goalForAway += parseInt(season.goals_for.away);
        goalForTotal += parseInt(season.goals_for.total);
        goalAgainstHome += parseInt(season.goals_against.home);
        goalAgainstAway += parseInt(season.goals_against.away);
        goalAgainstTotal += parseInt(season.goals_against.total);
    })
    return {winHome,winAway,winTotal,lostHome,lostAway,lostTotal,goalForHome,goalForAway,goalForTotal,goalAgainstHome,goalAgainstAway,goalAgainstTotal}
}
