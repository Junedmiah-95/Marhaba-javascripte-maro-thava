//---------------------------------------------------------------------------
//                               অধ্যায়-৫
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
//                        ৭৭ পৃষ্ঠার প্রশ্নের সমাধান
//---------------------------------------------------------------------------

/* প্রশ্নঃ ০১
 */
//সমাধানঃ
const jodi6TarAgeGelNasta = true;

if(jodi6TarAgeGelNasta ==true){
    console.log("Nasta");}
    else{("jutar bar");}

/* প্রশ্নঃ ০২
 */
//সমাধানঃ
const sucsseseLogIn = true;
if(sucsseseLogIn == true){
    console.log("Welcome");}
else{console.log("GetLoss");}

/* প্রশ্নঃ ০৩
 */
//সমাধানঃ
const run5km=true;
if(run5km==false){
    console.log ("choklate");}
else{
    console.log("drink");}

/* প্রশ্নঃ ০৪
 */
//সমাধানঃ
const getabove80marks = 80;
if(80 < 85){
    console.log("you will get Motor Bike");
}else{
    console.log("you won't");}

/* প্রশ্নঃ ০৫
 */
//সমাধানঃ
const studentMarks = 85;
if( studentMarks < 80){
    console.log("you will get Motor Bike");
}else{
    console.log("you won't");}
    
/* প্রশ্নঃ ০৬
 */
//সমাধানঃ
let tempareture = 32;
if(tempareture >= 30){
    console.log("start airconditioner");
} else {
    console.log("not");}

/* প্রশ্নঃ ০৭
 */
//সমাধানঃ

//--------------------------------------------
                  //Solve page:78
//--------------------------------------------

/* প্রশ্নঃ ০১
 */
//সমাধানঃ
let age = 18;
age = 19;
let height = 60;
height = 61;
if(age>=18 && height>=60){
    console.log("se gari telbe");
}else{
    console.log("se garite bosbe ");}

/* প্রশ্নঃ ০২
 */
//সমাধানঃ
let math = 80;
let english = 81;
if(math>=80 && english >= 85){
    console.log("he can admite");
}else
    { console.log("tuke biye dibo");}

/* প্রশ্নঃ ০৩
 */
//সমাধানঃ
let GPA = 5;
let income = 10000;
if(GPA>=5 || income>=10000)
{console.log("he get scholerShip");}else
{console.log("he won't SchoolerShip");}

/* প্রশ্নঃ ০৪
 */
//সমাধানঃ
let heisAge = 30;
let experianceYear =2;
if(heisAge >30 && experianceYear>1.5){
    console.log(" get not job");
}else{
    console.log(" get job");}

/* প্রশ্নঃ ০৫
 */
//সমাধানঃ
let egg =12;
if(egg<12){
console.log("murgi kha");
}else{
    console.log(" ruti kha");}

/* প্রশ্নঃ ০৬
 */
//সমাধানঃ
let bodytepareture = 110;
if(bodytepareture>=100){
console.log("He will go to doctor");
}else{
    console.log(" he won't need doctor");}

/* প্রশ্নঃ ০৭
 */
//সমাধানঃ
let studentsAttendence = 70;
if(studentsAttendence<=80 ){
console.log(" auto fail");
}else{
    console.log(" auto pass ");}

/* প্রশ্নঃ ০৮
 */
//সমাধানঃ
let isLoadShadding = true;
let mobileBattryEmpoty= true
if(isLoadShadding== true && mobileBattryEmpoty == true ){
console.log("you will do study ");
}else{
    console.log(" you will play vedio game");}

/* প্রশ্নঃ ০৯
 */
//সমাধানঃ
let shirtPrice = 1001;
let iscuponCode = true;
if(shirtPrice >= 1000 && iscuponCode == true ){
console.log("will get 20% discount ");
}else{
    console.log(" won't");}

//---------------------------------------------------------------------------
//                        ৮৩-৮৪ পৃষ্ঠার প্রশ্নের সমাধান
//---------------------------------------------------------------------------

