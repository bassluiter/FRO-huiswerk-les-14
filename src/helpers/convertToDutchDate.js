
function convertToDutchDate(dateString) {
    return new Date(dateString).toLocaleDateString('nl-NL', {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default convertToDutchDate