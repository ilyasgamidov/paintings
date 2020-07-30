const accordion = (triggerSelector, blokcSelector) => {
    const triggers = document.querySelectorAll(triggerSelector),
        blocks = document.querySelectorAll(blokcSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    triggers.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active', 'active-style')) {
                triggers.forEach(btn => {
                    btn.classList.remove('active', 'active-style');   
                });
                this.classList.add('active', 'active-style');
            }
        });
    });

};

export default accordion;