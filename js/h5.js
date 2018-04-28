var arrEnterNum = [];
var whichA = 0;
var whichB = 0;
var arrAll = new Array(9);
var arrNum = new Array(4);
var whichOne = 0;
var whichTwo = 0;
var whichThree = 0;
var whichFour = 0;
var whichOneB = 0;
var whichTwoB = 0;
var whichThreeB = 0;
var whichFourB = 0;
var enterNum = 0
var oneNum = 0
var twoNum = 0
var threeNum = 0
var fourNum = 0

function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}
	
function getRandomArray(minNum, maxNum, n) {	//隨機產生不重覆的n個數字
	
 
	for(var i=0; i<n; i++) {
		var rdm = 0;		//暫存的亂數
 
		do {
			var exist = false;			//此亂數是否已存在
			rdm = getRandom(minNum, maxNum);	//取得亂數
 
			//檢查亂數是否存在於陣列中，若存在則繼續回圈
			if(arrNum.indexOf(rdm) != -1) exist = true;
 
		} while (exist);	//產生沒出現過的亂數時離開迴圈
 
		arrNum[i] = rdm;
	}
	return arrNum;
}

$("#startGame").click(function() {
    
    
    getRandomArray(1,9,4)
    
    $('#tipArea').html('')
    
    $("#allTimeId").html(arrNum)
    //alert(arrNum)
    
    
    $('#startModal').modal()
    
})


$("#lookAns").click(function(){
    
   
    
    
    $('#ansModal').modal()
    // alert(arrNum)
})

//點猜數字
$("#checkNum").click(function(){
    whichOne = 0;
    whichTwo = 0;
    whichThree = 0;
    whichFour = 0;
    
    whichOneB = 0;
    whichTwoB = 0;
    whichThreeB = 0;
    whichFourB = 0;
    startCheck()
})

//確認數字
function startCheck() {
    enterNum = $('input[name="inputNum"]').val();
    
    oneNum = enterNum.substr(0,1);
    twoNum = enterNum.substr(1,1);
    threeNum = enterNum.substr(2,1);
    fourNum = enterNum.substr(3,1);
    
    //A數目
    if(oneNum == arrNum[0]){
        whichOne = 1
    };
    if(twoNum == arrNum[1]){
       whichTwo = 1
    };
    if(threeNum == arrNum[2]){
        whichThree = 1
    };
    if(fourNum == arrNum[3]){
        whichFour = 1
    };
    
    //B數目
    if (oneNum == arrNum[1] || oneNum == arrNum[2] || oneNum == arrNum[3]) {
        whichOneB = 1
    } 
    if (twoNum == arrNum[0] || twoNum == arrNum[2] || twoNum == arrNum[3]) {
        whichTwoB = 1
    } 
    if (threeNum == arrNum[1] || threeNum == arrNum[0] || threeNum == arrNum[3]) {
        whichThreeB = 1
    } 
     if (fourNum == arrNum[1] || fourNum == arrNum[2] || fourNum == arrNum[0]) {
        whichFourB = 1
    } 
    
    whichA = whichOne + whichTwo + whichThree + whichFour
    whichB = whichOneB + whichTwoB + whichThreeB + whichFourB
    
    $("#tipArea").append(enterNum + "  ：  " + whichA+"A"+whichB+"B"+"<br>")
    // alert(whichA+"A"+whichB+"B")
    // alert(whichTwo)
    // alert(whichThree)
    // alert(whichFour)
    
    if (whichA == 4) {
        $('#successModal').modal()
    }
    
    
    
}

// Enter輸入
$('#inputPassword').keypress(function(e) {
         code = (e.keyCode ? e.keyCode : e.which);
         if (code == 13) {
             $("#checkNum").click();
         };
         
         
    });