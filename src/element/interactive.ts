import { ContainedFlex, Interactive, InteractiveState, Text } from "../types/gpui";
import { element } from "../element";

async function interactiveContainedFlexText(
    e: Partial<Interactive<ContainedFlex<Text>>>
): Promise<FrameNode> {
    const interactiveElementNode = element.container({
        width: 100,
        height: 100,
        background: '#000000',
        padding: 0,
        cornerRadius: 0,
        border: {
            color: '#000000',
            width: 1,
        },
        spacing: 8,
        direction: 'VERTICAL',
    })

    const states = Object.keys(e) as Array<Partial<InteractiveState>>;

    // For each state, create a containedText
    // push it to the interactiveElementNode

    for (const state of states) {
        if (e[state] !== undefined) {
            const containedText = await element.containedText(e[state] as ContainedFlex<Text>);
            interactiveElementNode.appendChild(containedText);
        }
    }

    interactiveElementNode.appendChild(interactiveElementNode);

    return interactiveElementNode
}

export { interactiveContainedFlexText };
