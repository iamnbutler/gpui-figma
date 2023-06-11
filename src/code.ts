import { container, text } from "./element/";
import { loadFont } from "./fontLoader";
import { ContainerStyle, TextStyle } from "./types/gpui";

const testContainer: ContainerStyle = {
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

const testText: TextStyle = {
    content: 'Hello world!',
    size: 24,
    lineHeight: 32,
    color: "#000000",
};

async function main(): Promise<string | undefined> {
    await loadFont();

    const test = container(testContainer, "test");
    const textNode = await text(testText);

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
