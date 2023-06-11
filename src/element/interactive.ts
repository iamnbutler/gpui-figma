import { ContainedFlex, Interactive, InteractiveState, Text } from "../types/gpui";
import { element } from "../element";

async function interactiveContainedFlexText(
    e: Partial<Interactive<ContainedFlex<Text>>>
): Promise<FrameNode> {
    const interactiveElementNode = element.flexContainer({
        width: "auto",
        height: "auto",
        padding: 0,
        cornerRadius: 0,
        spacing: 4,
        direction: 'VERTICAL',
    })

    const states = Object.keys(e) as Array<Partial<InteractiveState>>;

    // For each state, create a containedText
    // push it to the interactiveElementNode

    const nodesToAdd: Array<FrameNode> = [];

    for (const state of states) {
        if (e[state] !== undefined) {
            const containedText = await element.containedText(e[state] as ContainedFlex<Text>);
            nodesToAdd.push(containedText);
        }
    }

    nodesToAdd.map((node, ix) => {
        interactiveElementNode.insertChild(ix, node);
    })

    return interactiveElementNode
}

export { interactiveContainedFlexText };
