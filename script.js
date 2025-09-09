function shortcut(str1, str2) {
    if (!str1 || !str2) {
        return '';
    }
    return str1[0] + str2[0];
}

// Examples
console.log(shortcut("Amnesty", "International")); // 'AI'
console.log(shortcut("Hello", "world"));           // 'Hw'
console.log(shortcut("", "International"));        // ''
console.log(shortcut("Amnesty", ""));              // ''
