import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);

// export const weekDays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ] as const;
  
  export type weekDays = typeof weekDays[number];

  export const globalFormatter = 'YYYY-MM-DD'
  export const localFormatter = `MMMM, DD YYYY`
  export const weekDayFormatter = 'dddd'

  export const weekDays = [...Array(7).keys()].map((key)=>{
    return dayjs().startOf('isoWeek').add(key, 'day').format(globalFormatter)
  })
