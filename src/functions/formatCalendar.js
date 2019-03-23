import { Months } from '../data/Months'

export let formatCalendar = (offset, first) => {
    let month = new Array(6).fill(null).map((el, index) => new Array(7).fill(null).map((el2, index2) => {
        let temp = index * 7 + offset + index2 - Number(first.getDay());
        return temp + 1 <= 0 ?
            {
                day: temp + 1 + Number(Months[first.getMonth() - 1 < 0 ? 11 : first.getMonth() - 1].days), month: first.getMonth() - 1
            }
            :
            temp + 1 <= Months[first.getMonth()].days ?
                { day: temp + 1, month: first.getMonth() }
                :
                { day: temp % Months[first.getMonth()].days + 1, month: first.getMonth() + 1 }
    }))
    return month;
}