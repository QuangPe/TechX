document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
};

document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
};

filterSelection('all');
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName('column');
    if (c == 'all') c = '';
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], 'show');
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show');
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += ' ' + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById('myBtnContainer');
var btns = btnContainer.getElementsByClassName('btn');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}

// caroucel
var fuT = new Date('jan 1,2023 00:00:00').getTime();
setInterval(function () {
    var noW = new Date().getTime();
    var D = fuT - noW;
    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor(D / (1000 * 60 * 60));
    var minutes = Math.floor(D / (1000 * 60));
    var seconds = Math.floor(D / 1000);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}, 1000);

var Hat = new Date('December 29,2022 00:00:00').getTime();
setInterval(function () {
    var noW = new Date().getTime();
    var D = Hat - noW;
    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor(D / (1000 * 60 * 60));
    var minutes = Math.floor(D / (1000 * 60));
    var seconds = Math.floor(D / 1000);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById('days1').innerText = days;
    document.getElementById('hours1').innerText = hours;
    document.getElementById('minutes1').innerText = minutes;
    document.getElementById('seconds1').innerText = seconds;
}, 1000);

//login register
function submitEmail() {
    var username = document.getElementById('emailinput').value;
    if (!emailinput) {
        alert('Email invalid');
        return false;
    } else {
        alert('Thank you for your support!');
    }
}
