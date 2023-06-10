import { Text } from "./types/gpui-figma";

async function textToTextNode(text: Text, name?: string): Promise<TextNode> {

    const {
        characters,
        fontSize,
        fontName,
        textCase,
        textDecoration,
        lineHeight,
    } = text;

    const textStyles: Text = {
        name: name ?? "text",
        characters: characters ?? "test text",
        fontSize: fontSize ?? 16,
        fontName: fontName ?? { family: "Inter", style: "Regular" },
        textCase: textCase ?? "ORIGINAL",
        lineHeight: lineHeight ?? { unit: "PIXELS", value: 24 },
        textDecoration: textDecoration ?? "NONE",
    }

    const textNode = figma.createText();

    const font = textStyles.fontName as FontName;
    await figma.loadFontAsync(font).then(() => {
        textStyles.fontName = fontName;
    });

    Object.assign(textNode, textStyles);

    return textNode;
}

export { textToTextNode };
