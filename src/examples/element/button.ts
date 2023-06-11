import { Contained } from "../../types/gpui";

export const textButtonDefault: Contained<'text'> = {
    container: {
        height: 26,
        width: 49,
        padding: 5,
        background: '#332F38',
        cornerRadius: 4,
        border: {
            color: '#4C4653',
            width: 1,
        }
    },
    text: {
        content: 'Label',
        size: 12,
        lineHeight: 16,
        color: '#E2DFE7',
    }
}
