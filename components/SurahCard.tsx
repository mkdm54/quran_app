import { Pressable, Text, StyleSheet } from "react-native";

const SurahCard = () => {
    return (
        <Pressable style={styles.card}>
            <Text style={styles.text}>
                test
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
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