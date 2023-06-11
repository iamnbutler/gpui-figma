import { ContainerProperties } from "./types/gpui";

function setFrameSize(
    frameNode: FrameNode,
    width: ContainerProperties['width'],
    height: ContainerProperties['height'],
): void {
    if (
        width !== "fill"
        && width !== "auto"
        && height !== "fill"
        && height !== "auto") {
        frameNode.resizeWithoutConstraints(width, height);
        frameNode.layoutGrow = 0;
        return;
    }

    if (
        (frameNode.layoutMode !== "HORIZONTAL" || "VERTICAL") &&
        (width === "fill" || height === "fill")
    ) {
        throw new Error(
            `Cannot set width or height to "fill" on a non-autolayout frame`
        );
    }

    if (frameNode.layoutMode === "HORIZONTAL") {
        frameNode.primaryAxisSizingMode = "FIXED";
        frameNode.counterAxisSizingMode = "AUTO";
    } else if (frameNode.layoutMode === "VERTICAL") {
        frameNode.primaryAxisSizingMode = "AUTO";
        frameNode.counterAxisSizingMode = "FIXED";
    } else {
        throw new Error(`Invalid layout mode: ${frameNode.layoutMode}`);
    }

    frameNode.layoutGrow = 1;

    // Resize only width or height if not "fill"
    if (width !== "fill" && width !== "auto") {
        frameNode.resizeWithoutConstraints(width, 9999);
    }
    if (height !== "fill" && height !== "auto") {
        frameNode.resizeWithoutConstraints(9999, height);
    }
}

export { setFrameSize };
