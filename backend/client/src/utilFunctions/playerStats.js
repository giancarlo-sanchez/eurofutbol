export default function playerStatsTotal(arr){
    let appearences = 0
    let goals = 0
    let assists = 0
    let saves = 0
    let yellowcards = 0
    let redcards = 0
    arr.forEach(season=>{
        appearences += parseInt(season.appearences);
        goals += parseInt(season.goals);
        assists += parseInt(season.assists);
        saves += parseInt(season.saves);
        yellowcards += parseInt(season.yellowcards);
        redcards += parseInt(season.redcards);

    })
    return {appearences,goals,assists,saves,yellowcards,redcards}
}
