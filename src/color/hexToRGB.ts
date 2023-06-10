interface RGB {
    readonly r: number
    readonly g: number
    readonly b: number
}

function hexToRGB(hex: string): RGB {
    const rgb: RGB = {
        r: parseInt(hex.substring(1, 3), 16) / 255,
        g: parseInt(hex.substring(3, 5), 16) / 255,
        b: parseInt(hex.substring(5, 7), 16) / 255,
    };

    return rgb;
}

export { hexToRGB, RGB };
