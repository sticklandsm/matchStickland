


export function getNumberOfMatchesLetter(letter: string): number {
  switch (letter.toUpperCase()) {
    case 'A':
      return 6
    case 'B':
      return 7
    case 'C':
      return 4
    case 'E':
      return 5
    case 'F':
      return 4
    case 'G':
      return 6
    case 'H':
      return 5
    case 'I':
      return 2
    case 'J':
      return 4
    case 'L':
      return 3
    case 'O':
      return 6
    case 'P':
      return 5
    case 'S':
      return 5
    case 'U':
      return 5
    case 'Y':
      return 5
    case 'Z':
      return 5
    default:
      return 0
  }
}

export function getNumberOfMatchesWord(word: string) {
  let matches = 0
  word
    .split('')
    .forEach((letter) => (matches += getNumberOfMatchesLetter(letter)))

  return matches
}

export function getLetterFromConfig(config: number) {
  switch (config) {
    case 1111011:
      return 'A'
    case 1111111:
      return 'B'
    case 101101:
      return 'C'
    case 101111:
      return 'E'
    case 101011:
      return 'F'
    case 1101111:
      return 'G'
    case 1111010:
      return 'H'
    case 101000:
      return 'I'
    case 1010000:
      return 'I'
    case 1110100:
      return 'J'
    case 101100:
      return 'L'
    case 1111101:
      return 'O'
    case 111011:
      return 'P'
    case 1001111:
      return 'S'
    case 1111100:
      return 'U'
    case 1011110:
      return 'Y'
    case 110111:
      return 'Z'

    default:
      return
  }
}

export function getConfigFromLetter(letter: string) {
  switch (letter.toUpperCase()) {
    case 'A':
      return 1111011
    case 'B':
      return 1111111
    case 'C':
      return 101101
    case 'E':
      return 101111
    case 'F':
      return 101011
    case 'G':
      return 1101111
    case 'H':
      return 1111010
    case 'I':
      return 101000
    case 'J':
      return 1110100
    case 'L':
      return 101100
    case 'O':
      return 1111101
    case 'P':
      return 111011
    case 'S':
      return 1001111
    case 'U':
      return 1111100
    case 'Y':
      return 1011110
    case 'Z':
      return 110111
    default:
      return undefined
  }
}
