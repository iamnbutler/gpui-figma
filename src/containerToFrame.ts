import { setFrameSize } from "./setFrameSize";
import { hexToRGB } from "./color";
import { Frame } from "./types/gpui-figma";
import { GPUI } from "./types/gpui";

function containerToFrame(
    container: GPUI.Container | GPUI.ContainedFlex,
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
                color: hexToRGB(background),
            },
        ],
        strokeWeight: border.width,
        strokes: [
            {
                type: "SOLID",
                color: hexToRGB(border.color),
            },
        ],
    };

    const frameNode = figma.createFrame();
    setFrameSize(frameNode, width, height);

    Object.assign(frameNode, frame);

    return frameNode;
}

export { containerToFrame };
