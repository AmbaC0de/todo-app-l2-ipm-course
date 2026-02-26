import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CarteUtilisateur from "./src/composants/CarteUtilisateur";

export default function App() {
  const personnes = [
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
      prenom: "Amadou BA",
      id: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1603415526960-f9e0a64d6d89?q=80&w=400&auto=format&fit=crop",
      prenom: "Fatou Diop",
      id: 2,
    },
    {
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&w=400",
      prenom: "Mamadou Ndiaye",
      id: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      prenom: "Awa Sarr",
      id: 4,
    },
    {
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=400",
      prenom: "Seydou Cissé",
      id: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      prenom: "Ibrahima Fall",
      id: 6,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
      prenom: "Mariama Diallo",
      id: 7,
    },
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=400",
      prenom: "Cheikh Gueye",
      id: 8,
    },
    {
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
      prenom: "Aminata Sow",
      id: 9,
    },
    {
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
      prenom: "Ousmane Kane",
      id: 10,
    },
    {
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=400",
      prenom: "Khady Mbaye",
      id: 11,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      prenom: "Abdoulaye Sy",
      id: 12,
    },
    {
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop",
      prenom: "Ndeye Seck",
      id: 13,
    },
    {
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&w=400",
      prenom: "Alioune Touré",
      id: 14,
    },
    {
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop",
      prenom: "Rokhaya Faye",
      id: 15,
    },
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
