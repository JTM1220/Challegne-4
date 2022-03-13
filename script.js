// let hours = document.querySelectorAll('.hour')
// let textarea = document.querySelectorAll('textarea')
// var time = function(){
//     var currentTime = moment();
//     hours.forEach(hour => {
//         let id = hour.id
//         console.log(id)
// //         if(currentTime > id ){
// //             textarea.classList.add('past');
// // //addclass to textarea (sibling)
// //         } // else if(currentTime == id){
// //         //     textarea.classList.add('present');
// //         // }
// //         //     else(currentTime > id); {
// //         //         textarea.classList.add('future');
// //         //     }
// //     })
    
// // }
// time();
let textArea = document.querySelectorAll('textarea');
var currentDay = $('currentDay');
var localtime = moment().format('MM-DD-YYYY h:mm:ss a');
var date = moment().format("MM-DD-YYYY");
var hours = $("hour");
var saveBtn = $(".saveBtn");
var hour = moment().hours();

var cT = document.querySelectorAll("textarea");
// console.log("printing ct: " + cT[2].id);
// console.log("printing ct: " + cT[3].id);
// console.log("printing ct: " + cT[4].id);
// console.log("printing ct: " + cT[5].id);

//date to display
    $("p#currentDay").append(date);
    console.log(date);

function txtArea(){
    //var currentTime = moment().format('h');
    var currentTime = 10;
    //console.log("here is the current hour: " + currentTime);
    console.log("currentTime: " + currentTime);
    // ct = 9,10,11,12,13........

    for (i = 0; i < cT.length; i ++){
        console.log("im in the loooppp!!!!");
        // console.log("currenTime: " + currentTime);
        console.log("cT[i]: " + cT[i].id);
       if (currentTime > cT[i].id){
        console.log("currentTIme is great than cT[i]");
        var update_id = $("#textarea-")
        // turn box to grey
        // change class of box to past

        // select textArea 
        
 
        // AND THEN change classArea to past
        // now you can .replace('future', 'past')

       }
    //     if (currentTime > cT[i]){
    //         textArea.classList.replace('future', 'past');
    //     }

    //     else if (currentTime < cT[i]){

    //     }
    // }

    //   else {

    //   }
    }
    
}
txtArea();





// grey -> current hour > p#i
// green -> current hour < p#id
// red -> current hour == p#id