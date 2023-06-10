import { setFrameSize } from "./setFrameSize";
import { hexColorToRGB } from "./color";
import { Frame } from "./types/gpui-figma";

function containerToFrame(
    container: Container | ContainedFlex,
    name?: string
): FrameNode {
    const { padding, cornerRadius, border, background, width, height } =
        container;

    const needsAutoLayout = width === "fill" || height === "fill" || padding;

    const frame: Frame = {
        name: name ?? "frame",
        layoutMode: needsAutoLayout ? "HORIZONTAL" : "NONE",
        x: 0,
        y: 0,
        paddingLeft: padding,
        paddingRight: padding,
        paddingTop: padding,
        paddingBottom: padding,
        cornerRadius: cornerRadius,
        fills: [
            {
                type: "SOLID",
                color: hexColorToRGB(background),
            },
        ],
        strokeWeight: border.width,
        strokes: [
            {
                type: "SOLID",
                color: hexColorToRGB(border.color),
            },
        ],
    };

    const frameNode = figma.createFrame();
    setFrameSize(frameNode, width, height);

    Object.assign(frameNode, frame);

    return frameNode;
}

export { containerToFrame };
