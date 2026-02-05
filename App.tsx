import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [monCompteur, setMonCompteur] = useState(10);

  const incrementer = () => {
    setMonCompteur(monCompteur + 1);
    console.log("compteur = ", monCompteur);
  };

  return (
    <View style={styles.ecranPrincipal}>
      <View style={styles.rectangle}>
        <Text style={styles.compteur}>{monCompteur}</Text>
      </View>
      <Pressable style={styles.button} onPress={incrementer}>
        <Text>Incrementer !</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ecranPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangle: {
    width: 500,
    height: 200,
    backgroundColor: "#1f8a16b4",
    justifyContent: "center",
  },
  compteur: {
    textAlign: "center",
    fontSize: 30,
  },
  button: {
    backgroundColor: "#a19b9b",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
