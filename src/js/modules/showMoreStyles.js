const showMoreStyles = (trigger, styles) => {
    const btn = document.querySelector(trigger),
        cardsStyle = document.querySelectorAll(styles);

    btn.addEventListener('click', () => {
        cardsStyle.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });   
        btn.remove(); 
    });

    
    
};

export default showMoreStyles;





