import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CarteUtilisateur from "../composants/CarteUtilisateur";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import TodoItem from "../composants/TodoItem";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = {
  id: number;
  titre: string;
};

export default function Index() {
  const [valeurText, setValeurText] = useState<string>("");
  const [taches, setTaches] = useState<Todo[]>([]);

  const ajouterTache = () => {
    const nouvelleTache = {
      id: Math.random(),
      titre: valeurText,
    };
    setTaches([nouvelleTache, ...taches]);
    setValeurText("");
  };

  return (
    <SafeAreaView style={styles.ecranPrincipal}>
      <TextInput
        style={styles.input}
        value={valeurText}
        onChangeText={setValeurText}
        placeholder="Ecrit une tache"
      />
      {taches.map((t) => (
        <TodoItem key={t.id} valeurText={t.titre} />
      ))}
      <Pressable style={styles.button} onPress={ajouterTache}>
        <Feather name="plus" size={24} color="black" />
        <Text>Enregistrer</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ecranPrincipal: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  input: {
    height: 60,
    backgroundColor: "#bebaba",
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#bebaba",
    padding: 15,
    borderRadius: 15,
    marginTop: "auto",
  },
});
