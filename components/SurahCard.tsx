import { Pressable, Text, StyleSheet } from "react-native";

interface propsSurah {
    surah_number: number,
    name: string,
    latin_name: string,
    number_of_verses: number
}

const SurahCard = ({ surah_number, name, latin_name, number_of_verses }: propsSurah) => {
    return (
        <Pressable style={styles.card}>
            <Text style={styles.text}>{surah_number}</Text>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{latin_name}</Text>
            <Text style={styles.text}>Jumlah ayat : {number_of_verses}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        width : "100%",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 8,
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    }
});

export default SurahCard;