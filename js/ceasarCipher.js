export const ceasarCipher = (string, shift) => {
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const checkCase = (letter) => {
        return lowerCase.includes(letter) ? lowerCase : upperCase
    }

    const cipheredWord = (string, shift) => {
        let encryptedString = ''
        for (let i = 0; i < string.length; i++)
        {
            let letter = string[i]
            if (lowerCase.includes(letter) || upperCase.includes(letter))
            {
                let letterCase = checkCase(letter)
                let encryption = (letterCase.indexOf(letter) + shift + 26) % 26
                encryptedString = encryptedString + letterCase[encryption]
            }
            else
            {
                encryptedString = encryptedString + letter
            }
        }

        return encryptedString
    }

    return cipheredWord(string, shift)
}

console.log(ceasarCipher('This is a test!', 1))