const addBtn = document.querySelector(".addBtn");
const subMain = document.querySelector(".subMain");

addBtn.addEventListener("click",addNote);
function addNote(){
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
<div class="tool">
    <i class="save fas fa-save"></i>
    <i class="ttrash fas fa-trash-can"></i>
</div>
<textarea ></textarea>
    `;
    subMain.appendChild(note);
}