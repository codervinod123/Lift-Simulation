// const floorInput=document.getElementById('floor');
// const liftInput=document.getElementById('lift');
// const submitBTN=document.getElementById('submit');

// // area

// const inputArea=document.getElementsByClassName('input_area');
// const outputArea=document.getElementsByClassName('output_area');
// const liftArea=document.getElementsByClassName('building');

// // input data;

// let floor=0;
// let lift=0;
// let freeLift=[];
// let movingLift=[];
// let queue=[];
// let moving=false;


// floorInput.addEventListener('change',(e)=>{
//     floor=e.target.value;
//     let screensize=window.innerWidth;
//     if(floor<0 || floor>100)
//     {
//         alert(`You have entered ${floor} please enter between range`);
//         floorInput.value='5';
//         floor=floorInput.value;
//         floorInput.focus();
//     }
//     console.log(floor);
// });

// liftInput.addEventListener('change',(e)=>{
//     let screensize=window.innerWidth;
//     lift=e.target.value;
//     if(lift<0 || lift>15)
//     {
//         alert(`You Have entered ${lift} please enter between range`);
//         liftInput.value='5';
//         floorInput.focus();
//         lift=floorInput.value;
//     }

//     for(let i=0;i<lift;i++)
//     {
//         freeLift.push(i);
//     }
// })


// function generateBuilding(){
//     let floorHTML="";
//     for(let i=floor-1;i>=0;i--)
//     {
//          floorHTML+=`
          
//              <div class="floor" id="floor${i}">
//                  <div class="lift-buttons">
//                      ${
//                         i===floor-1 ?
//                         `<button id="down" class="lift-button move" data-btn-floor="${i}">Down</button>`:""
//                      }

//                      ${
//                         i===0 ?
//                         `<button id="up" class="lift-button move" data-btn-floor="${i}">Up</button>`:""
//                      }

//                      ${
//                         i!==floor-1  && i!==0 ?
//                         `<button id="down" class="lift-button move" data-btn-floor="${i}">Down</button>
//                         <button id="up" class="lift-button move" data-btn-floor="${i}">Up</button>`
                        
//                         :""
//                      }

//                  </div>
//              <div>

//          `

//     }
//     liftArea[0]=innerHTML=floorHTML;
// }


// submitBTN.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log("vinod");
//     // inputArea[0].classList.add("hide");
//     // outputArea[0].classList.remove("hide");
//     generateBuilding();
  
// })






