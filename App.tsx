import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CarteUtilisateur from "./src/composants/CarteUtilisateur";

export default function App() {
  const imageUrl =
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const personnes = [
    { image: imageUrl, prenom: "Amadou BA", id: 1 },
    { image: imageUrl, prenom: "Bamba", id: 2 },
    { image: imageUrl, prenom: "Mariama", id: 3 },
    { image: imageUrl, prenom: "Abibatou", id: 4 },
    { image: imageUrl, prenom: "Adama", id: 5 },
  ];

  return (
    <View style={styles.ecranPrincipal}>
      {personnes.map((personne) => (
        <CarteUtilisateur
          key={personne.id}
          prenom={personne.prenom}
          imageUrl={personne.image}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ecranPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
