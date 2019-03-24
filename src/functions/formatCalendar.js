import { Months } from '../data/Months'

export let formatCalendar = (offset, first) => {
    let month = new Array(6).fill(null).map((el, index) => new Array(7).fill(null).map((el2, index2) => {
        //index == week
        //offset moves the day
        //index2 is the number of a day in a week
        //-first.GetDay() because nweek days are relative to it 
        let temp = index * 7 + offset + index2 - Number(first.getDay());
        let previousMonth = first.getMonth() - 1 < 0 ? 11 : first.getMonth() - 1
       
        // return offset === Number(first.getDay()) && index === 0 ? { month: Months[previousMonth], day: Months[previousMonth] - 6 + index } :
         return    temp + 1 <= 0 ?
                {
                    day: temp + 1 + Number(Months[previousMonth].days), month: first.getMonth() - 1
                }
                :
                temp + 1 <= Months[first.getMonth()].days ?
                    { day: temp + 1, month: first.getMonth() }
                    :
                    { day: temp % Months[first.getMonth()].days + 1, month: first.getMonth() + 1 }
    }))
    return month;
}