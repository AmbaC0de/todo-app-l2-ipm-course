import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Carte from "./src/composants/Carte";
import Bouton from "./src/composants/Bouton";

export default function App() {
  const [monCompteur, setMonCompteur] = useState(0);
  const utilisateur = "Bamba";
  const utilisateurs = [
    { id: 1, nom: "Abibatou" },
    { id: 2, nom: "Maryam" },
    {
      id: 3,
      nom: "Bamba",
    },
  ];

  const incrementer = () => {
    setMonCompteur(monCompteur + 1);
  };

  return (
    <View style={styles.ecranPrincipal}>
      <Carte
        titre="Un titre"
        descripion="Une description"
        imageUrl="https://reactnative.dev/img/tiny_logo.png"
      />
      {utilisateurs.map((utilisateur) => (
        <Text key={utilisateur.id}>{utilisateur.nom}</Text>
      ))}

      <View style={styles.rectangle}>
        <Text style={styles.compteur}>{monCompteur}</Text>
      </View>
      {/* 
      Exercice: 
        Faire un composant bouton reutilisable dans le dossier composants
        - Le composant doit prendre en prop le titre du bouton
          Et une fonction onPress, pour gerer l'appui
      */}
      <Bouton titre="Incrementer" onPress={incrementer} />
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
