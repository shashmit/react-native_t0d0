import { localFormatter, weekDayFormatter, weekDays } from "@/utils/constants";
import dayjs from "dayjs";
import { View, Text } from "react-native";
import { Todos } from "./Todos";

export function Day({ day }: { day: string }) {
    return (
        <View 
            style={{
                minHeight: `${100 / weekDays.length}%`,
                paddingLeft: 26,
                padding: 4,
                borderTopColor: "#dfdada",
                borderTopWidth: 3,
             
            }}> 
            <Text style={{
                color: "#F25606",
                fontSize: 22,
                fontFamily: "Barlow_700Bold",
            }}>{dayjs(day).format(weekDayFormatter)}</Text>
            <Text style={{
                color: "#595757",
                fontSize: 12,
                fontFamily: "Barlow_400Regular",
                marginBottom: 4,
            }}>{dayjs(day).format(localFormatter)}</Text>
            <Todos
                day={day}
            />
        </View>
    )
}