import { setFrameSize } from "../setFrameSize";
import { hexToRGB } from "../color";
import { ContainerProperties, FlexContainerProperties } from "../types/gpui";

function container(
    container: ContainerProperties | FlexContainerProperties,
    name?: string
): FrameNode {
    const { padding, cornerRadius, border, background, width, height } =
        container;

    const needsAutoLayout =
        width === "fill"
        || width === "auto"
        || height === "fill"
        || height === "auto"
        || padding;

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

export function flexContainer(e: FlexContainerProperties) {
    const containerNode = container(e);
    containerNode.layoutMode = e.direction ?? "HORIZONTAL";
    containerNode.itemSpacing = e.spacing ?? 0;

    return containerNode;
}

export { container };
