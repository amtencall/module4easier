// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (name) {
    console.log("Good bye " + name);
  })("John");


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
 var byeSpeaker = "John"
 function speak(){
    console.log("Good Bye" + names)
   }

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
(function speak(name) {
  console.log(speakWord + " Good Bye" + name);
}) (John)

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
(function (window){
    var byeSpeaker={}
    byeSpeaker.names= "John";
    var speak="Good bye";
    byeSpeaker.sayhello = function(){
        console.log(speak + byeSpeaker.names);
    }
    window.byeSpeaker = byepeaker;

  })