/* প্রশ্নঃ ০১
 তুই নিজে দোকান খুলছিস। তোর দোকানে কেউ ৩০০০ টাকার বেশি কেনাকাটা করলে ৫% ডিস্কাউন্ট, আর ৬০০০ টাকার বেসি কেনাকাটা করলে ১৫% ডিস্কাউন্ট দিবি। যদি এক বন্ধু এসে ৪৫০০ টাকার পণ্য কিনে তবে তাকে কত টাকা দিতে হবে।*/

//সমাধানঃ
const price = 2000;
if(price>=6000){const discount = price/100*10; const pay = price-(price-discount);console.log(pay);}
else if(price>=3000){const discount = price/100*5; const pay = price-(price-discount);console.log(pay);}
else{console.log("There is No discount");}

/* প্রশ্নঃ ০২
তুই একটা রেস্টুরেন্ট চালাচ্ছস, যেখানে ১২ বছরে নিচে বচ্চাদের ফ্রি খাওয়ানো হবে এবং ৬০ বছরের ওপরের মানুষকে ৫০% ডিস্কাউন্ট দেওয়া হয়, বাকিদের পুরা টাকা দিতে হবে।*/

//সমাধানঃ
const customerAge = 15;
if(customerAge<=12){console.log("Your seleted Free for Eat");}
else if(customerAge>=60){console.log("You Are Selected for 50% Discount");}
else{console.log("You will Get your refund");}

/* প্রশ্নঃ ০৩
যদি কারো ব্যাংক একাউন্টে ব্যালেন্স ১০০০ টাকার কম হয় তাহলে তাকে বলবি, "ডিপোজিট" কর। ১০০০ থেকে ৫০০০ টাকার মধ্যে হলে বলব, "বিন্দাস লাইফ এনজয় কর" আর ৫০০০ টাকার বেশি হলে বলবি, "তুই ধনী" আমাকে বিয়ে কর।*/

//সমাধানঃ
let money = 4999;
if(money<=1000){console.log("You have to need Diposite");}
else if(money<=5000){console.log("Bindas you can enjoy your life");}
else{console.log("You are rich Man! you have to marry me");}

/* প্রশ্নঃ ০৪
একটা পরীক্ষায় যদি কোনো ছাত্রের মার্কস ৫০ এর কম হয় তাহলে  বলবি সে "fail" ৫০ থেকে ৮০ এর মধ্যে হলে বলবি "Pass" উপরে হলে */

//সমাধানঃ
let marks = 8;
if(marks<=50){console.log("Fail");}
else if(marks<=80){console.log("Pass");}
else{console.log("A+");}

/* প্রশ্নঃ ০৫
কোনো বইয়ের পৃষ্ঠাসংখ্যা ১০০ এর মধ্যে হলে বলবি "Small Book", ১০০ থেকে ৫০০ এর মধ্যে হলে বলবি "Mid-size Book", আর ৫০০এর বেশি হলে বলবি "Heart attck book"|*/

//সমাধানঃ
const bookSize =1000;
if(bookSize<=100){console.log("Small Book");}
else if(bookSize<=500){console.log("Mid-size Book");}
else{console.log("Herat attack Book");}

/* প্রশ্নঃ ০৬
একটা প্রোগ্রাম লিখ। যা চেক করবে তাপমাত্রা ০ ডিগ্রির কম হলে "Ice" ০-২০ ডিগ্রির মধ্যে হলে বলবে "Cool Cool", আর ২০ এর বেশি হলে বলবে "Hot Hot"|*/

//সমাধানঃ
const weathertempareture = 21;
if(weathertempareture<=0){console.log("Ice");
}else if(weathertempareture>=20){console.log("Cool Cool");}
else {cons0le.log("Hot Hot");}

/* প্রশ্নঃ ০৭
তোর একটা গেমিং Apps আছে। প্লেয়ারের লেভেল ১০ এর কম হলে বলবি "Novice", ১০ থেকে ৫০ এর মধ্যে হলেব বলবি "Expart", আর ৫০ এর বেশি হলে বলবি "Pro gamer"|*/

//সমাধানঃ
const level = 111;
if(level<=10){console.log("Novice");
}else if(level<=50){console.log("Expart");}
else{console.log("Pro gamer");}

