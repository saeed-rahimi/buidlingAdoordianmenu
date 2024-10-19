
"use strict"
document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.querySelector('.accordion');


    accordion.addEventListener('click', function (e) {
        if (e.target.classList.contains('accordion-header')) {
          
            const header = e.target;
            const content = header.nextElementSibling;

           
            const allHeaders = accordion.querySelectorAll('.accordion-header');
            allHeaders.forEach(hdr => {
                const otherContent = hdr.nextElementSibling;
                if (otherContent !== content) {
                    otherContent.style.maxHeight = '0'; 
                    otherContent.classList.remove('open'); 
                    hdr.querySelector('.indicator').textContent = '+';
                }
            });

          
            if (content.classList.contains('open')) {
                content.style.maxHeight = '0'; 
                content.classList.remove('open');
                header.querySelector('.indicator').textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.add('open'); // Add open class
                header.querySelector('.indicator').textContent = '-';
            }
        }
    });
});

