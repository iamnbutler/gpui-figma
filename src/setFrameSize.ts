function setFrameSize(
    frameNode: FrameNode,
    width: number | "fill",
    height: number | "fill"
): void {
    if (width !== "fill" && height !== "fill") {
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
    if (width !== "fill") {
        frameNode.resizeWithoutConstraints(width, 9999);
    }
    if (height !== "fill") {
        frameNode.resizeWithoutConstraints(9999, height);
    }
}

export { setFrameSize };
