const baseTheme = {
    typography: {
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '1rem'
    }
};

export const lightTheme = {
    ...baseTheme,
    palette: {
        primary: "#03FFFF",
        secondary: "#7843E6",
        terciary: "#FF00FF",
        background: {
            primary: "#FAFAFA",
            secondary: "#FAFAFA",
        },
        text: {
            primary: "#383A47",
            secondary: "#C4C4C4",
        }
    }
}

export const darkTheme = {
    ...baseTheme,
    palette: {
        primary: "#7843E6",
        secondary: "#03FFFF",
        terciary: "#FF00FF",
        background: {
            primary: "#383A47",
            secondary: "#4D4F61",
        },
        text: {
            primary: "#EFEFEF",
            secondary: "#C4C4C4",
        }
    }
}