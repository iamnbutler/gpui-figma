# GPUI -> Figma

Import GPUI elements into Figma

🚧 Heavily a work in progress 🚧

## Usage

<img width="1728" alt="CleanShot 2023-06-11 at 19 38 11@2x" src="https://github.com/iamnbutler/gpui-figma/assets/1714999/41adaa32-02c2-46ce-8f58-bad94017c205">


Takes a GPUI-style element like this and creates matching elements in Figma:

```ts
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
```
