export default function setLeagueName(id){
    switch (id) {
        case '16029':
            return {name:'CHAMPIONS LEAGUE',place:'EUROPE'};
        case '16030':
            return {name:'EUROPA LEAGUE',place:'EUROPE'};
        case '16036':
            return {name:'PREMIER LEAGUE',place:'ENGLAND'};
        case '16211':
            return {name:'CHAMPIONSHIP',place:'ENGLAND'};
        case '16210':
            return {name:'LEAGUE ONE',place:'ENGLAND'};
        case '16386':
            return {name:'FA CUP',place:'ENGLAND'};
        case '16046':
            return {name:'EREDIVISIE',place:'NETHERLANDS'};
        case '16264':
            return {name:'BUNDESLIGA',place:'GERMANY'};
        case '17075':
            return {name:'BUNDESLIGA PLAY-OFFS',place:'GERMANY'};
        case '17076':
            return {name:'BUNDESLIGA PLAY-OFFS 2',place:'GERMANY'};
        case '16209':
            return {name:'TIPICO BUNDESLIGA',place:'AUSTRIA'};
        case '17138':
            return {name:'JUPILER PRO LEAGUE',place:'BELGIUM'};
        case '16275':
            return {name:'PROXIMUS LEAGUE',place:'BELGIUM'};
        case '16020':
            return {name:'SUPERLIGA',place:'DENMARK'};
        case '16203':
            return {name:'NORDIC BETLIGA',place:'DENMARK'};
        case '17160':
            return {name:'LIGUE 1',place:'FRANCE'};
        case '16415':
            return {name:'SERIE A',place:'ITALY'};
        case '16427':
            return {name:'COPPA ITALIA',place:'ITALY'};
        case '16810':
            return {name:'ELITESERIEN',place:'NORWAY'};
        case '16346':
            return {name:'PRIMEIRA LIGA',place:'PORTUGAL'};
        case '16021':
            return {name:'RUSSIAN PREMIER LEAGUE',place:'RUSSIA'};
        case '17141':
            return {name:'PREMIERSHIP',place:'SCOTLAND'};
        case '16326':
            return {name:'LA LIGA',place:'SPAIN'};
        case '16643':
            return {name:'COPA DEL REY',place:'SPAIN'};
        case '16838':
            return {name:'ALLSVENSKAN',place:'SWEDEN'};
        case '16405':
            return {name:'SUPER LIG',place:'TURKEY'};
        case '16034':
            return {name:'PREMIER LEAGUE',place:'UKRAINE'};
        case '16015':
            return {name:'PRO LEAGUE SUPERCUP',place:'BELGIUM'};
        default:
            return {name:'NO DATA FOUND',place:''};
      }
}
