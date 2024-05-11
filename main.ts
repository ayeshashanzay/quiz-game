import inquirer from "inquirer";

let q1 = await inquirer.prompt(
    {
        name:"q1",
        type:"list",
        message:"Quaid-e-Azam which of the following become the governor general of pakistan?",
        choices:["Liaquat ali","G Muhammad","Kh Nazimuddin","None-of-these"]
    }
)
if (q1.q1 === "Kh Nazimuddin") {
    console.log("correct");
} else {
    console.log("incorrect ! Kh Nazimuddin ");
}

let q2 = await inquirer.prompt(
    {
        name:"q2",
        type:"list",
        message:"Pakistan nuclear test was held on which date?",
        choices:["28 May","06 September","14 August ","None of these"]
    }
)
if (q2.q2 === "28 May") {
    console.log("correct");
} else {
    console.log("incorrect ! 28 May ");
}

let q3 = await inquirer.prompt(
    {
        name:"q3",
        type:"list",
        message:"Rawat fort is situated in which province of pakistan?",
        choices:["Punjab","Balochistan","Sindh","None of these"]
    }
)

if (q3.q3 === "Punjab") {
    console.log("correct");
} else {
    console.log("incorrect ! Punjab");
}

let q4 = await inquirer.prompt(
    {
        name:"q4",
        type:"list",
        message:"What is the longest motorway of pakistan?",
        choices:["M-8","M-6","M-4","None of these"]
    }
)
if (q4.q4 === "M-8") {
    console.log("correct");
} else {
    console.log("incorrect ! M-8");
}

let q5 = await inquirer.prompt(
    {
        name:"q5",
        type:"list",
        message:"The gas used for making vegetable is ?",
        choices:["Oxygen","Carbon dioxide","Hydrogen","Nitrogen"]
    }
)
if (q5.q5 === "Hydroge") {
    console.log("correct");
} else {
    console.log("incorrect ! Hydroge");
}

let q6 = await inquirer.prompt(
    {
        name:"q6",
        type:"list",
        message:"Country that was called as Land of Rising Sun?",
        choices:["Russia","Japan","Korea","Holland"]
    }
)
if (q6.q6 === "Japan") {
    console.log("correct");
} else {
    console.log("incorrect ! Japan");
}

let q7 = await inquirer.prompt(
    {
        name:"q7",
        type:"list",
        message:"ibe-e-sina was born in?",
        choices:["Shabshan","Samarkand","Bukhara","None of these "]
    }
)
if (q7.q7 ==="Bukhara") {
    console.log("correct");
    
} else {console.log("incorrect ! Bukhara ");
}

let q8 = await inquirer.prompt(
    {
        name :"q8",
        type:"list",
        message: "The World's largest islamic country by population is ?",
        choices:["Malaysia","Indonesia","Sudan","Kazakhstan"]
    }
)
if (q8.q8 ==="Indonesia") {
    console.log("correct");
    
} else {console.log("incorrect ! Indonesia");
}


