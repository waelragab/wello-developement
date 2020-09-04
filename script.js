//Navbar to be fixed using JQuery
const nav = document.querySelector(".main-header .container nav");

$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        $('nav').addClass("nav-white")
    } else {
        $('nav').removeClass("nav-white")
    }
})

//Sidemenue
const menuBtn = document.querySelector(".menu")
const menuCloseBtn = document.querySelector(".close-btn")
const menu = document.querySelector(".toggle-menu")

menuBtn.addEventListener("click", function () {
    menu.style.width === "0px" ? menu.style.width = "60vw" : menu.style.width = "0"
})
menuCloseBtn.addEventListener("click", function () {
    menu.style.width = "0"
})
//TypeWriter Effect
class TypeWriter {
    constructor(txtElem, words, wait = 3000) {
        this.txtElem = txtElem;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.waitTime = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        //Current index of word
        const current = this.wordIndex % this.words.length;
        //Get full text of current word
        const fullTxt = this.words[current]
        //Check if deleting
        if (this.isDeleting) {
            //Remove a char
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            //Add a char
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        //Insert Txt into elem
        this.txtElem.innerHTML = `<span class="txt"> ${this.txt} </span>`;
        //Init typespeed
        let typeSpeed = 400;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        //If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = 3000;
            //Set delete
            this.isDeleting = true
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;

            //Move to next
            this.wordIndex++;
            //Pause before start typing
            typeSpeed = 500;

        }
        setTimeout(() => this.type(), typeSpeed)
    }
}
//Init when DOM load
document.addEventListener("DOMContentLoaded", init);

//Init App 

function init() {
    const txtElem = document.querySelector(".txt-type");
    const words = JSON.parse(txtElem.getAttribute('data-words'));
    const wait = txtElem.getAttribute('data-wait');
    //Init type writer
    new TypeWriter(txtElem, words, wait)
}

$(document).ready(function () {
    $('.submit').click(function (event) {
        var email = $(".email").val()   
        var name = $(".name").val()   
        var subject = $(".subject").val()
        var message = $(".message").val()
        var statusElem = $(".status");
        statusElem.empty();

        if (name.length > 5) {
            statusElem.append('<div class = "success"> Name is Valid </div>')
        } else {
            event.preventDefault();
            statusElem.append('<div class = "fail"> Name is not Valid </div>')
        }

        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            statusElem.append('<div class = "success"> Email is Valid </div>')
        } else {
            event.preventDefault();
            statusElem.append('<div class = "fail"> Email is not Valid </div>')
        }

        if (subject.length > 2) {
            statusElem.append('<div class = "success"> Subject is Valid </div>')
        } else {
            event.preventDefault();
            statusElem.append('<div class = "fail"> Subject is not Valid </div>')
        }

        if (message.length > 20) {
            statusElem.append('<div class = "success"> Message is Valid </div>')
        } else {
            event.preventDefault();
            statusElem.append('<div class = "fail"> Message is not Valid </div>')
        }

        
    })

})


// Pagination

