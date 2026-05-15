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
import Feather from '@expo/vector-icons/Feather';

export default function Index() {
  const [valeurText, setValeurText] = useState("");
  return (
    <View style={styles.ecranPrincipal}>
      <TextInput
        style={styles.input}
        value={valeurText}
        onChangeText={setValeurText}
        placeholder="Ecrit une tache"
      />
      <View>
        <Feather name="check-square" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ecranPrincipal: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  input: {
    height: 60,
    backgroundColor: "#bebaba",
    borderRadius: 15,
    paddingHorizontal: 20,
  },
});
