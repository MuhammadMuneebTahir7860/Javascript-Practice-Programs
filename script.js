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
    var reverseWordsString="";
    var reverseLine="";
    while(stringWordReverseInput.match("  ")){
        stringWordReverseInput=stringWordReverseInput.replace("  "," ")
    }
    for(i=stringWordReverseInput.length-1; i>=0; i--){
        if(stringWordReverseInput.slice(i,i+1) !=" "){
            reverseWordsString =stringWordReverseInput[i] + reverseWordsString;
        }
        else{
            if(reverseLine==""){
                reverseLine=reverseWordsString;
                reverseWordsString="";
            }
            else{
                reverseLine=reverseLine + " " + reverseWordsString;
                reverseWordsString= ""; 
            }
        }
    }
    reverseLine=reverseLine + " " + reverseWordsString;
    document.getElementById("stringWordReverseOutput").innerHTML=`Old String = ${stringWordReverseInput} AND Reversed String = ${reverseLine}`;  
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
    for(i=0; i<numberOfElements; i++){
      arr[i]=prompt("Enter Array Element");
    }
    document.getElementById("arrayOutPut").innerHTML=`Array = ${arr}`;
}

const findingNegative = () =>{
    var negativeInput=document.getElementById("negativeInput").value;
    var fullllllArray=[];
    var array="";
    for(i=0; i<negativeInput; i++){
        fullllllArray[i]=prompt("Enter Number");
        if(fullllllArray[i]<0){
            array =fullllllArray[i]  +  "," + array;
        }
    }
    document.getElementById("negativeOutput").innerHTML=`Array = ${fullllllArray} And Negative Array = ${array}`;
}

const sumButton = () =>{
    var sumInput=document.getElementById("sumInput").value;
    var sumArray=[];
    var sumResult=0;
    for(i=0; i<sumInput; i++){
        sumArray[i]=+prompt("Enter Number");
        sumResult = sumResult + parseFloat(sumArray[i]);
    }
    document.getElementById("sumOutput").innerHTML=`Sum of Array ${sumArray} = ${sumResult}`;
}

const maxMin = () =>{
    var maxMinInput=document.getElementById("maxMinInput").value;
    var maxMinArray=[];
    var max=0;
    var min=[];
    parseInt(min);
    for(i=0; i<maxMinInput; i++){
        maxMinArray[i]=parseInt(prompt("Enter any Number"));
        if(parseInt (maxMinArray[i])>max){
            max=parseInt(maxMinArray[i]);
        }
        min[0]=parseInt(maxMinArray[0]);
        if(parseInt(maxMinArray[i])<min){
            min=parseInt(maxMinArray[i]);
        }
    }
    document.getElementById("maxMinOutput").innerHTML=`Array = ${maxMinArray} Maximum Number = ${max} Mimum Number = ${min}`;
}

const secondLargetNumber = () =>{
    var arrayElementsInput=document.getElementById("arrayElementsInput").value;
    var elementsArray=[];
    var largest=0;
    var secondLarget=0;
    for(i=0; i<arrayElementsInput; i++){
        elementsArray[i]=parseInt(prompt("Enter any Number"));
        if(elementsArray[i]>largest){
            largest=elementsArray[i];
        }
    }
    elementsArray.splice(elementsArray.indexOf(largest),1);
    console.log(elementsArray);
    for(i=0; i<=elementsArray.length; i++){
        if(elementsArray[i]>secondLarget){
            secondLarget=elementsArray[i];
        }
    }
    document.getElementById("secondLargestOutput").innerHTML=`Second Largest Number of Array = ${secondLarget}`;
}

const checkEvenOdd = () =>{
    var numberOfElementsInput=document.getElementById("numberOfElementsInput").value;
    var totalArrayElements=[];
    var even=0;
    var odd=0;
    for(i=0; i<numberOfElementsInput; i++){
        totalArrayElements[i]=parseInt(prompt("Enter any Number"));
        if(totalArrayElements[i]%2==0){
            even++;
        }
        else{
            odd++;
        }
    }
    document.getElementById("evenOddOutput").innerHTML=`Total Even Number in Array = ${even} and Total Odd Number in Array = ${odd}`;

}

const negativPostiveCheck = () =>{
    var negativePositiveInput=document.getElementById("negativePositiveInput").value;
    var arrayFull=[];
    var negative=0;
    for(i=0; i<negativePositiveInput; i++){
        arrayFull[i]=parseInt(prompt("Enter Any Number"));
        if(arrayFull[i]<0){
            negative++;
        }
    }
    document.getElementById("negativePositiveOutput").innerHTML=`Total Negative Number = ${negative};`
}

