async function init() {
    await loadJSON();
    filterStateLetters();
    render();
}