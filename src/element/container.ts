import { setFrameSize } from "../setFrameSize";
import { hexToRGB } from "../color";
import { ContainerProperties, FlexContainerProperties } from "../types/gpui";

function setContainerProperties(
    frame: FrameNode,
    container: ContainerProperties | FlexContainerProperties
) {
    const { padding, cornerRadius, border, background, width, height } = container;

    const needsAutoLayout =
        width === "fill"
        || width === "auto"
        || height === "fill"
        || height === "auto"
        || padding;

    if ('direction' in container) {
        frame.layoutMode = container.direction;
        frame.itemSpacing = container.spacing ?? 0;
    } else if (needsAutoLayout) {
        frame.layoutMode = "HORIZONTAL";
        frame.itemSpacing = 0;
    }

    setFrameSize(frame, width, height);

    frame.name = "frame";
    padding && (frame.paddingLeft = frame.paddingRight = frame.paddingTop = frame.paddingBottom = padding);
    cornerRadius && (frame.cornerRadius = cornerRadius);

    if (background) {
        frame.fills = [
            {
                type: "SOLID",
                color: hexToRGB(background),
            },
        ];
    }

    if (border) {
        frame.strokeWeight = border.width;
        frame.strokes = [
            {
                type: "SOLID",
                color: hexToRGB(border.color),
            },
        ];
    }
}

function container(
    container: ContainerProperties,
): FrameNode {
    const frameNode = figma.createFrame();

    setContainerProperties(frameNode, container);

    return frameNode;
}

function flexContainer(
    flexContainerProperties: FlexContainerProperties,
): FrameNode {
    const frameNode = figma.createFrame();

    setContainerProperties(frameNode, flexContainerProperties);

    return frameNode;
}

export { container, flexContainer };
