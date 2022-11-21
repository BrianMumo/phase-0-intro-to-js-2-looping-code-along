// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

/*function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        const newGifts =[];
        newGifts.push(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return newGifts;
}*/

// wrapGifts(gifts);
const names = ["Ada","Bredan","Ali","Guadalupe","Ollie","Aki"];
const thankyouMsg = [];
function writeCards(names,event){
    for(let i = 0; i < names.length; i++){
        
        thankyouMsg.push(`Thank you, ${names[i]}, for the wonderful ${event} gift`);

    };
    return console.log(thankyouMsg);
};

writeCards(names,"birthday");

function countDown(){
    let countDown = 10;
    while (countDown >= 0){
        console.log(countDown);
        countDown--;
    }
    return countDown;

};

countDown();