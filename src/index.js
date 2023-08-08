const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const letters = expr.match(/.{1,10}/g); // разбиваем строку на закодированные буквы
    console.log(letters)
    let mors = []
    let result = ""
    for(let i = 0; i<letters.length; i++){
        mors.push(letters[i].replace(/10/g, ".").replace(/11/g, "-").replace(/[*]{10}/g, " ").replace(/0/g, ""));// веселая конструкция где мы меняем все 10 и 11 на символы а последний удаляет лишние нули и все это записываем в новый массив 
 
    }
   for (let i = 0; i < mors.length; i++) {
    if (mors[i] === " ") {
      result += " "; // добавляем пробел в результат
    } else {
      result += MORSE_TABLE[mors[i]]; // получаем букву из таблицы Морзе и добавляем в результат
    }
  }

  
    return(result);
}

module.exports = {
    decode
}
