function findMaxNum(){
    var firstNumber=document.getElementById("firstNumber").value;
    var secondNumber=document.getElementById("secondNumber").value;
    if(firstNumber>secondNumber){
        document.getElementById("maxOutPut").innerHTML=`Between ${firstNumber} and ${secondNumber} Maximum Number is ${firstNumber}`;
    }
    else if(secondNumber>firstNumber){
        document.getElementById("maxOutPut").innerHTML=`Between ${firstNumber} and ${secondNumber} Maximum Number is ${secondNumber}`;
    }
    else{
        document.getElementById("maxOutPut").innerHTML="Both Numbers are equal";
    }
}

function findMaxNumBetween3(){
    var firstNumber1=parseInt(document.getElementById("firstNumber1").value);
    var secondNumber2=parseInt(document.getElementById("secondNumber2").value);
    var thirdNumber3=parseInt(document.getElementById("thirdNumber3").value);
     var max=firstNumber1;
    if(secondNumber2>max){
        max=secondNumber2;
    }
    if(thirdNumber3>max){
        max=thirdNumber3;
    }
    document.getElementById("maxOutPut3").innerHTML=`Between ${firstNumber1}, ${secondNumber2}, and ${thirdNumber3} Maximum Number is ${max}`;
}

function positiveNegativeCheck(){
    var numberInput=document.getElementById("numberInput").value;
    if(numberInput>0){
        document.getElementById("checkOutPut").innerHTML="Number is Positive";
    }
    if(numberInput<0){
        document.getElementById("checkOutPut").innerHTML="Number is Negative";
    }
    if(numberInput==0){
        document.getElementById("checkOutPut").innerHTML="Number is Zero";
    }
}

function divisibleNumberCheck(){
    var divisiblenumberInput=document.getElementById("divisiblenumberInput").value;
    if(divisiblenumberInput%5==0 && divisiblenumberInput%11==0){
        document.getElementById("checkdivisibleOutPut").innerHTML="Number is divisble by 5 and 11";
    }
    else{
        document.getElementById("checkdivisibleOutPut").innerHTML="Number is not divisible of 5 and 11";
    }
}
 
function evenOddCheck() {
    var evenOddInput=document.getElementById("evenOddInput").value;
    var evenOdd=evenOddInput/2;
    var changeType=parseInt(evenOdd);
    if(changeType*2==evenOddInput){
       document.getElementById("checkNumberOutPut").innerHTML="Number is Even";
    }
    else{
        document.getElementById("checkNumberOutPut").innerHTML="Number is Odd";
    }
}

function yearCheck(){
    var yearInput=document.getElementById("yearInput").value;
    if(yearInput%4==0){
        document.getElementById("yearOutPut").innerHTML=`${yearInput} is Leap Year`;
    }
    else{
        document.getElementById("yearOutPut").innerHTML=`${yearInput} is not Leap Year`;
    }
}

function checkChar(){
    var input=document.getElementById("input").value;
    if(input.match(/[a-z]/i)){
        document.getElementById("output").innerHTML=`${input} is Alphabet`;
    }
    else{
        document.getElementById("output").innerHTML=`${input} is not Alphabet`;
    }
}

function vowelConst(){
    var charinput=document.getElementById("charinput").value;
    var lowercase=charinput.toLowerCase();
    if(lowercase=="a" || lowercase=="e" || lowercase=="i" || lowercase=="o" || lowercase=="u"){
        document.getElementById("charoutput").innerHTML=`${charinput} is Vowel`;
    }
    else{
        document.getElementById("charoutput").innerHTML=`${charinput} is Constant`;
    }
}

function checkcharNum(){
    var anyCharInput=document.getElementById("anyCharInput").value;
    if(anyCharInput.match(/[a-z]/i)){
        document.getElementById("anyCharOutput").innerHTML=`${anyCharInput} is Letter`;
    }
    else if(anyCharInput.match(/[0-9]/i)){
        document.getElementById("anyCharOutput").innerHTML=`${anyCharInput} is Digit`;
    }
    else{
        document.getElementById("anyCharOutput").innerHTML=`${anyCharInput} is Special Charachter`;
    }
}

// Conditions Programs End

function findLength(){
    var stringInputForLength=document.getElementById("stringInputForLength").value;
    var countLength=stringInputForLength.length;
    document.getElementById("stringOutputOfLength").innerHTML=`Length of String ${stringInputForLength} is ${countLength}`;
}

function copyString(){
    var copyStringInput1=document.getElementById("copyStringInput1").value;
    var copyStringInput2=document.getElementById("copyStringInput2").value;
    var copy=`${copyStringInput1}${copyStringInput2}`;
    document.getElementById("copyStringOutput").innerHTML=`Before Copy String 1 = ${copyStringInput1}
    and String 2  = ${copyStringInput2} After Copy String 1  = ${copyStringInput1} and String 2 = ${copy}`;
}

