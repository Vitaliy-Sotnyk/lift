/*----ChangeMenu-----*/
const menu = document.getElementById('menu');
const openMenu = document.getElementById('hamburder_checkbox');
const logoWrapper = document.getElementById('logo_wrapper');
const headerWrapper = document.getElementById('header_wrapper');
const ourWorks = document.getElementById('our_works');
const ourPortfolio = document.getElementById('our_portfolio');
const ourPartners = document.getElementById('our_partners');
const aboutUs = document.getElementById('about_us');
const contactUs = document.getElementById('contact_us');
const footerBlock = document.getElementById('footer_block');

setInterval(function() {
    /*----------changeLogo----------*/
    const logo = document.getElementById('logo');
    /*----------changeLogo----------*/
    /*----------PortfolioSliderBlock----------*/
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    /*----------PortfolioSliderBlock----------*/
    if (document.documentElement.clientWidth <= 768) {
            /*----------changeLogo----------*/
        logo.src = './image/logo/logo_lighter.png';
    } else if (document.documentElement.clientWidth > 768) {
        /*----------changeLogo----------*/
        logo.src = './image/logo/full_logo.png';
        /*----------changeLogo----------*/
        if (openMenu.checked === true) {
                logoWrapper.style.left = '20px';
                logo.style.maxHeight = '40px';
                headerWrapper.style.margin = '0 300px 0 0';
                ourWorks.style.margin = '0 320px 0 20px';
                ourPortfolio.style.margin = headerWrapper.style.margin;
                ourPartners.style.margin = ourWorks.style.margin;
                aboutUs.style.margin = ourWorks.style.margin;
                contactUs.style.margin = ourWorks.style.margin;
                footerBlock.style.margin = headerWrapper.style.margin;
                
                nextBtn.style.display = 'none';
                prevBtn.style.display = 'none';
        } else {
            logoWrapper.style.left = null;
            logo.style.maxHeight = null;

            ourWorks.style.margin = null;
            ourPartners.style.padding = null;
            aboutUs.style.padding = null;
            contactUs.style.padding = null;

            ourPortfolio.style.margin = null;
            headerWrapper.style.margin = null;
            ourPartners.style.margin = null;
            aboutUs.style.margin = null;
            contactUs.style.margin = null;
            footerBlock.style.margin = null;

            nextBtn.style.display = null;
            prevBtn.style.display = null;
        }
    }
}, 100);

function closeMenu() {
    if  (document.documentElement.clientWidth <= 768) {
        if (openMenu.checked === true) {
            menu.style.opacity = null;
            menu.style.visibility = null;
            menu.style.right = null;
            openMenu.checked = false;
        } 
}
}
/*----ChangeMenu-----*/
/*----------------------SliderHeader---------------------*/
let headerSlider = document.getElementById('header_slider');
const dots = document.getElementsByClassName('slider-dots_item');
let slideIndex = 1;
let positionChage = 0;
let pause =false;
showSlides(slideIndex);
setInterval(function() {
    if(pause === false) {
        if (slideIndex < dots.length) {
            slideIndex++;
            positionChage = 100;
        } else if (slideIndex ===dots.length) {
            slideIndex--;
            positionChage = 0;
        }
        pause = true;
        showSlides(slideIndex);
    }
}, 4000)

function currentSlide(n) {
    if (n === dots.length-1) {
        positionChage = 0;
    } else if (n === dots.length) {
        positionChage = 100;
    }
    showSlides(slideIndex = n);
}

function showSlides(n) {
    pause = true;
    setTimeout(function() {
        pause = false;
    }, 8000)
    if (n > dots.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = dots.length;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' ' + 'active', '');
    }
   headerSlider.style.transform = `translate(-${positionChage}%)`;
   dots[slideIndex-1].className += ' ' + 'active';
}
/*----------------------SliderHeader---------------------*/


/*----------------------Works_blocks---------------------*/

const projectChb = ourWorks.querySelectorAll('input[type=checkbox]')
const projectBlc = document.querySelectorAll('.project');
const worksWrapper = document.getElementById('works_wrapper')
for (let i = 0; i < projectChb.length; i++) {
    projectChb[i].addEventListener('click', () => {
        if (document.documentElement.clientWidth <= 768) {
            if ( projectChb[i].checked === true) {
                projectBlc[i].style.position ='relative';
                projectBlc[i].style.height = 'auto';
                projectBlc[i].style.width = 100 + '%';
                projectBlc[i].style.zIndex = '10';
            } else {
                projectBlc[i].style.height = null;
                projectBlc[i].style.width = null;
                projectBlc[i].style.zIndex = null;
                projectBlc[i].style.position = null;
            }
        } else {
            worksWrapper.scrollIntoView({block: "start", behavior: "smooth"});  
            if ( projectChb[i].checked === true) {
                projectBlc[i].style.position ='absolute';
                projectBlc[i].style.height = 'auto';
                projectBlc[i].style.width = 100 +'%';
                projectBlc[i].style.zIndex = '10';
            } else {
                projectBlc[i].style.height = null;
                projectBlc[i].style.width = null;
                projectBlc[i].style.zIndex = null;
                projectBlc[i].style.position = null;
            }
        }

    })
}
/*----------------------Works_blocks---------------------*/


