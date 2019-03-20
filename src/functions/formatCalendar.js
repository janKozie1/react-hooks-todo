import {Months} from '../data/Months'

export let formatCalendar = (offset,first) =>{

    let month = new Array(6).fill(null).map((el, index) => new Array(7).fill(null).map((el2, index2) => {
        return index * 7 + offset + index2 - Number(first.getDay()) + 1 <= 0 ? index * 7 + index2 - Number(first.getDay()) + 1 + offset + Number(Months[first.getMonth() - 1].days) : (index * 7 + offset + index2 - Number(first.getDay())) % Months[first.getMonth()].days + 1
    }))
    return month;
}