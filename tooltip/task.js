const a = document.querySelectorAll('a');
let textHint;

for (let i = 0; i < a.length; i++) {
    a[i].href = '#';
    a[i].addEventListener('click', () => {
        let removeHint = document.getElementsByClassName('tooltip');
        if (a[i].title === textHint) {
            removeHint[0].classList.toggle('tooltip_active');
        } else {
            if (removeHint.length > 0) {
                removeHint[0].remove();
            };
            let leftHint = a[i].offsetLeft;
            let topHint = a[i].offsetTop - 50;
            textHint = a[i].title;
            a[i].insertAdjacentHTML('afterEnd',
                `<div class="tooltip tooltip_active" style="left: ${leftHint}px; top: ${topHint}px">
                    ${textHint}
                </div>`);
        };
    });
};
