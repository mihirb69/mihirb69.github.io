//Logo to keep playing when refreshing
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');

    if (video) {
        const savedTime = localStorage.getItem('videoTime');
        if (savedTime) {
            video.currentTime = parseFloat(savedTime);
        }

        video.addEventListener('timeupdate', function() {
            localStorage.setItem('videoTime', video.currentTime);
        });

        video.addEventListener('ended', function() {
            localStorage.removeItem('videoTime');
        });

        video.muted = true;
        video.play().catch(error => {
            console.log('Autoplay was prevented or video failed to play:', error);
        });
    } else {
        console.log('Video element not found.');
    }

    // Menu show/hide
    const navMenu = document.getElementById('nav_menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });

    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });

    // Search show/hide
    const search = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    const searchClose = document.getElementById('search-close');

    searchBtn.addEventListener('click', () => {
        search.classList.add('show-search');
    });

    searchClose.addEventListener('click', () => {
        search.classList.remove('show-search');
    });

//Dropdown
const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    //Select each button click
    dropdownButton.addEventListener('click', () =>{
        const showDropdown = document.querySelector('.show-dropdown')
        
        toggleItem(item)

        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})

//display the dropdown
const toggleItem = (item) =>{
    const dropdownContainer = item.querySelector('.dropdown__container')

    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/* Delete dropdown */
const mediaQuery = matchMedia('(min-width: 1024px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')

//remove in mobile mode when resizing
const removeStyle = () =>{
    if(mediaQuery.matches){
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}
addEventListener('resize', removeStyle)})

//best selling slider
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})