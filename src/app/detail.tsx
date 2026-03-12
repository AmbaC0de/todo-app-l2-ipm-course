import { StyleSheet, Text, View } from "react-native";

const Detail = () => {
  return (
    <View style={styles.ecranDetail}>
      <Text>Ceci est un texte dans l'ecran de detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ecranDetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Detail;
