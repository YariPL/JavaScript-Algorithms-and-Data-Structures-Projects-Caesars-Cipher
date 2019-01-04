//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



function rot13(str) { // LBH QVQ VG!
	let difference;
	let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	let splitedSTR = str.split('');
	let magicNumber = 0;
	let order = 0;
	let temporaryValue = 0;
	function count13 (index) {
		order++;
		index=index+13;
		if(index>=26) {
			difference = index - 26;
			magicNumber = alphabet[difference];
			return magicNumber;
		} else if (index < 26) {
			magicNumber = alphabet[index];
			temporaryValue = true;
			return magicNumber;
		}
	}

	function foundIt() {
		for(let i=0;i<splitedSTR.length;i++) {
			temporaryValue = '';
			for(let j=0;j<alphabet.length;j++){
			   if(temporaryValue)break;
				if(splitedSTR[i] == alphabet[j]) {
					magicNumber = count13(j);
					splitedSTR[i] = magicNumber;
				}
			}
		} 
	}
	foundIt();
	str = splitedSTR.join('');
	  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");