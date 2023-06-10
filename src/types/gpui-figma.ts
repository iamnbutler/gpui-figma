type Frame = Partial<
    Pick<
        FrameNode,
        | "name"
        | "layoutMode"
        | "x"
        | "y"
        | "paddingLeft"
        | "paddingRight"
        | "paddingTop"
        | "paddingBottom"
        | "primaryAxisSizingMode"
        | "counterAxisSizingMode"
        | "cornerRadius"
        | "strokes"
        | "strokeWeight"
        | "fills"
        | "layoutGrow"
    >
>;

export { Frame };
