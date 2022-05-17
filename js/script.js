const container=document.querySelector('.container');
for(i=0;i<256;i++){
    const div=document.createElement('div');
    container.appendChild(div);
}

const childDivs=document.querySelectorAll('.container div');
childDivs.forEach((child) => {
    child.addEventListener('mouseover', function(e) {
        e.target.style.background='blue';
    });
});