/* প্রশ্নঃ ০৮
১ জন সেলসম্যানের বেতন ৫০০০ টাকা। যদি সে ১০০০০ বা তার বেশি টাকার পণ্য সেলস করতে পারে, তাহলে তাকে  ১০% হারে কমিশন প্রদান করা হবে অথবা তার বেতন থেকে ১০% বেতন কর্তন হবে।*/

//সমাধানঃ
const salary= 5000;
const sale = 1000010;
if(sale>=100000){const getcomission = sale/100*10;
     const pay = salary + getcomission;
    console.log(pay)
}else if(sale<=100000){const deduction = salary/100*5; 
    const GetSalary = salary - deduction; 
    console.log(GetSalary)}

//---------------------------------------------------------------------------
//                        ৮৬ পৃষ্ঠার প্রশ্নের সমাধান
// --------------------------------------------------------------------------

/* প্রশ্নঃ ০১
বন্ধু যদি দাওয়াত দেয়। তাইলে তার জন্মদিনে পার্টিতে যাবি আর যদি দাওয়াত না দেয়, তাকে ফ্রেন্ড লিস্ট থেকে বের করে দিবি। আর যদি দাওয়াত দিয়ে ফেলে, দাওয়াতে যাওয়ার সময় চেক করে দেখবি পকেটে টাকা আছে কিনা ,যদি ১০০০ টাকার বেশি থাকে, তাহ্অলে বন্ধুর জন্য একটজন্য একটা গিফট নিয়ে যাবি। না হয় খালি হাতে যাবি|*/

//সমাধানঃ
const isInvite = true;
const isMoney1000 = false;
if(isInvite == true){console.log(" you will go to ");
if(isMoney1000 == true){console.log("you will buy sometihing gift for your friend");}
else{console.log("you cut from your friend list");}}

else{console.log("Stay Home Alone");}

/* প্রশ্নঃ ০২
যদি তোর বাসায় মেহমান আসে, প্রথমে জিজ্ঞেস করবি, তারা চা খাবে কিনা। যদি চা খায় তাইলে জিজ্ঞেস করবি, সাথে বিস্কুট খাবে কিনা। না চাইলে বলবি, শুধু চা রেডি। আর যদি চা ও না খায় তাইলে বলবি বসে বসে স্টার জলসা দেখুন।*/

//সমাধানঃ
const চা_খাবি = false;
const বিস্কুট_খাবি = true;

if(চা_খাবি == true){console.log("হ্যা");if(চা_খাবি == false){console.log("না");}
if(বিস্কুট_খাবি == true){console.log("বিস্কুট খাবি? হ্যা");}
if(বিস্কুট_খাবি == false){console.log("বিস্কুট খাবি? না");

}else{console.log("তর চা রেডি")}
}
else{console.log("কিছুই খাবি না! তাইলে বসে বসে টেলিভিশন দেখ। ")}

/*
 প্রশ্নঃ ০৩
 তুই একটা অ্যাপ বানিয়েছিস। প্রথমে চেক করবি, ব্যবহা্রকারীর একাউন্ট এক্টিভ কিনা. যদি এক্টিভ হয়, তার সাবস্ক্রিপশন চেক করবি। যদি প্রিমিয়াম হয় তাহলে তাকে প্রিমিয়াম ফিচার দেখাবি। আর যদি না হয় তাহলে বলবি, "ফ্রি ভার্সন দেখুন"।*/ 

//সমাধানঃ
const isActiveAccount = true
const isSubscription = false

if(isActiveAccount == true){console.log("Please Show Your subscription ID");
    if(isSubscription ==  false){console.log("You Can't Enjoy Primium Version ");}
    if(isSubscription == true){console.log("You Can Enjoy Primium Version");}

else{console.log(" Dear Valueable Coustomer Please Sgi n Up first")}
}
else{console.log(" Please Watch Free Virsion")}

/*
 প্রশ্নঃ ০৪
 তোর বাসায় ফ্রিজে খবার আছে কিনা চেক করবি। যদি থাকে খাবার গরম করবি। আর যদি না থাকে, চেক করবি ফুড ডেলিভারি অ্যাপ কাজ করছে কিনা। কাজ করলে অর্ডার করবি, না হলে বলবি আজকে আমি রোজা। */

