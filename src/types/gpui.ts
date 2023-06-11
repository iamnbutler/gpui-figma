export interface TextStyle {
    content: string;
    size: number;
    lineHeight: number;
    // TODO: Implement dynamic font loading
    // This doesn't do anything yet
    family?: string;
    color: string;
    underline?: boolean;
}

export interface IconStyle {
    width: number;
    height: number;
    color: string;
}

// TODO: Implement this
export interface ImageStyle { }

export type BorderStyle = {
    color: string;
    width: number;
};

export type ElementType = TextStyle | IconStyle | ImageStyle;
export type ElementKeys = {
    'text': TextStyle;
    'icon': IconStyle;
    'image': ImageStyle;
    'flex': FlexContainerStyle;
}

export type ContainerStyle = {
    // TODO: Implement 'auto' (hug)
    width: number | "fill";
    height: number | "fill";
    // TODO: Implement individual paddings
    padding: number;
    background: string;
    cornerRadius: number;
    border: BorderStyle;
};

export type FlexStyle = {
    direction: "vertical" | "horizontal";
    spacing: number;
}

export type Container = ContainerStyle

export type FlexContainerStyle = ContainerStyle & FlexStyle

export type Contained<K extends keyof ElementKeys> = {
    container: ContainerStyle;
} & { [key in K]: ElementKeys[K] };

export type Flex<K extends keyof ElementKeys> = {
    container: FlexContainerStyle;
} & { [key in K]: ElementKeys[K] };

export type StructuredElement<K extends keyof ElementKeys> = ElementKeys[K] & {
    children?: StyleTree;
};

export type StyledElementKeyMap = {
    [key in keyof ElementKeys]: StructuredElement<key>;
} & {
    [key: string]: StructuredElement<keyof ElementKeys>;
};

export type Interactive<T extends keyof ElementKeys> = {
    default: StructuredElement<T>;
    hovered?: StructuredElement<T>;
    pressed?: StructuredElement<T>;
    disabled?: StructuredElement<T>;
    selected?: StructuredElement<T>;
}

export type Toggle<T extends keyof ElementKeys> = {
    active: StructuredElement<T>;
    inactive: StructuredElement<T>;
}

export type StyleTree = {
    [key: string]: StyledElementKeyMap[keyof StyledElementKeyMap] | Interactive<keyof ElementKeys> | Toggle<keyof ElementKeys>;
}
