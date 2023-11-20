const icons = document.querySelectorAll(".sec-1 .container .media i");
const icons2 = document.querySelectorAll(".sec-3 .container .media div");
const headings = document.querySelectorAll(":where(.sec-1,.sec-2,.sec-3) h2");

ScrollReveal().reveal(
    '.img-con',
    {
        distance: '100px',
        origin: 'left',
        reset: true,
    }
);

ScrollReveal().reveal(
    '#paragraph',
    {
        distance: '100px',
        origin: 'bottom',
        reset: true,
    }
);

let dl = 0;
icons.forEach(function(e) {

    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'bottom',
            delay: dl,
            reset: true,
        }
    );
    dl += 100
});

for (let i = 1; i < 2; ++i) {
    ScrollReveal().reveal(
        `.sec-${i} .container .img-con`,
        {
            distance: '100px',
            origin: 'top',
            reset: true,
        }
    );
}

dl = 0
icons2.forEach(function (e){
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'left',
            delay: dl,
            reset: true,
        }
    );
    dl += 100
});

headings.forEach(function (e) {
    ScrollReveal().reveal(
        e,
        {
            distance: '100px',
            origin: 'left',
            reset: true,
        }
    );
});