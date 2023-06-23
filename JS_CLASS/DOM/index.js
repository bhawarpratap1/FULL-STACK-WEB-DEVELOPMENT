// function eventFunction(){
//     console.log('I have clicked on the document');
// }
// document.addEventListener('click', eventFunction);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//     console.log(event);
// })

// let links = document.querySelectorAll('a');
// let thirdlink = links[2];

// thirdlink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('maza aaya acha laga');
// })

// ADDING 100PARA
// const t1 = performance.now();
// for(let i= 1;i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took" + (t2-t1) + "ms");

// // Optimising a Bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;
//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took" + (t4-t3) + "ms");
