import { View, Text, StyleSheet } from "react-native"
import { _todo } from "@/utils/mocks"

export function Todo ({todo}: {todo: _todo}) {
    return (
       <View style={styles.container}>
        <View style={[styles.indicator, todo.done ? styles.indicatorDone : styles.indicatorPending]}/>
           <Text style={[styles.text, todo.done && styles.textDone]}>{todo.content}</Text> 
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        gap: 12,
        flexDirection: 'row',
    },
    indicator: {
        width: 14,
        height: 14,
        borderRadius: 3,
        borderWidth: 1,
    },
    indicatorDone: {
        backgroundColor: '#F25606',
        borderColor: '#F25606'
    },
    indicatorPending: {
        borderColor: '#000',
        backgroundColor: 'transparent'
    },
    text: {
        fontFamily: 'Barlow-400',
        fontSize: 12,
        lineHeight: 18,
    },
    textDone: {
        textDecorationLine: 'line-through',
        textDecorationColor: '#F25606'
    }
})