import { Text, View, StyleSheet, FlatList } from "react-native";
import SurahCard from "@/components/SurahCard";
import { listSurah } from "@/src/api/ListSurah";

interface listSurah {
  nomor: number,
  nama: string,
  nama_latin: string,
  jumlah_ayat: number,
  tempat_turun: string,
  arti: string,
  deskripsi: string,
  audio: string
}

export default function Index() {
  return (
    <View style={styles.container}>

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