/*----------------------Portfolio_Slider---------------------*/
let count = 0;
let width;
let slidestoShow;
const items = document.querySelectorAll('.portfolio_track img');
const sliderLine= document.querySelector('.portfolio_track');

function init() {
    width = document.querySelector('.portfolio_slider').offsetWidth;
    sliderLine.style.width = width*items.length/slidestoShow + 'px';
    items.forEach(item => {
        item.style.width = `${width}px`;
        item.style.height= 'auto';
    });
    rollSliderDouble();
    if (document.documentElement.clientWidth <= 768) {
        slidestoShow = 1;
        items.forEach(item => {
            item.style.maxWidth = '100%';
        });
    } else {
        slidestoShow = 2;
        items.forEach(item => {
            item.style.maxWidth = null;
        });
    }
}
window.addEventListener('resize', init);
init();

document.querySelector('.next').addEventListener('click', () =>{
    
    count++;

    if (document.documentElement.clientWidth > 768) {
        if (items.length % 2 === 0) {
            if (count > (items.length - 1) / slidestoShow) {
                count = 0;
            } 
            rollSliderDouble();
        } else {
            if (count > (items.length - 1) / slidestoShow) {
                count = 0;
            } 
            if (count < (items.length - 1) / slidestoShow) {
                rollSliderDouble();
            } else if (count === (items.length - 1) / slidestoShow) {
                rollSliderOnce();
            }
        }
    } else {
        if (count > items.length - 1) {
            count = 0;
        } 
        rollSliderDouble();
    }
});
document.querySelector('.prev').addEventListener('click', () => {

    count--;
    
    if (document.documentElement.clientWidth > 768) {
        if (items.length % 2 === 0) {
            if (count < 0) {
                count = items.length / slidestoShow - 1;
            }
            rollSliderDouble();
        } else {
            if (count < 0) {
                count = (items.length-1) / slidestoShow;
            }
            if (count > 0) {
                rollSliderOnce();
            } else if (count === 0) {
                rollSliderDouble();
            }    
        }
    } else {
        if (count < 0) {
            count = items.length / slidestoShow - 1;
        }
        rollSliderDouble();
    }
});

function rollSliderDouble() {
    sliderLine.style.transform = `translate(-${count*width}px)`;
}
function rollSliderOnce() {
    sliderLine.style.transform = `translate(-${count*width-width / slidestoShow}px)`;
}

const imgClose = document.createElement('img');
const fullScreenDiv = document.createElement('div');
let imageIndex = 1;
let posTop;

function scrollScreen() {
    posTop = window.pageYOffset;
}
window.addEventListener('scroll', scrollScreen);

function noScroll() {
    window.scrollTo(0, posTop);
}

let statusImg = false;

function groweImage(n) {
    if  (document.documentElement.clientWidth > 768) {
        if (fullScreenDiv.style.position !== true) {
            if (statusImg === false) {
                showImage(imageIndex = n); 
                statusImg = !statusImg;
            } 
            imgClose.onclick = function() {
            imgClose.remove();
            fullScreenDiv.innerHTML = '';
            fullScreenDiv.remove();
            window.removeEventListener('scroll', noScroll);
            window.addEventListener('scroll', scrollScreen);
            return statusImg = !statusImg;
            };
        }
    }
}

function showImage(n) {
    
    window.addEventListener('scroll', noScroll);
    window.removeEventListener('scroll', scrollScreen);

    const imageClone = items[imageIndex-1].cloneNode(true);

    fullScreenDiv.classList.add('fullScreenImg');
    ourPortfolio.appendChild(fullScreenDiv);

    fullScreenDiv.style.top = `${posTop}px`;

    fullScreenDiv.style.backgroundColor = 'rgba(77, 77, 77, 0.5)';
    fullScreenDiv.style.display = 'flex';
    fullScreenDiv.style.alignItems = 'center';
    fullScreenDiv.style.justifyContent = 'center';
    fullScreenDiv.style.position = 'absolute';
    fullScreenDiv.style.height = '100%';
    fullScreenDiv.style.width = '100%';
    fullScreenDiv.style.zIndex = '999';
    fullScreenDiv.appendChild(imageClone);
    imageClone.style.maxHeight ='90vh';
    imageClone.style.width = 'auto';
    
    fullScreenDiv.appendChild(imgClose);
    imgClose.classList.add('imgClose');
    imgClose.src = './image/cancel.png'
    imgClose.style.zIndex = '3';
    imgClose.style.height ='40px';
    imgClose.style.width ='40px';
    imgClose.style.position = 'absolute';
    imgClose.style.right = '10px';
    imgClose.style.top ='10px';
    imgClose.style.opacity = '.85';
}

/*----------------------Portfolio_Slider---------------------*/


/*----------------------Map---------------------*/
const map = L.map('map').setView([49.79544825178601, 24.063038396420254], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.79544825178601, 24.063038396420254]).addTo(map)
    .bindPopup('Знайдіть нас тут')
    .openPopup();
/*----------------------Map---------------------*/