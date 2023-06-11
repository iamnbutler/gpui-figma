import { element } from "./element/";
import { textButton } from "./examples/element/button";
import { loadFont } from "./fontLoader";

async function main(): Promise<string | undefined> {
    await loadFont();

    const button = await element.interactiveContainedFlexText(textButton)

    figma.currentPage.appendChild(button);
    figma.viewport.scrollAndZoomIntoView([button]);

    console.log("Plugin executed successfully!");
    return undefined;
}

main().then((message: string | undefined) => {
    figma.closePlugin(message);
});
