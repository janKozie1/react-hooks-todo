import { Months } from '../data/Months'

export let formatCalendar = (offset, first) => {
    let month = new Array(6).fill(null).map((el, index) => new Array(7).fill(null).map((el2, index2) => {
        let temp = index * 7 - offset + index2 - Number(first.getDay());
        let previousMonth = first.getMonth() - 1 < 0 ? 11 : first.getMonth() - 1
        return temp + 1 <= 0 ?
            {
                day: temp + 1 + Number(Months[previousMonth].days), month: first.getMonth() - 1, year: Number(first.getMonth()) ? Number(first.getFullYear()) : Number(first.getFullYear()) - 1
            }
            :
            temp + 1 <= Months[first.getMonth()].days ?
                { day: temp + 1, month: first.getMonth(), year: first.getFullYear() }
                :
                { day: temp % Months[first.getMonth()].days + 1, month: first.getMonth() + 1, year: Number(first.getMonth()) === 11 ? Number(first.getFullYear()) + 1 : Number(first.getFullYear()) }
    }))
    return month;
}