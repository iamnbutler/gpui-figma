import { ContainedFlex, Interactive, Text } from "../../types/gpui";

const defaultTextButton: ContainedFlex<Text> = {
    container: {
        height: 26,
        width: 49,
        padding: 5,
        background: '#332F38',
        cornerRadius: 4,
        border: {
            color: '#4C4653',
            width: 1,
        },
        spacing: 0,
        direction: 'HORIZONTAL',
    },
    text: {
        content: 'Label',
        fontSize: 12,
        lineHeight: 16,
        color: '#E2DFE7',
    }
}

export const textButton: Partial<Interactive<ContainedFlex<Text>>> = {
    default: defaultTextButton,
    hovered: {
        container: {
            ...defaultTextButton.container,
            background: '#3F3B45',
            border: {
                width: 1,
                color: '#4C4653',
            }
        },
        text: defaultTextButton.text,
    },
    pressed: {
        container: {
            ...defaultTextButton.container,
            background: '#4C4653',
            border: {
                width: 1,
                color: '#4C4653',
            }
        },
        text: defaultTextButton.text,
    },
    focused: {
        container: {
            ...defaultTextButton.container,
            border: {
                width: 1,
                color: '#576DDB',
            }
        },
        text: defaultTextButton.text,
    }
}
