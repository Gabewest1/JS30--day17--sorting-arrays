const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts',
    'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
]

const sortedBands = sort(bands)

document.querySelector("#bands").innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join("")

function sort(arr) {
    let arrWithoutStartingWords = arr.map(word => {
        let lowercased = word.toLowerCase()
        if (lowercased.split(" ")[0] === "an") {
            return lowercased.replace("an", "").trim()
        } else if (lowercased.split(" ")[0] === "a") {
            return lowercased.replace("a", "").trim()
        } else if (lowercased.split(" ")[0] === "the") {
            return lowercased.replace("the", "").trim()
        }

        return lowercased
    })

    let remember = arrWithoutStartingWords.reduce((obj, current, i) => {
        obj[current] = arr[i]
        return obj
    }, {})

    let sortedArr = arrWithoutStartingWords.sort((a, b) => a > b ? 1 : -1)
    return sortedArr.map(val => remember[val])
}
