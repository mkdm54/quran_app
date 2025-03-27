import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import SurahCard from "@/components/SurahCard";
import { listSurah } from "@/src/api/ListSurah";

interface Surah {
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
  const [dataSurah, setDataSurah] = useState<Surah[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);
      const data = await listSurah()
      if (data) {
        setDataSurah(data);
      }
      setLoading(false);
    }
    fecthData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={dataSurah}
          keyExtractor={(item) => item.nomor.toString()}
          renderItem={({ item }) => (
            <SurahCard
              surah_number={item.nomor}
              name={item.nama}
              latin_name={item.nama_latin}
              number_of_verses={item.jumlah_ayat}
            />
          )}
        />
      )}
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