const copyArray = () =>{
    var firstArrayInput=document.getElementById("firstArrayInput").value;
    var secondArrayInput=document.getElementById("secondArrayInput").value;
    var copyArray=[firstArrayInput,secondArrayInput];
    document.getElementById("copyArrayOutput").innerHTML=`First Array = ${firstArrayInput} And Sceond Array = ${secondArrayInput} Copy Array = ${copyArray}`;
}

const insertElement= () =>{
    var fullarrayInput=document.getElementById("fullarrayInput").value;
    var insertInput=document.getElementById("insertInput").value;
    var inputArray=[];
    var w="";
    var newFullArray=[];
    for(i=0; i<fullarrayInput.length; i++){
        if(fullarrayInput.slice(i,i+1)!=","){
            w=w+fullarrayInput[i];
        }
        else if(w!=""){
            inputArray.push(w);
            w="";
        }
    }
     inputArray.push(w);
    newFullArray=inputArray;
    newFullArray.push(insertInput);
    document.getElementById("insertOutput").innerHTML=`First Array = ${fullarrayInput} Insert Element = ${insertInput} And New Array After Insertion = ${newFullArray}`;
}

const deleteElement = () =>{
    var elementsInput=document.getElementById("elementsInput").value;
    var deleteInput=document.getElementById("deleteInput").value;
    var elementsFullArray=[];
    var h="";
    var newArrayAfterDel=[];
    for(i=0; i<elementsInput.length; i++){
        if(elementsInput.slice(i,i+1) !=","){
            h=h+elementsInput[i];
        }
        else if(h!=""){
            elementsFullArray.push(h);
            h="";
        }
    }
    elementsFullArray.push(h);
    newArrayAfterDel=elementsFullArray;
    newArrayAfterDel.splice(deleteInput,1);
    document.getElementById("afterDelOutput").innerHTML=`Position = ${deleteInput} After Deletion Array = ${newArrayAfterDel}`;
}


// Array Handling Programs End

const roundNumber = () =>{
    var numberInput=document.getElementById("numberInput1").value;
    var integerConvert=parseInt(numberInput);
    var newNumber=integerConvert + .50;
    var realAnswer=0;
    if(numberInput >= newNumber){
        realAnswer=integerConvert+1;
    }
    else{
        realAnswer=integerConvert;
    }
    document.getElementById("roundOutput").innerHTML=`Round Number = ${realAnswer}`;
}

const ceilNumber = () =>{
    var ceilNumberInput=document.getElementById("ceilNumberInput").value;
    var ceilInteger=parseInt(ceilNumberInput);
    var newCeilAnswer=0;
        if(ceilNumberInput.match(/["."]/gi)){
            newCeilAnswer=ceilInteger+1;
        }
        else{
            newCeilAnswer=ceilInteger;
        }
    document.getElementById("ceilNumberOutput").innerHTML=`Ceil Number = ${newCeilAnswer}`;
}

const floorNumber = () =>{
    var floorInput=document.getElementById("floorInput").value;
    var integerFloor=parseInt(floorInput);
    document.getElementById("floorOutput").innerHTML=`Floor Value = ${integerFloor}`;
}

// Math Methods End

const printNaturalNumbers = () =>{
    var naturalNumberInput=document.getElementById("naturalNumberInput").value;
    var naturalNumbers="";
    for(i=1; i<=naturalNumberInput; i++){
        naturalNumbers =naturalNumbers + "," + i;
    }
    document.getElementById("naturalNumberOutput").innerHTML=`${naturalNumbers}`;
}

const naturalNumberPrint = () =>{
    var InPutNaturalNumber=document.getElementById("InPutNaturalNumber").value;
    var emptyvar="";
    for(i=InPutNaturalNumber; i>=1; i--){
        emptyvar=emptyvar + "," + i;
    }
    document.getElementById("outPutNaturalNumber").innerHTML=emptyvar;
}

const printAlphabets = () =>{
    var abc="";
    var alphabetsArry= [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`]
    for(i=0; i<alphabetsArry.length; i++){
        abc= abc + "," + alphabetsArry[i];
    }
    document.getElementById("alphabestOutPut").innerHTML=abc;
}

const printEvenNumbers = () =>{
    var evenNumber="";
    for(i=1; i<=100; i++){
        if(i%2==0){
        evenNumber =evenNumber + "," +  i;
        }
    }
    document.getElementById("allEvenNumbersOutput").innerHTML=evenNumber;
}

const printOddNumbers = () =>{
    var oddNumber="";
    for(i=1; i<=100; i++){
        if(i%2 !=0){
            oddNumber = oddNumber + "," + i;
        }
    }
    document.getElementById("allOddNumbersOutput").innerHTML=oddNumber;
}