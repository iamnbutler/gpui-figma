export type TextProperties = {
    content: string;
    fontSize: number;
    lineHeight: number;
    fontFamily?: string;
    color: string;
    underline?: boolean;
}

export type MediaProperties = {
    width: number;
    height: number;
    src: string;
}

export type IconProperties = MediaProperties & {
    color: string;
}

export type ImageProperties = MediaProperties;

export type BorderProperties = {
    color: string;
    width: number;
}

export type ContainerProperties = {
    width: number | "fill" | "auto";
    height: number | "fill" | "auto";
    padding: number;
    background: string;
    cornerRadius: number;
    border: BorderProperties;
}

export type Text = {
    text: TextProperties;
}

export type Icon = {
    icon: IconProperties;
}

export type Image = {
    image: ImageProperties;
}

export type Container = {
    container: ContainerProperties;
}

export type FlexProperties = {}
export type Flex = {
    flex: FlexProperties;
}

export type FlexContainerProperties = FlexProperties & ContainerProperties;
export type FlexContainer = {
    container: FlexContainerProperties;
}

export type ElementType = Text | Icon | Image | Container | Flex | FlexContainer;
// A component can contain it's properties
// Example:
//
// const label: Text = {
//     fontSize: 12,
//     color: "#000000",
// }

export type Contained<T = StyleTreeElement> = {
    container: ContainerProperties;
} & T;

export type ContainedFlex<T = StyleTreeElement> = {
    container: FlexContainerProperties;
} & T;

// If it is a container or a flexContainer, it can contain children
// It also contains the properties of a container or a flexContainer
//
// Example:
//
// const foo: Container = {
//    container: {
//       width: 100,
//      height: 100,
//    },
//   children: {
//      label: {
//        fontSize: 12,
//       color: "#000000",
//      },
//   },
// }
export type ContainerType<T> = Contained<T> | ContainedFlex<T>;

export type InteractiveState = "default" | "hovered" | "pressed" | "disabled" | "selected";

// If it is interactive, has a list of states, each which contains the entire list of properties for T
export type Interactive<T> = {
    [K in InteractiveState]: T;
};

export type ToggleState = "active" | "inactive";

// If it is a toggle it as active and inactive, each which contains the entire list of properties for T
export type Toggle<T> = {
    [K in ToggleState]: T;
};

export type StyleTreeElement =
    | ElementType
    | ContainerType<ElementType>
    | Interactive<ElementType>
    | Toggle<ElementType>;

export type StyleTree = {
    [key: string]: StyleTreeElement;
}
