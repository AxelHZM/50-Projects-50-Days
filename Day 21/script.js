const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart (e) {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 10);
    
}


function dragOver (e) {
    e.preventDefault();
    
}


function dragEnd (e) {
    this.className = 'fill';
    
}


function dragEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
    
}


function dragLeave () {
    this.className = 'empty'
}


function dragDrop (e) {
    this.className = 'empty';
    this.append(fill);
    console.log('dragdrop')
}