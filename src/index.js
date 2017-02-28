function StringNumeralSystem(chars) {
    function replaceCharAt(value, index, replacement) {
        return value.substring(0, index) + replacement + value.substring(index + 1);
    }

    function areAllCharactersEqualTo(value, compare) {
        return Array.from(value).every(character => character === compare);
    }

    function getNextChar(character, chars) {
        let nextCharIndex = chars.indexOf(character);

        if (nextCharIndex === chars.length - 1) {
            return chars[0];
        }

        return chars[nextCharIndex + 1];
    }

    function isValueValid(value) {
        return Array.from(value).every(character => {
            return chars.indexOf(character) !== -1;
        });
    }

    function increment(value) {
        if (!isValueValid(value)) {
            throw new Error('Invalid number, allowed characters: ' + chars);
        }

        let result = '';

        if (areAllCharactersEqualTo(value, chars[chars.length - 1])) {
            result = chars[0].repeat(value.length + 1);
        } else if (value[value.length - 1] === chars[chars.length - 1]) {
            if (value.length > 1) {
                result = increment(value.slice(0, value.length - 1));
                result += getNextChar(value[value.length - 1], chars);
            }
        } else {
            const nextChar = getNextChar(value[value.length - 1], chars);

            result = replaceCharAt(value, value.length - 1, nextChar);
        }

        return result;
    }

    function decrement(value) {
        throw new Error('Not implemented');
    }

    return {
        increment,
        decrement
    }
}

module.exports = StringNumeralSystem;
