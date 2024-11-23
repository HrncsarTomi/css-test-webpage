var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

console.dir(backdrop);

// console.log(backdrop);

// backdrop.style.display = 'block';

// console.dir(selectPlanButton);
for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; // Ez felül írná az egész class listámat.
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add("open");
        }, 10);  
    });
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';

    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove("open");
    setTimeout(function() {
        backdrop.style.display = "none";
    }, 200); 
}

toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add("open");
    }, 10);   
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log("Animation started!", event)
});

ctaButton.addEventListener('animationend', function(event) {
    console.log("Animation ended!", event)
});
