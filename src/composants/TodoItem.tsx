import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type TodoItemProps = {
  valeurText: string;
};

const TodoItem = ({ valeurText }: TodoItemProps) => {
  return (
    <View style={styles.todoContainer}>
      <Feather name="check-square" size={24} color="black" />
      <Text>{valeurText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    borderWidth: 1,
    borderColor: "#000000",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
});

export default TodoItem;
