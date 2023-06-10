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

type Text = Partial<
    Pick<
        TextNode,
        | "name"
        | "characters"
        | "fontSize"
        | "fontName"
        | "textCase"
        | "textDecoration"
        | "lineHeight"
    >
>;

export { Frame, Text };
