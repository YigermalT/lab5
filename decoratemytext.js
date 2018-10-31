
if(!mainApp){
	var mainApp = {};
}

mainApp.showChange = function(){
	alert("change text is processing");
	if (document.getElementById('bling').checked == true){
		document.getElementById('info').style.fontWeight = "bold";
		document.getElementById('info').style.color = "green";
		document.getElementById('info').style.textDecoration = "underline";
		document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
	}else{
		document.getElementById('info').style.fontWeight = 'normal';
		document.getElementById('info').style.color = "black";
		document.getElementById('info').style.textDecoration = "none";
		document.body.style.backgroundImage = "none";
	}
};

mainApp.increaseFont = function(value){
	var infoElement = document.getElementById('info');
	infoElement.style.fontSize = parseInt(infoElement.style.fontSize) + value + 'pt';	
};

mainApp.showAlert = function(){
	var _self = this;
	var infoElement = document.getElementById('info');
	infoElement.style.fontSize = "24pt";

	infoElement.style.fontSize = parseInt(infoElement.style.fontSize) + 2 + 'pt';
	setInterval(mainApp.increaseFont, 500, 2);
};

mainApp.convertToPigLatin = function(){
	var arrVowel = ['a', 'i', 'e', 'o', 'u'];
	var infoElement = document.getElementById('info');
	var initString = infoElement.value;
	var arrCharacter = initString.split(' ');
	var result = "";
	for(var i = 0; i < arrCharacter.length; i++){
		var word = arrCharacter[i];
		if(word.trim() == "") continue;
		var newWord;
		if(arrVowel.indexOf(word[0]) == -1 &&  arrVowel.indexOf(word[1]) > -1){
			newWord = word.substring(1) + word[0] + 'ay';
		}else if(arrVowel.indexOf(word[0]) > -1){
			newWord = word + 'way';
		}else{
			var stringAfter = "";			
			for(var j = 2; j < word.length; j++){				
				if(arrVowel.indexOf(word[j]) > -1){
					//vowel
					newWord = word.substring(j) + word[0] + word[1] + stringAfter + 'ay';
					;break
				}else{
					stringAfter += word[j];
				}				
			}
		}
		result += newWord + " ";
	}

	infoElement.value = result;
};

mainApp.malkovich = function(){
	var infoElement = document.getElementById('info');
	var initString = infoElement.value;
	var arrCharacter = initString.split(' ');
	var result = "";
	for(var i = 0; i < arrCharacter.length; i++){
		var word = arrCharacter[i];
		if(word.trim() != "" && word.length >= 5){
			word = "Malkovitch";
		}
		result += word + " ";
	}

	infoElement.value = result;
};

document.getElementById('bigger').onclick = mainApp.showAlert;
document.getElementById('bling').onchange = mainApp.showChange;
document.getElementById('igpay').onclick = mainApp.convertToPigLatin;
document.getElementById('malko').onclick = mainApp.malkovich;

