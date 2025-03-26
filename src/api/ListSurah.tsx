export const listSurah = async () => {
    const apiListSurah = "https://quran-api.santrikoding.com/api/surah";
    try {
        const response = await fetch(apiListSurah);
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        return null;
    }
};
