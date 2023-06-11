import { setFrameSize } from "../setFrameSize";
import { hexToRGB } from "../color";
import { ContainerStyle, FlexContainerStyle } from "../types/gpui";

function container(
    container: ContainerStyle | FlexContainerStyle,
    name?: string
): FrameNode {
    const { padding, cornerRadius, border, background, width, height } =
        container;

    const needsAutoLayout = width === "fill" || height === "fill" || padding;

    const frame: Partial<FrameNode> = {
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

export { container };
