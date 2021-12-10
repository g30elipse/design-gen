export function setFontFamilyImport(url: string) {
    // create a style element and add @import rule
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`@import url(${url});`));
    // add style element to the page
    document.head.appendChild(style);
}