import dayjs from "dayjs";
import { View,Text } from "react-native";
import { Todo } from "./Todo";
import { _todos } from "@/utils/mocks";


export function Todos({ day }: { day: string }) {
    if (day !== dayjs().format("YYYY-MM-DD")){
        return null;
    }
    return (
        <View style={{
            gap: 2,
        }}>
            {_todos.map((todo) => (
               <Todo key={`todo-${todo.id}`} todo={todo} />
            ))}
        </View>
    )
}