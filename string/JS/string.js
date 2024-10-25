//String method
//there are 4 types of string method
//1.length method of string
 let name1 = "danial"
 let totalCount = name1.length;
console.log(totalCount);

//extraction method
 //a.charAt()
 let extractedChar = name1.charAt(2);
 console.log(extractedChar);

 //2 charCodeAt

 let extractedCharCode = name1.charCodeAt(2);
 console.log(extractedCharCode);

 //3. at

 let negativeChar = name1.at(-2)
 console.log(negativeChar);

 //4. property access
// agr is ko string mai sy koi data na mily ga to yea undefined kah dy ga
 let value = name1[4];
 console.log(value);

 
 
 
 
 //string method part 2
//extracting string parts
//slice(), substring(), substr(),

let stringMethod2 = "danial, saad,abdullah, khizar, umair, hassan";
let part1 = stringMethod2.slice(8, 12);

//agr hum is mai siraf ek value dain gy to wo us value k bad sy sari string otha k show kr dy ga
let part2 = stringMethod2.slice(8);

//or agr hum isko -neg value dain gy to wo right ki bajae left side her character otha k show kr dy ga space qoma sab kch
let part3 = stringMethod2.slice(-8);

console.log(part1);
console.log(part2);
console.log(part3);

//2.substring
//agr hum isko - neg value dain gy to substring isko nh parhy ga isko 0 treat kry ga
//baki same hai slice ki trhn
let part4 = stringMethod2.substring(8,12)
console.log(part4);

let part5 = stringMethod2.substring(-8)
console.log(part5);

//substr
//yea b slice ki trh similar hai
//is mai pehla apka index hai dusri length hai
//is mai ek index daine hai or ek length daine hai
let part6 = stringMethod2.substr(8,12)
console.log(part6);


//agr kisi string mai kisi ko upper case ya lower case krna ho totalCount
//for Upper case we use toUpperCase
//and for Lower case we loLowerCase

//to lower case
let name2 = "Smash COde";
let part7=name2.toLowerCase();
console.log(part7);


//Upper case
let part8 = name2.toUpperCase();
console.log(part8);
 

//concatenation
let text1 = "mian"
let text2 = "danial"
let fullName = text1.concat(" "+text2);
console.log(fullName)


//trim method
//yea kisi b string mai sy whitespaces ko khtam ke daita hai dlt kr daita hai 
let text3 = "       bht sari space     .";
let part9 = text3.trim();
console.log(part9);

//trimStart() yea us string sy bass start wali space ko khtm kr da ga
let part10 = text3.trimStart();
console.log(part10); 
//trimEnd()
let part11 = text3.trimEnd();
console.log(part11); 

//padStart()
//is mai humy total string ki lenth btani hoti hai k lafaz jurrny k bad string ki total kitni length ho jani chaheyea (8,word) + jo word is k start mai add krna chahty hain wo b bta dain gy
let padStartString = "Danial"
let part12 = padStartString.padStart(11,"Mian ")
console.log(part12); 


//padEnd()
//is mai b humy string ki total length bta k jo word end pay add krna hai wo bta dain gy
let part13 = padStartString.padEnd(10,"Mian")
console.log(part13); 

//repeat method
//use to make number of copies 
let repeatString = "Allah Ho Akbar . ";
let part14 = repeatString.repeat(10);
console.log(part14);

//replace method
//replace method use to replace a specified value with another value in a string
let replaceMethod = "This is paragraph and practice replace method";
let part15 = replaceMethod.replace("paragraph" , "learning");
// pehlay wo word likhna hai wo paragraph mai likha ho or " , " k bad wo word likhna hai jis sy ap usko replace krna chahty ho 
//or is mai yea bas us paragraph mai jo pehla word us ko milly ga same jis sy replace krna chhaty ho yea bas usko he replace kry ga or next kisi same word ko replace nh kry ga > paragraph mai sary same words ko change krny k liye apko replaceTextAll use krna ho ga
//  .replace(/paragraph/g , "learning") is sy case sensitive khtm ho jata hai or us paragraph mai sab milty words ko change kr daita hai 
// .replace(/paragraph/i , "learning");
console.log(part15);



