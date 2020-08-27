export default function idChecker(id,arrObj){
    let arrIds = [];
    arrObj.forEach(element => {
        arrIds.push(element.teamId)
    });
    if(arrIds.indexOf(id) != -1){
        return true
    }else{
        return false
    }
}
