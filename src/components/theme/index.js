const baseTheme = {
    fonts: {
        mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
    },
};

const lightTheme = {
    ...baseTheme,
    colors: {
        background: '#fff',
        heading: '#000',
        text: '#3B454E',
        preFormattedText: 'rgb(245, 247, 249)',
        link: '#1000EE',
    },
};

const darkTheme = {
    ...baseTheme,
    colors: {
        background: '#000d40',
        heading: '#fff',
        text: '#fff',
        preFormattedText: '#000',
        link: '#0773e8',
    },
};

export { lightTheme, darkTheme };