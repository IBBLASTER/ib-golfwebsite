gsap.to('nav', {
    backgroundColor: 'black',
    height: '90px',
    duration: 0.5,
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to('.main', {
    backgroundColor: 'black',
    scrollTrigger: {
        trigger: '.main',
        scroller: 'body',
        start: 'top -25%',
        end: 'top -70%', 
        scrub: 2,
    }

});

document.addEventListener('mousemove', (dets)=>{
    gsap.to('.cursor', {
        delay: 0.2,
        top: dets.y+'px',
        left: dets.x+'px',
    });
    gsap.to('.cursor-blur', {
        delay: 0.2,
        top: dets.y+'px',
        left: dets.x+'px',
    });
});

gsap.from('.about-sec img, .about', {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.about-sec',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 60%',
        scrub: 2
    }
});

gsap.from('.card-container .card', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.card',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 2
    }
});
gsap.from('.testimonial-container', {
    gap: '80px',
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.testimonial-container',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 2
    }
});

document.querySelector('.testimonial-container').addEventListener('mousemove', (dets) => {
    gsap.to('.testimonial-container p', {
        x: dets.x * 0.02, // --> This multiplier decreases the movement of the the thing 
        y: dets.y * 0.02, // --> This multiplier decreases the movement of the the thing 
    });
});

let list = document.querySelectorAll('li');
list.forEach(function(elem){
    elem.addEventListener('mouseenter', (dets)=>{
        gsap.to('.cursor',{
            border: '2px solid white',
            width: '50px',
            height: '50px',
            backgroundColor: 'transparent',
            delay: 0.2,
        });
    })
    elem.addEventListener('mouseleave', (dets)=>{
        gsap.to('.cursor', {
            width: '20px',
            backgroundColor: '#d7f87e',
            height: '20px',
            border: '0px solid white',
        });
    })
})


let card = document.querySelectorAll('.card');
card.forEach(function(elem){
    elem.addEventListener('mouseenter', (dets)=>{
        gsap.to('.cursor',{
            border: '2px solid white',
            width: '50px',
            height: '50px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            delay: 0.2,
        });
    })
    elem.addEventListener('mouseleave', (dets)=>{
        gsap.to('.cursor', {
            width: '20px',
            backgroundColor: '#d7f87e',
            height: '20px',
            border: '0px solid white',
        });
    })
})


let smallCard = document.querySelectorAll('.small-cards');
smallCard.forEach(function(elem){
    elem.addEventListener('mouseenter', (dets)=>{
        gsap.to('.cursor',{
            border: '2px solid white',
            width: '50px',
            height: '50px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            delay: 0.2,
        });
    })
    elem.addEventListener('mouseleave', (dets)=>{
        gsap.to('.cursor', {
            width: '20px',
            backgroundColor: '#d7f87e',
            height: '20px',
            border: '0px solid white',
        });
    })
})


let footerLinks = document.querySelectorAll('.menu h2, .menu3 h2, .ficon, .fimg');
footerLinks.forEach(function(elem){
    elem.addEventListener('mouseenter', (dets)=>{
        gsap.to('.cursor',{
            border: '2px solid white',
            width: '50px',
            height: '50px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            delay: 0.2,
        });
    })
    elem.addEventListener('mouseleave', (dets)=>{
        gsap.to('.cursor', {
            width: '20px',
            backgroundColor: '#d7f87e',
            height: '20px',
            border: '0px solid white',
        });
    })
})