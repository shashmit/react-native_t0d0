import { weekDays } from "@/utils/constants";
import {View, Text} from 'react-native'
import { Day } from "./Day";

export function Week(){
    return (
        <View>
            {weekDays.map(day =>(
                <Day day={day} key={`day-${day}`}/>
            ))}
        </View>
    )
}