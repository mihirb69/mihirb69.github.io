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


const dropdownItems = document.querySelectorAll('.dropdown__item')

    // 1. Select each dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    // 2. Select each button click
    dropdownButton.addEventListener('click', () =>{
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')
        
        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) =>{
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/* Delete dropdown */
const mediaQuery = matchMedia('(min-width: 1024px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')

//remove dropdown styles in mobile mode when browser resizes
const removeStyle = () =>{
    if(mediaQuery.matches){
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}
addEventListener('resize', removeStyle)})
