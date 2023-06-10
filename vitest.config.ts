/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        globals: true,
        include: ["src/**/*.spec.ts"]
    },
    resolve: {
        alias: {
            // Define any necessary alias based on your project structure
        },
    },
    server: {
        fs: {
            strict: true,
        },
    },
})
