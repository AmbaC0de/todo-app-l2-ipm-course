import { Pressable, StyleSheet, Text } from "react-native";

type BoutonProps = {
  titre: string;
  onPress?: () => void;
};

const Bouton = ({ titre, onPress }: BoutonProps) => {
  return (
    <Pressable style={styles.bouton} onPress={onPress}>
      <Text style={styles.titre}>{titre}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bouton: {
    width: "98%",
    height: 55,
    borderRadius: 20,
    backgroundColor: "#40f1a1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  titre: {
    color: "#1f201f",
    fontSize: 18,
  },
});

export default Bouton;
