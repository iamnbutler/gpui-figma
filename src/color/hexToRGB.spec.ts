import { test, expect } from "vitest";
import { hexToRGB } from ".";

test("hexToRGB converts hex color to RGB", () => {
    // Test Case 1: Simple color conversion
    const hexColor1 = "#FFA726";
    const expectedResult1 = { r: 1, g: 0.65, b: 0.15 };

    const result1 = hexToRGB(hexColor1);

    expect(JSON.stringify(result1)).toBe(JSON.stringify(expectedResult1));

    // Test Case 2: Another color conversion
    const hexColor2 = "#456789";
    const expectedResult2 = { r: 0.27, g: 0.4, b: 0.54 };

    const result2 = hexToRGB(hexColor2);

    expect(JSON.stringify(result2)).toBe(JSON.stringify(expectedResult2));
});

test("hexToRGB throws error when the hex string is incorrect", () => {
    // Test Case 3: Incorrect length
    const hexColor3 = "#12345";
    expect(() => hexToRGB(hexColor3)).toThrow(
        "Invalid hex string " + hexColor3
    );

    // Test Case 4: Missing hash
    const hexColor4 = "123456";
    expect(() => hexToRGB(hexColor4)).toThrow(
        "Hex values must be prefixed with #"
    );
});
