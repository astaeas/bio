document.querySelectorAll('.tab').forEach(tab => {

    let tabButtonsGroup = tab.querySelector('.tab-buttons'),
        tabButtons = tabButtonsGroup.querySelectorAll('.item'),
        tabContents = tab.querySelectorAll('.tab-content__item');

    function hideTabContent(a) {    
        for (let i = a; i < tabButtons.length; i++) {
            tabContents[i].classList.remove('tab-content__item_active');
            tabButtons[i].classList.remove('tab-button_active');
        }
    }

    function showTabContent(b) {    
        tabButtons[b].classList.add('tab-button_active');
        tabContents[b].classList.add('tab-content__item_active');
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            let target = event.target;
            if (target) {
                for (let i = 0; i < tabButtons.length; i++) {
                    if (target == tabButtons[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        })
    })

})


