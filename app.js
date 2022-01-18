shownotes();//so that after refreshing the page, the content remains as it is

//function of Adding to the storage with the add button
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt.value = "";
  shownotes();
});

//showing the notes by taking them from the local storage
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element,index){
    html += `
      <div class="notecard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">
            ${element}
          </p>
          <button onclick="deleteNote(this.id)" id="$(index)" class="btn btn-primary">
           Delete Note
          </button>
        </div>
      </div> `;
    
  }); 
  let notedon= document.getElementById("notes");
  if(notesObj.length!=0)
  {
      notedon.innerHTML=html;
  }
  else
  {
      notedon.innerHTML=`Nothing to show`;
  }
} 

//deleting the notes and clearing the storage
function deleteNote(index)
{
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}

let search= document.getElementById('searchTxt');
search.addEventListener("input",function()
{
let inputVal=search.value.toLowerCase();
let notecards=document.getElementsByClassName('notecard');
Array.from(notecards).forEach(function(element) 
{
  let cardTxt=element.getElementsByTagName("p")[0].innerText;
  if(cardTxt.includes(inputVal))//
  {
    element.style.display="block";
  }
  else
  {
    element.style.display="none";
  }
  
})
})

