/**
 * Add on scroll listener.
 */
const addOnScrollListener = () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');

    const headerHeight = mainNav.clientHeight;

    /* Adds event listener to the window. */
    window.addEventListener('scroll', () => {
        const currentTop = document.body.getBoundingClientRect().top * -1;

        /* Scrolling Up */
        if ( currentTop < scrollPos) {
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
                return;
            }

            mainNav.classList.remove('is-visible', 'is-fixed');
            return;
        }

        /* Scrolling Down */
        mainNav.classList.remove('is-visible');
        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
            mainNav.classList.add('is-fixed');
        }

        scrollPos = currentTop;
    });
}

export default addOnScrollListener;