//সমাধানঃ
 const isFood = true
 const isAppWork = true
 if(isFood == true){console.log("I will Cooked my food")
 if(isFood == false){console.log("Oh No there is No Food")
    }if(isAppWork == true){console.log("Hay foodPanda I'm so hungry. I will order somthing")}
else{console.log("Today I have enogh food")}
 }
 else{console.log(" ami ajk roja")}


/*
 প্রশ্নঃ ০৫
 ধর তুই একটা পার্টি করবি, প্রথমে দেখবি পার্টিতে ১০০ জনের বেশি গেস্ট আসবে কি না। যদি আসে, তাহলে চেক করবি, সবাই গিফট আনবে কি না। যদি আনে বলবি "Let's party all night" নচেৎ বলবি "I will party with myself" */

//সমাধানঃ
const geust= 1001
const gift = true 
if(geust<=1000){console.log("NO")
    if(geust>=1000){console.log("yes")}}
else{console.log("I will party with myself")}



//---------------------------------------------------------------------------
//                        ৯০ পৃষ্ঠার প্রশ্নের সমাধান
// --------------------------------------------------------------------------

/* প্রশ্নঃ ০১
তুই নিজে দোকান খুলছিস। তোর দোকানে ৩০০০ টাকার বেশি কেনাকাটা করলে ক্যাশব্যাক ৫০০ টাকা। আর তার কম কেনাকাটা করলে ক্যাশব্যাক ০ টাক। এখন এই জিনিসটি একলাইনে লিখ। ভেরিয়েব্লের নাম হবে Cashback। আর মান সেট করবি টর্নারি অপারেটর ইউজ করে।*/

//সমাধানঃ
var cashback = 300
cashback >= 3000? console.log("500"): console.log("0")

/* প্রশ্নঃ ০২
তোর বয়স যদি ১৫-এর বেশি হয় তাহলে "Teenager" দেখাবে। আর যদি কম হয় তাহলে "Child" দেখাবে। এই জিনিসটা টর্নারি অপারেটর বযবহার করে এক লাইনে লিখ।*/

//সমাধানঃ
const Teenager =15;
Teenager >= 15? console.log("Teenager"): console.log("Child")

/* প্রশ্নঃ ০৩
যদি isLoggedIn এর মান True হয় তাহলে "Welcome Back" কে Massege দিসেবে সেট করবি। আর যদি False হয় তাহলে Please Login কে Massege হিসেবে সেট করবি।  এই জিনিসটা টর্নারি অপারেটর বযবহার করে এক লাইনে লিখ।*/

//সমাধানঃ
const isLoggedIn = false
isLoggedIn == true? console.log("Welcome Back"): console.log("Please Login")

/* প্রশ্নঃ ০৪
তোর গাড়ির তেলের ট্যাংক যদি "Full" হয়, তাহলে "Rady For Long Drive" দেখাবি। আর যদি না হয় তাহলে "Fill The Tank" দেখাবি।*/

//সমাধানঃ
const fuel = false
fuel==true? console.log("Rady For Long Drive"): console.log("Fill The Tank");

/* প্রশ্নঃ ০৫
তুই যদি পরীক্ষায় পাস করিস তাইলে "Party Time" দেখাবি। আর যদি ফেল করিস তাইলে " Next semestere serious study korbo" দেখাবি। এক লাইনে টর্নারি অপারেটর দিয়ে দেখাবি।*/

//সমাধানঃ
const ifResultPass = true
ifResultPass == true? console.log("Party Time"): console.log("Next semestere serious study korbo");

/* প্রশ্নঃ ০৬
যদি Sunny ভেরিয়েবলের মান false হয় তাহলে "Stay home" কে কনসোল লগ করবি*/

//সমাধানঃ
const Sunny= true
Sunny == false? console.log("leave home"): console.log("Stay home");

/* প্রশ্নঃ ০৭
যদি "Expensive" ভেরিয়েবলের মান false হয় তাহলে "I will buy this item" কে কনসোল লগ করবি*/
//সমাধানঃ
const Expensive = true
Expensive == false? console.log("I won't buy this item"): console.log("I will buy this item");
