import { weekDays } from "@/utils/constants";
import { View, Text } from "react-native";

export function Day({ day }: { day: weekDays }) {
    return (
        <View 
            style={{
                minHeight: `${100 / weekDays.length}%`,
                paddingLeft: 12,
                padding: 4,
                borderTopColor: "#dfdada",
                borderTopWidth: 3,
            }}> 
            <Text className='text-selected font-barlow-700 text-4xl'>{day}</Text>
            <Text className='text-gray-500 font-barlow-400'>April, 14 2025 - 9:41</Text>
        </View>
    )
}