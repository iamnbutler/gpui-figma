import { test, expect } from 'vitest';
import { hexToRGB } from '.'

test('hexToRGB converts hex color to RGB', () => {
    // Test Case 1: Simple color conversion
    const hexColor1 = '#FFA726';
    const expectedResult1 = { r: 1, g: 0.654902, b: 0.14902 };

    const result1 = hexToRGB(hexColor1);

    expect(JSON.stringify(result1)).toBe(JSON.stringify(expectedResult1));

    // Test Case 2: Another color conversion
    const hexColor2 = '#456789';
    const expectedResult2 = { r: 0.270588, g: 0.403922, b: 0.537255 };

    const result2 = hexToRGB(hexColor2);

    expect(JSON.stringify(result2)).toBe(JSON.stringify(expectedResult2));
});
