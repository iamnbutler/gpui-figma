interface RGB {
    readonly r: number;
    readonly g: number;
    readonly b: number;
}

function hexToRGB(hex: string): RGB {
    if (!hex.startsWith("#")) {
        throw new Error(`Hex values must be prefixed with #`);
    }

    if (hex.length !== 7) {
        throw new Error(`Invalid hex string ${hex}`);
    }

    const rgb: RGB = {
        r: Math.round((parseInt(hex.substring(1, 3), 16) / 255) * 100) / 100,
        g: Math.round((parseInt(hex.substring(3, 5), 16) / 255) * 100) / 100,
        b: Math.round((parseInt(hex.substring(5, 7), 16) / 255) * 100) / 100,
    };

    return rgb;
}

export { hexToRGB, RGB };
