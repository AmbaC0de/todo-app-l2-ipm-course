import { Image, StyleSheet, Text, View } from "react-native";

type CarteUtilisateurProps = {
  prenom: string;
  imageUrl: string;
};

const CarteUtilisateur = ({ prenom, imageUrl }: CarteUtilisateurProps) => {
  return (
    <View style={styles.carte}>
      <Image
        style={styles.avatar}
        source={{ uri: imageUrl }}
        resizeMode="contain"
      />
      <Text>{prenom}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carte: {
    width: "98%",
    height: 60,
    backgroundColor: "#b69090",
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // backgroundColor: "grey",
    marginRight: 10,
  },
});

export default CarteUtilisateur;
