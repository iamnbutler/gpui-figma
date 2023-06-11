import { Contained, ContainedFlex, Text } from "../types/gpui";
import { element } from "../element";

async function containedText(
    containedElement: Contained<Text>
): Promise<FrameNode> {
    if (!containedElement.text || !containedElement.container) {
        throw new Error('Contained must have a text and a container property');
    }

    const { text, container } = containedElement;

    const containerNode = element.container(container);
    const textNode = await element.text(text);

    containerNode.appendChild(textNode);

    return containerNode
}

async function containedFlexText(
    containedElement: ContainedFlex<Text>
): Promise<FrameNode> {
    if (!containedElement.text || !containedElement.container) {
        throw new Error('Contained must have a text and a container property');
    }

    const { text, container } = containedElement;

    const containerNode = element.flexContainer(container);
    const textNode = await element.text(text);

    containerNode.appendChild(textNode);

    return containerNode
}

export { containedText, containedFlexText };