//indexOf method
// kisi b word ki position locate krta hai
let indexOfmethod = "My name is Mian Danial, i am Danial"
let part16 = indexOfmethod.indexOf("Danial");
//agr isko us word ki position nh milay gi to yea -1 show kr dy ga, yea case sensitive ko b -1 mai show kr dy ga
console.log(part16);

//or agr humny last mai sy word ki index position nikalni ho to hum lastIndexOf() use kry gy
let indexOfmethodFromLast = "My name is Mian Danial, i am Danial young boy"
let part17 = indexOfmethodFromLast.lastIndexOf("Danial");
console.log(part17);
//or agr hum chahty hain k yea us line mai sy index 20 k bad sy us word ki index ki position dhundy to hum isko search word k sath digit dydy gy
//.lastIndexOf("Danial", 20)




//match method
let matchMethod = "my name is danial, and danial is a young boy";
let part18 = matchMethod.match("danial");
console.log(part18);


//include method
let includeMethod = "My name is Danial";
let includeMethodCheck = includeMethod.includes("Danial");
console.log(includeMethodCheck);
//true

//for false ans
let includeMethod1 = "My name is Danial";
let includeMethodCheck1 = includeMethod1.includes("ismail");
console.log(includeMethodCheck1);
// jo word is mai dhundna hai uska agr word capital hai to capital ge likhna hai
// yes it is case sensitive
let includeMethodCheck2 = includeMethod1.includes("danial");
console.log(includeMethodCheck2);


//startWith method
//agr humny check krna hai k kya yea string issi sy start ho rhi hai ya nh 
let startWithVar = "This is a practice JS"
let startWithVarCheck = startWithVar.startsWith("Th")
console.log(startWithVarCheck); //true
//and for false
let startWithVarCheck1 = startWithVar.startsWith("test");
console.log(startWithVarCheck1);

//endWith method
let endWithString = "This is a house";
let endWithStringCheck = endWithString.endsWith("se"); //result true
console.log(endWithStringCheck);
//agr end pay space a jaye or word same end pay match b krta ho to tab b yea false kah dy ga ku k end pay space a rhi ho gi

//let endWithString = "This is a house";
let endWithStringCheck1 = endWithString.endsWith("s",4);
console.log(endWithStringCheck1);



//JS Boxes
// 1.alert
    // 2.confirm
        // 3.prompt


//alert
//alert("clicked");


//prompt
//prompt("use for user input data");

//let userAge = prompt ("What is your age ? ")
//alert("your age is " + userAge);

//confrim box
//var confirmationBox = confirm ("are you sure to delete ?");
//alert(confirmationBox);


//promise function
function mydata () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name3 : "Danial", age : 29};
            resolve (data);
        }, 2000);
    })
}                                                    0

mydata().then( (data) => console.log("promise Function :", data) );



//ashyncronous 
//do multiple things in 1 sec
// yea cose run hoty hoy agli line ka wait nh krta agr agli line pay alert ya aisa kch timer lga ho jis mai program ko wait krna paray to yea wait nh krt ayea next line pay chala jata hai or code run hota rehta hai
console.log("Async / Start with this line")
function test1() {
    setTimeout(() => {
        console.log("Async / this is timer line 4 sec")
    }, 4000);
}

//function call
test1()
console.log("Async / end with this line")

//call back funtion
//agr kisi function ko chalny mai time hai ya
//callBack
function test2(callback) {
    setTimeout(() => {
       const data1 = { name4: "callBack function / danial" , age :23};  
       callback(data1)
    }, 4000);
};
//function callBack ko call ki
test2((data1) =>{
    console.log(data1)
});


//practice for callback funtion
function test3(callback) {
    setTimeout(() => {
        const data2 = { name5 : "callback func > tabi" , age :78}
        callback(data2)
    }, 5000);
};

//function callBack ko call ki
test3((callback) => {
    console.log(callback)
});


//again practice 
//for callback function

function test4(callback) {
    setTimeout(() => {
        const data3 = {rollNum : 39100, session : "2015-2019"}
        callback(data3)
    }, 2000);
    
}

test4((data3) =>{
    console.log(data3)
});


//promises function
function mydata1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data4 = {name6 :"promises" , age : 30};
            if (data4.age >21) {
                resolve (data4.age)
            } else {
                reject("age is not greater than 21")
            }
        },2000)
    })
}

mydata1().
then((age) => console.log("Promises function > age is", age))
.catch((error)=>console.log ("this is error2 ", error))