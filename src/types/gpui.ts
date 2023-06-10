export namespace GPUI {
    export interface Text {
        text: string;
        size: number;
        family: string;
        color: string;
    }

    export interface Icon {
        width: number;
        height: number;
        color: string;
    }

    export type Border = {
        color: string;
        width: number;
    };

    export type ElementType = Text | Icon;

    export type Container = {
        width: number | "fill";
        height: number | "fill";
        padding: number;
        background: string;
        cornerRadius: number;
        border: Border;
    };

    export type ContainedFlex = Container & {
        direction: "vertical" | "horizontal";
        spacing: number;
    };

    export type ContainedText = {
        container: Container;
        text: Text;
    };

    export type ContainedIcon = {
        container: Container;
        icon: Icon;
    };
}
