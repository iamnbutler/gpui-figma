import { containerToFrame } from "./containerToFrame";
import { loadFont } from "./fontLoader";
import { textToTextNode } from "./textToTextNode";
import { GPUI } from "./types/gpui";
import { Text } from "./types/gpui-figma";

const testContainer: GPUI.Container = {
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

const text: Text = {
    name: 'My Text',
    characters: 'Hello world!',
    fontSize: 24,
    fontName: { family: 'Inter', style: 'Regular' },
};

async function main(): Promise<string | undefined> {
    await loadFont();

    const test = containerToFrame(testContainer, "test");
    const textNode = await textToTextNode(text);

    console.log(JSON.stringify(textNode, null, 2));

    figma.currentPage.appendChild(test);
    figma.currentPage.appendChild(textNode);
    figma.viewport.scrollAndZoomIntoView([test]);

    console.log("Plugin executed successfully!");
    return undefined;
}

main().then((message: string | undefined) => {
    figma.closePlugin(message);
});
