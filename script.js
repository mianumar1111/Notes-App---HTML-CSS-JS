var createNote = document.querySelector('.createNote')
var notesContainer = document.querySelector('.notes-container')
// console.log(createNote)

function showData(){
    notesContainer.innerHTML = localStorage.getItem('notes')
}
showData()

function saveData(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}

createNote.addEventListener('click',()=>{
    var p = document.createElement('p')
    p.setAttribute('contenteditable','true')
    p.classList.add('inputbox')
    var imgTag = document.createElement('img')
    imgTag.src = 'delete.png'
    p.appendChild(imgTag)
    notesContainer.appendChild(p)
    saveData()
    // console.log(p)

})

notesContainer.addEventListener('click',(e)=>{
    // console.log(e.target.tagName)
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
        saveData()
    }else if(e.target.tagName==='P'){
        // console.log('p')
        notes = document.querySelectorAll('.inputbox')
        notes.forEach(nt => {
            nt.onkeyup = function(){
                saveData()
            }            
        });        
    }
})