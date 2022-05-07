////////==========  비교해서 정렬한다 ============
function compare ( a , b ) {   return a - b;   }	



////=====  json정렬 ASC
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


////=====  소수점체크  
function floatCheck(obj){
				 var num_check=/^([0-9]*)[\.]?([0-9])?$/;
					if(!num_check.test(obj)){
					return "NF";
				}
				return "F";
}




function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	
}


 /* =================================================================
  앞/뒤 공백 제거
 ================================================================= */

 String.prototype.trim = function() {
//   return this.replace(/\s/g, "");		// 빈칸은 전체다 삭제하는것.
   return this.replace(/(^\s*)|(\s*$)/, '');
 }

 

 /* =================================================================
  앞 공백 제거
 ================================================================= */

 String.prototype.ltrim = function() {

  var i, j = 0;
  var objstr

  for (i = 0; i < this.length; i++) {

   if (this.charAt(i) == ' ') j = j + 1;
   else break;
  }

  return this.substr(j, this.length - j + 1) 
 }

 /* =================================================================
  뒤 공백 제거
 ================================================================= */

 String.prototype.rtrim = function() {

  var i, j = 0;

  for (i = this.length - 1; i >= 0; i--) {

   if (this.charAt(i) == ' ') j = j + 1;
   else break;
  }

  return this.substr(0, this.length - j);
 }


/////////  브라우저 확인  //////////////
function msieversion() {
	var agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf("chrome") != -1) {		
		console.log("크롬 브라우저입니다.");
		var cdk = 'chrome';		
	}else{
		$('.chrome_o').hide();
		$('.chrome_x').show();
		alert('크롬브라우저가 아닙니다. 문제가 짤리거나 서비스에 제한이 있을수있습니다.!');
	
		console.log("크롬 이외의 브라우저입니다.");
		var cdk = 'no_chrome';
	}
	return cdk;
}
///////////////////////////////////