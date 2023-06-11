import { hexToRGB } from "../color";
import { TextStyle } from "../types/gpui";

async function text(text: TextStyle, name?: string): Promise<TextNode> {

    const textStyles: Partial<TextNode> = {
        name: name ?? "text",
        characters: text.content ?? "test text",
        fills: text.color ? [{
            type: "SOLID",
            color: hexToRGB(text.color),
        }] : undefined,
        fontSize: text.size ?? 16,
        // TODO: Implement dynamic font loading
        // For now just use Inter
        fontName: { family: "Inter", style: "Regular" },
        lineHeight: { unit: "PIXELS", value: text.lineHeight ?? 24 },
        textDecoration: text.underline ? "UNDERLINE" : "NONE",
    }

    const textNode = figma.createText();

    // const font = textStyles.fontName as FontName;
    // await figma.loadFontAsync(font).then(() => {
    //     textStyles.fontName = fontName;
    // });

    Object.assign(textNode, textStyles);

    return textNode;
}

export { text };
