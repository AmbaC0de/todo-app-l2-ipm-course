import { Image, StyleSheet, Text, View } from "react-native";

type CarteProps = {
  titre: string;
  descripion: string;
  imageUrl: string;
};

const Carte = ({ titre, descripion, imageUrl }: CarteProps) => {
  return (
    <View style={styles.cartePrincipal}>
      <Text style={styles.titre}>{titre}</Text>
      {/* Image */}
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ width: 50, height: 50 }}
      />
      <Text style={styles.description}>{descripion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartePrincipal: {
    width: "98%",
    backgroundColor: "#90f090",
    borderRadius: 15,
    margin: 10,
    padding: 15,
  },
  titre: {
    fontSize: 18,
    fontWeight: 700,
  },
  description: {
    color: "#4d4d4d",
  },
});

export default Carte;
