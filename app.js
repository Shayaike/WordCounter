window.onload = function() {
    main();
}

function main() {

    // calculate event listener
    document.getElementById('calculate').addEventListener('click', function() {
        const alltext = document.getElementById('textarea').value
            // todo:
        document.getElementById("character").innerText = charCount(alltext)
        document.getElementById("words").innerText = wordCount(alltext)
        document.getElementById("spaces").innerText = spaceCount(alltext)
        document.getElementById("sentences").innerText = sentenceCount(alltext)
        document.getElementById("specialCharacter").innerText = specialCharacterCount(alltext)

    })
    document.getElementById('reset').addEventListener('click', function() {
        document.getElementById('textarea').value = ""
        document.getElementById("character").innerText = 0
        document.getElementById("words").innerText = 0
        document.getElementById("spaces").innerText = 0
        document.getElementById("sentences").innerText = 0
        document.getElementById("specialCharacter").innerText = 0

    })

}
// Character Counter
function charCount(text) {
    return text.length
}

// word counter
function wordCount(text) {
    return text.split(' ').length
}

// space counter
function spaceCount(text) {
    return wordCount(text) - 1;
}

// Sentence Counter

function sentenceCount(text) {
    let sentence1 = text.split('.').length - 1
    let sentence2 = text.split("?").length - 1

    return sentence1 + sentence2
}

// Special Character Counter
function specialCharacterCount(text) {
    const special = text.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
    if (special == null) return 0;
    return special.length;
}