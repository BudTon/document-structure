const a = document.querySelectorAll('a');
let indexRemove;

for (let i = 1; i < a.length; i++) {
    a[i].href = '#';
    a[i].addEventListener('click', () => {
        if (indexRemove > 0) {
            const removeHint = a[indexRemove].getElementsByTagName('div');
            removeHint[0].remove();          
        };
        let leftHint = a[i].offsetLeft;
        let topHint = a[i].offsetTop - 50;        
        const hint = document.createElement('div');
        hint.className = "tooltip tooltip_active";
        hint.style = `left: ${leftHint}px; top: ${topHint}px`;
        hint.textContent = `${a[i].title}`;
        a[i].appendChild(hint);
        indexRemove = i;
    });
};
