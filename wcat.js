//#!/usr/bin/env node
let fs =require("fs");
//input
let inputarr=process.argv.slice(2);
// console.log(inputarr);
//options
let optionarr=[];
let filesarr=[];
for(let i=0;i<inputarr.length;i++){
    let firstchar=inputarr[i].charAt(0);
    if(firstchar=="-"){
        optionarr.push(inputarr[i]);
    }else{
        filesarr.push(inputarr[i]);
    }

}

let isbothpresent=optionarr.includes("-b") && optionarr.includes("-n");
if(isbothpresent){
    console.log("either enter -b or -n");
    return;
}


for(let i=0;i<filesarr.length;i++){
    let ispresent=fs.existsSync(filesarr[i]);
    if(ispresent==false){
        console.log(`this ${filesarr[i]} does not exist`);
        return;
    }

}


//read file
let content= "";
for(let i=0;i<filesarr.length;i++){
    let buffercontent=fs.readFileSync(filesarr[i]);
    content+=buffercontent+"\r\n";
}
// console.log(".................................")
// console.log("content:",content);

let contentarr=content.split("\n\r");
console.log(contentarr);

//-s
let isSpresent=optionarr.includes("-s");
if(isSpresent==true){
    for(let i=1;i<contentarr.length;i++){
       if(contentarr[i]==""&&contentarr[i-1]==""){
        contentarr[i]=null;
       }else if(contentarr[i]==""&&contentarr[i-1]==null){
        contentarr[i]=null;
       }
    }
    let temparr=[];
    for(let i=0;i<contentarr.length;i++){
        if(contentarr[i]!=null){
            temparr.push(contentarr[i]);
        }     
    }
    contentarr=temparr;

}
console.log("////////////////////////////////////")
console.log(contentarr.join("\n"));

let isNpresent=optionarr.includes("-n");
if(isNpresent==true){
    for(let i=0;i<contentarr.length;i++){
        contentarr[i]=`${i+1}${contentarr[i]}`;
    }
}
console.log(contentarr.join("\n"));

let isBpresent=optionarr.includes("-b");
if(isBpresent==true){
    let counter=1;
    for(let i=0;i<contentarr.length;i++){
        if(contentarr[i]!=""){
            contentarr[i]=`${counter}${contentarr[i]}`;
            counter=counter+1;

        }
    }
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log(contentarr.join("\n"));

