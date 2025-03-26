import { Text, View, StyleSheet } from "react-native";
import SurahCard from "@/components/SurahCard";

export default function Index() {
  return (
    <View style={styles.container}>
      <SurahCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
