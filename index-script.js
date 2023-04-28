const image_holder = document.getElementsByClassName('image-holder')[0];

const image_holder_close = document.getElementById('image-holder-close')

const message = document.getElementsByClassName('message')[0]

image_holder_close.addEventListener('click', () => {
    window.location.href = "/home.html";
});

var random_number = Math.floor(Math.random() * 27);

validNumbers = [52,22,47,13,41,7,10,18,23,22,60,55,50,34,53,5,37,9,3,57,15,29,31,56,15,61]

console.log(random_number);

message.setAttribute('src', `/resources/messages/message${validNumbers[random_number]}.jpg`)
