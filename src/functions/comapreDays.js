export let compareDays = (first,second)=>{
    if(first.day===second.day && first.month===second.month && first.year === second.year){
        return true;
    }
    return false;
}