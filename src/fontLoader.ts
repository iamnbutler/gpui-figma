async function loadFont(): Promise<void> {
    try {
        await figma.loadFontAsync({
            family: "Roboto Mono",
            style: "Regular",
        });
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

export { loadFont };
