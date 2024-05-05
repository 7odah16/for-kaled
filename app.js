function hi(){
    window.open('https://www.instagram.com/k27_academy/')
}

function smoothScroll(targetId) {
    const targetPosition = document.getElementById(targetId).offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

