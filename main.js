// Retrieve the saved theme from localStorage, if not found use 'theme-light' as default
const currentTheme = localStorage.getItem('theme') || 'theme-light';
// Apply the theme class to the body element
document.body.className = currentTheme;

// Array of available theme options
const themes = ['light', 'dark', 'nature', 'ocean', 'sunset'];

// Attach click event listeners to each theme button
themes.forEach(theme => {
    // Find the button element using its ID (format: 'theme-name')
    const button = document.getElementById(`${theme}-theme`);
    button.addEventListener('click', () => {
        // Create the theme class name (format: 'theme-name')
        const themeClass = `theme-${theme}`;
        // Apply the selected theme to the body element
        document.body.className = themeClass;
        // Save the selected theme to localStorage for persistence
        localStorage.setItem('theme', themeClass);
    });
});
