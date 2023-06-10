async function loadFont(family?: string, style?: string): Promise<void> {
    if (family && style) {
        try {
            await figma.loadFontAsync({
                family,
                style,
            });
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    } else {
        try {
            await figma.loadFontAsync({
                family: "Inter",
                style: "Regular",
            });
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    }
}

export { loadFont };
