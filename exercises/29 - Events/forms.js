const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
    console.log('you clicked it');
    const shouldChangePage = confirm(
        'This website might be malicious!, Wish to proceed?'
    );
    console.log(shouldChangePage);
    if (!shouldChangePage) {
        // window.location = event.currentTarget.href;
        event.preventDefault();
    }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    if (name.includes('chad')) {
        alert('sorry bro');
        event.preventDefault();
    }
});

function logEvent() {
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

const pic = document.querySelector('.nice');

function handlePhotoClick(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        console.log('You clicked the photo');
    }
}
pic.addEventListener('click', handlePhotoClick);
pic.addEventListener('keyup', handlePhotoClick);

// const div = document.querySelector('.divi');

// div.addEventListener('click', function () {
//     console.log('you clicked it ;)');
// });
