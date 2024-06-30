const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');


if ($next && $prev) {
    $next.addEventListener('click', () => {
        const items = document.querySelectorAll('.slide-item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    $prev.addEventListener('click', () => {
        const items = document.querySelectorAll('.slide-item');
        const slide = document.querySelector('.slide');
        slide.prepend(items[items.length - 1]);
    });
} else {
    console.error('One or both of the buttons (.next or .prev) not found in the DOM.');
}

//adventure
const tourDetail = document.querySelector('.tour-detail');
const tourPages = document.querySelectorAll('.tour-detail-page-item');
let currentIndex = 0;
tourDetail.addEventListener('wheel', (event) => {
    event.preventDefault();
    const deltaY = event.deltaY;
    if (deltaY > 0) {
        const tourDetailItems = document.querySelectorAll('.tour-detail-item');
        tourDetail.prepend(tourDetailItems[tourDetailItems.length - 1]);
        for(tourPage of tourPages) {
            tourPage.classList.remove('tour-page-bg')
        }
        if(currentIndex === 5) currentIndex = 0;
        else currentIndex++;
        tourPages[currentIndex].classList.add('tour-page-bg')
        
    } else {
        const tourDetailItems = document.querySelectorAll('.tour-detail-item');
        tourDetail.appendChild(tourDetailItems[0]);
        for(tourPage of tourPages) {
            tourPage.classList.remove('tour-page-bg')
        }
        if(currentIndex === 0) currentIndex = 5;
        else currentIndex--;
        tourPages[currentIndex].classList.add('tour-page-bg')
    }
});

//tour item
const tourNext = document.querySelector('.tour-next');
const tourPrev = document.querySelector('.tour-prev');
const tourItemPages = document.querySelectorAll('.tour-item-page');
let currentTourItemPageIndex= 0;
tourNext.addEventListener('click', () => {
    const tourItems = document.querySelectorAll('.tour-item-container');
    document.querySelector('.tour-item').appendChild(tourItems[0]);
    for(tourItemPage of tourItemPages){
        tourItemPage.classList.remove('white-bg');
    }
    if(currentTourItemPageIndex === 9) currentTourItemPageIndex=0;
    else currentTourItemPageIndex++;
    tourItemPages[currentTourItemPageIndex].classList.add('white-bg');
});

tourPrev.addEventListener('click', () => {
    const tourItems = document.querySelectorAll('.tour-item-container');
    document.querySelector('.tour-item').prepend(tourItems[tourItems.length - 1]);
    for(tourItemPage of tourItemPages){
        tourItemPage.classList.remove('white-bg');
    }
    if(currentTourItemPageIndex === 0) currentTourItemPageIndex = 9;
    else currentTourItemPageIndex--;
    tourItemPages[currentTourItemPageIndex].classList.add('white-bg');
});

//tour-story
const tourStoryNext = document.querySelector('.tour-story-next');
const tourStoryPrev = document.querySelector('.tour-story-prev');
const tourStoryPages = document.querySelectorAll('.tour-story-page');
let currentTourStoryPageIndex= 0;
tourStoryNext.addEventListener('click', () => {
    const tourStories = document.querySelectorAll('.tour-story-3-content-item');
    document.querySelector('.tour-story-3-content-item-container').appendChild(tourStories[0]);
    for(tourStoryPage of tourStoryPages){
        tourStoryPage.classList.remove('white-bg');
    }
    if(currentTourStoryPageIndex === tourStories.length -1) currentTourStoryPageIndex=0;
    else currentTourStoryPageIndex++;
    tourStoryPages[currentTourStoryPageIndex].classList.add('white-bg');
});

tourStoryPrev.addEventListener('click', () => {
    const tourStories = document.querySelectorAll('.tour-story-3-content-item');
    document.querySelector('.tour-story-3-content-item-container').prepend(tourStories[tourStories.length - 1]);
    for(tourStoryPage of tourStoryPages){
        tourStoryPage.classList.remove('white-bg');
    }
    if(currentTourStoryPageIndex === 0) currentTourStoryPageIndex = tourStories.length - 1;
    else currentTourStoryPageIndex--;
    tourStoryPages[currentTourStoryPageIndex].classList.add('white-bg');
});