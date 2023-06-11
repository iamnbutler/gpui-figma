import { element } from "./element/";
import { textButtonDefault } from "./examples/element/button";
import { loadFont } from "./fontLoader";

async function main(): Promise<string | undefined> {
    await loadFont();

    const textButton = await element.containedText(textButtonDefault)

    figma.currentPage.appendChild(textButton);
    figma.viewport.scrollAndZoomIntoView([textButton]);

    console.log("Plugin executed successfully!");
    return undefined;
}

main().then((message: string | undefined) => {
    figma.closePlugin(message);
});