function conCat(){
    var firstStringInput=document.getElementById("firstStringInput").value;
    var secondStringInput=document.getElementById("secondStringInput").value;
    document.getElementById("concatOutput").innerHTML=`${firstStringInput} ${secondStringInput}`;
}
function compareStrings(){
    var firstCompareString=document.getElementById("firstCompareString").value;
    var secondCompareString=document.getElementById("secondCompareString").value;
    if(firstCompareString.length==secondCompareString.length){
        document.getElementById("compareOutput").innerHTML=`First String = ${firstCompareString} and Second String = ${secondCompareString} and Result is Both String are Equal`;
    }
    else{
        document.getElementById("compareOutput").innerHTML=`First String = ${firstCompareString} and Second String = ${secondCompareString} and Result is Both String are Not Equal`;

    }
}
function toUpperCaseString(){
    var stringToLowerCaseInput=document.getElementById("stringToLowerCaseInput").value;
    var convert=stringToLowerCaseInput.toUpperCase();
    document.getElementById("stringToUpperCaseOutput").innerHTML=`Before Conversion String = ${stringToLowerCaseInput} and After Conversion String = ${convert}`;
}
function toLowerCaseString(){
    var stringToUpperCaseInput=document.getElementById("stringToUpperCaseInput").value;
    var convertLowerCase=stringToUpperCaseInput.toLowerCase();
    document.getElementById("stringToLowerCaseOutput").innerHTML=`Before Conversion String = ${stringToUpperCaseInput} and After Conversion String = ${convertLowerCase}`;
}
function toToggleCase(){
    var stringInputForToggleCase=document.getElementById("stringInputForToggleCase").value;
    var toggleCase="";
    for(i=0; i<stringInputForToggleCase.length; i++){
        if(stringInputForToggleCase[i]===stringInputForToggleCase[i].toLowerCase()){
           toggleCase +=stringInputForToggleCase[i].toUpperCase();
        }
        else if(stringInputForToggleCase[i]===stringInputForToggleCase[i].toUpperCase()){
            toggleCase +=stringInputForToggleCase[i].toLowerCase();
        }
    }
    document.getElementById("stringOutputForToggleCase").innerHTML=toggleCase;
}
function countTotal(){
    var stringCountInput=document.getElementById("stringCountInput").value;
    var lowercaseString=stringCountInput.toLowerCase();
    var char=0;
    var digits=0;
    var Special=0;
    for(i=0; i<stringCountInput.length; i++){
    if(lowercaseString[i].match(/[a-z]/)){
        char++;
    }
    else if(lowercaseString[i].match(/[0-9]/)){
        digits++;
    }
    else{
        Special++;
    }
}
    document.getElementById("countOutput").innerHTML=`Number of Alphabets in String = ${char} Number of Digits in String = ${digits} and Number of Special
    Charachters in String = ${Special}`;
}

const countString = () =>{
    var stringInputForCounting=document.getElementById("stringInputForCounting").value;
    var vowel=0;
    var constant=0;
    for(i=0; i<stringInputForCounting.length; i++){
        if(stringInputForCounting[i].match(/[aeiou]/)){
            vowel++;
        }
        if(stringInputForCounting[i].match(/[a-z]/)){
            constant++;
        }
    }
    document.getElementById("stringCountOutPut").innerHTML=`Vowel = ${vowel} Constant = ${constant}`;
}

const countWords = () =>{
    var countWordsInput=document.getElementById("countWordsInput").value;
    var words=1;
    while(countWordsInput.match("  ")){
        countWordsInput=countWordsInput.replace("  "," ")
    }
    for(let i=1; i<countWordsInput.length-1; i++){
        if(countWordsInput.slice(i,i+1)==" "){
            words++;
        }
    }
    document.getElementById("wordsOutput").innerHTML=`Total Words = ${words}`;
}

const reverseString = () =>{
    var reverseStringInput=document.getElementById("reverseStringInput").value;
    var reverse="";
    for(i=reverseStringInput.length-1; i>=0; i--){
        reverse +=reverseStringInput[i];
    }
    document.getElementById("reverseStringOutput").innerHTML=`Reverse String = ${reverse}`;
}

const checkPalindrome = () =>{
    var palindromeInput=document.getElementById("palindromeInput").value;
    var reversePalindrome="";
    for(i=palindromeInput.length-1; i>=0; i--){
        reversePalindrome +=palindromeInput[i];
    }
    if(palindromeInput==reversePalindrome){
        document.getElementById("palindromeOutPut").innerHTML=`${palindromeInput} is Palindrome Word`;
    }
    else
    {
        document.getElementById("palindromeOutPut").innerHTML=`${palindromeInput} is Palindrome not Word`;
    }
}

const reverseWords = () =>{
    var stringWordReverseInput=document.getElementById("stringWordReverseInput").value;

}

const checkIndex = () =>{
    var inputString=document.getElementById("inputString").value;
    var inputChar=document.getElementById("inputChar").value;
    var charIndex=inputString.indexOf(inputChar);
    document.getElementById("stringOutput").innerHTML=`First Occurance of Character ${inputChar} is at ${charIndex} index`;
}

const lastCharIndex = () =>{
    var fullStringInput=document.getElementById("fullStringInput").value;
    var lastChar= document.getElementById("lastChar").value;
    var lastCharIndex=fullStringInput.lastIndexOf(lastChar);
    document.getElementById("lastCharIndex").innerHTML=`Last Occurance of Character ${lastChar} is at ${lastCharIndex} index`;

}

// String Handling Programs End

const arrayHandling = () =>{
    var numberOfElements=document.getElementById("numberOfElements").value;
    var arr=[];
    let t=arr;
    for(i=0; i<numberOfElements; i++){
      t[i]=prompt("Enter Array Element");
    }
    document.getElementById("arrayOutPut").innerHTML=`Array = ${t}`;
}