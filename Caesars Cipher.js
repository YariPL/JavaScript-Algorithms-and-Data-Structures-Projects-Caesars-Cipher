function rot13(str) { // LBH QVQ VG!
let difference;
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let splitedSTR = str.split('');
let magicNumber = 0;
let order = 0;
let temporaryValue = 0;
function count13 (index) {
	console.log('=======================================================');
	console.log(`Run Count ${order} index: ${index}`);
	order++;
	index=index+13;
	if(index>=26) {
		difference = index - 26;
		magicNumber = alphabet[difference];
		console.log(`above ${index} : ${magicNumber}`);
		return magicNumber;
	} else if (index < 26) {
		magicNumber = alphabet[index];
		temporaryValue = true;
		console.log(`!!!!!!!!!!!!!!!!!!under!!!!!!!!!!!!!!!!!!! ${index} : ${magicNumber}`);
		return magicNumber;
	}
}

function foundIt() {
	for(let i=0;i<splitedSTR.length;i++) {
		temporaryValue = '';
/*		if(temporaryValue)continue;
*/		for(let j=0;j<alphabet.length;j++){
		   if(temporaryValue)break;
			if(splitedSTR[i] == alphabet[j]) {
				magicNumber = count13(j);
				//temporaryValue = magicNumber;    
				splitedSTR[i] = magicNumber;
				console.log(splitedSTR);
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