
function readTime(text) {
    let woorden = text.trim().split(" ")
    const aantal = woorden.length
    console.log(aantal)
    const aantalMinuten = Math.round(Math.floor(aantal / 100) * 0.3)
    console.log(aantalMinuten)

       return aantalMinuten
}

export default readTime