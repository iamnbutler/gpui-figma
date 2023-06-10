import { containerToFrame } from "./containerToFrame";
import { loadFont } from "./fontLoader";

const testContainer: Container = {
    width: 28,
    height: 28,
    padding: 4,
    background: "#FF00FF",
    cornerRadius: 4,
    border: {
        color: "#000000",
        width: 1,
    },
};

async function main(): Promise<string | undefined> {
    await loadFont();

    const test = containerToFrame(testContainer, "test");
    figma.currentPage.appendChild(test);
    figma.viewport.scrollAndZoomIntoView([test]);

    console.log("Plugin executed successfully!");
    return undefined;
}

main().then((message: string | undefined) => {
    figma.closePlugin(message);
});
