//product image nav 
var mainImgVar = document.getElementById("main-img");
function change_img(image){
     mainImgVar.src = image.src;
    }

// Related Items Part
let itemcards1 =document.getElementsByClassName("item-cards-1");
let rislider1 = document.getElementById("related-item-slider-1");
let buttonRight1 = document.getElementById("slide-right-1");
let buttonLeft1= document.getElementById("slide-left-1");

buttonLeft1.addEventListener("click",() => {
    rislider1.scrollLeft -= 125;
});
buttonRight1.addEventListener("click",() => {
    rislider1.scrollLeft += 125;
});
    //Auto play
    const maxScrollLeft1 = rislider1.scrollWidth - rislider1.clientWidth;
    function autoPlay1(){
        if (rislider1.scrollLeft > (maxScrollLeft1 -250)){
            rislider1.scrollLeft -= maxScrollLeft1;
        } 
        else{
            rislider1.scrollLeft += 1;
        }
    }
    let play1 = setInterval(autoPlay1,50);
    //Stop when hover
    for (let i = 0; i < itemcards1.length; i++){
        itemcards1[i].addEventListener("mouseover", () =>{
            clearInterval(play1)
        })
        itemcards1[i].addEventListener("mouseout", () =>{
        return play1 = setInterval(autoPlay1,50);
        })
    }
// Related Brands Part
let itemcards2 =document.getElementsByClassName("item-cards-2");
let rislider2 = document.getElementById("related-item-slider-2");
let buttonRight2 = document.getElementById("slide-right-2");
let buttonLeft2= document.getElementById("slide-left-2");

buttonLeft2.addEventListener("click",() => {
    rislider2.scrollLeft -= 125;
});
buttonRight2.addEventListener("click",() => {
    rislider2.scrollLeft += 125;
});

const maxScrollLeft2 = rislider2.scrollWidth - rislider2.clientWidth;

     //Auto play
    function autoPlay2(){
        if (rislider2.scrollLeft > (maxScrollLeft2 -200)){
            rislider2.scrollLeft -= maxScrollLeft2;
        } 
        else{
            rislider2.scrollLeft += 1;
        }
    }
    let play2 = setInterval(autoPlay2,50);
    //Stop when hover
    for (let i = 0; i < itemcards2.length; i++){
        itemcards2[i].addEventListener("mouseover", () =>{
            clearInterval(play2)
        })
        itemcards2[i].addEventListener("mouseout", () =>{
        return play2 = setInterval(autoPlay2,50);
        })
    }

/* Show/Hide Comment */
    const readMoreBtn3 =document.querySelector('.click-read-more-3');
        const text3 = document.querySelector('.person-show-hide-3');
        readMoreBtn3.addEventListener('click',(e)=>{
            text3.classList.toggle('show-more');
            if(readMoreBtn3.innerText === 'More Comments'){
                readMoreBtn3.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn3.innerText = 'More Comments'
            }
        });

    const readMoreBtn6 =document.querySelector('.click-read-more-6');
        const text6 = document.querySelector('.person-show-hide-6');
        readMoreBtn6.addEventListener('click',(e)=>{
            text6.classList.toggle('show-more');
            if(readMoreBtn6.innerText === 'More Comments'){
                readMoreBtn6.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn6.innerText = 'More Comments'
            }
        });

    const readMoreBtn9 =document.querySelector('.click-read-more-9');
        const text9 = document.querySelector('.person-show-hide-9');
        readMoreBtn9.addEventListener('click',(e)=>{
            text9.classList.toggle('show-more');
            if(readMoreBtn9.innerText === 'More Comments'){
                readMoreBtn9.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn9.innerText = 'More Comments'
            }
        });

    const readMoreBtn12 =document.querySelector('.click-read-more-12');
        const text12 = document.querySelector('.person-show-hide-12');
        readMoreBtn12.addEventListener('click',(e)=>{
            text12.classList.toggle('show-more');
            if(readMoreBtn12.innerText === 'More Comments'){
                readMoreBtn12.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn12.innerText = 'More Comments'
            }
        });

    const readMoreBtn15 =document.querySelector('.click-read-more-15');
        const text15 = document.querySelector('.person-show-hide-15');
        readMoreBtn15.addEventListener('click',(e)=>{
            text15.classList.toggle('show-more');
            if(readMoreBtn15.innerText === 'More Comments'){
                readMoreBtn15.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn15.innerText = 'More Comments'
            }
        });

        
// Heart-Icons
    var heartbtnvar1 = document.getElementById('heart-icon-btn-1');
    function heartIconFunct1(){
            if (heartbtnvar1.style.color =="red") {
                heartbtnvar1.style.color = "grey"
                }
            else{
                heartbtnvar1.style.color = "red"
            }
        };

    var heartbtnvar2 = document.getElementById('heart-icon-btn-2');
    function heartIconFunct2(){
            if (heartbtnvar2.style.color =="red") {
                heartbtnvar2.style.color = "grey"
                }
            else{
                heartbtnvar2.style.color = "red"
            }
        };

    var heartbtnvar3 = document.getElementById('heart-icon-btn-3');    
    function heartIconFunct3(){
        if (heartbtnvar3.style.color =="red") {
            heartbtnvar3.style.color = "grey"
            }
        else{
            heartbtnvar3.style.color = "red"
            }
        };

    var heartbtnvar4 = document.getElementById('heart-icon-btn-4');
    function heartIconFunct4(){
            if (heartbtnvar4.style.color =="red") {
                heartbtnvar4.style.color = "grey"
                }
            else{
                heartbtnvar4.style.color = "red"
            }
        };
    
    var heartbtnvar5 = document.getElementById('heart-icon-btn-5');
    function heartIconFunct5(){
            if (heartbtnvar5.style.color =="red") {
                heartbtnvar5.style.color = "grey"
                }
            else{
                heartbtnvar5.style.color = "red"
            }
        };
    
    var heartbtnvar6 = document.getElementById('heart-icon-btn-6');    
    function heartIconFunct6(){
        if (heartbtnvar6.style.color =="red") {
            heartbtnvar6.style.color = "grey"
            }
        else{
            heartbtnvar6.style.color = "red"
            }
        };

    var heartbtnvar7 = document.getElementById('heart-icon-btn-7');
    function heartIconFunct7(){
            if (heartbtnvar7.style.color =="red") {
                heartbtnvar7.style.color = "grey"
                }
            else{
                heartbtnvar7.style.color = "red"
            }
        };

    var heartbtnvar8 = document.getElementById('heart-icon-btn-8');
    function heartIconFunct8(){
            if (heartbtnvar8.style.color =="red") {
                heartbtnvar8.style.color = "grey"
                }
            else{
                heartbtnvar8.style.color = "red"
            }
        };

    var heartbtnvar9 = document.getElementById('heart-icon-btn-9');    
    function heartIconFunct9(){
        if (heartbtnvar9.style.color =="red") {
            heartbtnvar9.style.color = "grey"
            }
        else{
            heartbtnvar9.style.color = "red"
            }
        };

    var heartbtnvar10 = document.getElementById('heart-icon-btn-10');
    function heartIconFunct10(){
            if (heartbtnvar10.style.color =="red") {
                heartbtnvar10.style.color = "grey"
                }
            else{
                heartbtnvar10.style.color = "red"
            }
        };
    
    var heartbtnvar11 = document.getElementById('heart-icon-btn-11');
    function heartIconFunct11(){
            if (heartbtnvar11.style.color =="red") {
                heartbtnvar11.style.color = "grey"
                }
            else{
                heartbtnvar11.style.color = "red"
            }
        };
    
    var heartbtnvar12 = document.getElementById('heart-icon-btn-12');    
    function heartIconFunct12(){
        if (heartbtnvar12.style.color =="red") {
            heartbtnvar12.style.color = "grey"
            }
        else{
            heartbtnvar12.style.color = "red"
            }
        };
    var heartbtnvar13 = document.getElementById('heart-icon-btn-13');
    function heartIconFunct13(){
            if (heartbtnvar13.style.color =="red") {
                heartbtnvar13.style.color = "grey"
                }
            else{
                heartbtnvar13.style.color = "red"
            }
        };
        
    var heartbtnvar14 = document.getElementById('heart-icon-btn-14');
    function heartIconFunct14(){
            if (heartbtnvar14.style.color =="red") {
                heartbtnvar14.style.color = "grey"
                }
            else{
                heartbtnvar14.style.color = "red"
                }
        };
        
    var heartbtnvar15 = document.getElementById('heart-icon-btn-15');    
    function heartIconFunct15(){
        if (heartbtnvar15.style.color =="red") {
            heartbtnvar15.style.color = "grey"
            }
        else{
            heartbtnvar15.style.color = "red"
            }
        };

// Onchange config  
function productdetailchangeconfig()
{
    var ColorW = document.getElementById('white').checked;
    var ColorG = document.getElementById('gray').checked;
    var ColorB = document.getElementById('black').checked;
    var Choic1 = document.getElementById('choice-1').checked;
    var Choic2 = document.getElementById('choice-2').checked;
    var Choic3 = document.getElementById('choice-3').checked;
    if (ColorW == true && Choic1 == true)
    {
        var quanti1 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 499.99*quanti1 + "$";
        
    }
    else if (ColorW == true && Choic2 == true)
    {
        var quanti2 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 499.98*quanti2 + "$";
    }
    else if (ColorW == true && Choic3 == true)
    {
        var quanti3 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 499.97*quanti3 + "$";
    }
    else if (ColorG == true && Choic1 == true)
    {
        var quanti4 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 498.99*quanti4 + "$";
    }
    else if (ColorG == true && Choic2 == true)
    {
        var quanti5 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 498.98*quanti5 + "$";
    }
    else if (ColorG == true && Choic3 == true)
    {
        var quanti6 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 498.97*quanti6 + "$";
    }
    else if (ColorB == true && Choic1 == true)
    {
        var quanti7 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 497.99*quanti7 + "$";
    }
    else if (ColorB == true && Choic2 == true)
    {
        var quanti8 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML= 497.98*quanti8 + "$";
    }
    else
    {
        var quanti9 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 497.97*quanti9 + "$";
    }
};

function testOnChange() {
    qty = document.getElementById('item-quantity').value;
    calOnChange(qty)
}

function calOnChange(n) {
    var ColorW = document.getElementById('white').checked;
    var ColorG = document.getElementById('gray').checked;
    var ColorB = document.getElementById('black').checked;
    var Choic1 = document.getElementById('choice-1').checked;
    var Choic2 = document.getElementById('choice-2').checked;
    var Choic3 = document.getElementById('choice-3').checked;
    if (ColorW == true && Choic1 == true)
    {
        document.getElementById("the499").innerHTML = 499.99*n + "$";   
    }
    else if (ColorW == true && Choic2 == true)
    {
        document.getElementById("the499").innerHTML = 499.98*n + "$";
    }
    else if (ColorW == true && Choic3 == true)
    {
        document.getElementById("the499").innerHTML = 499.97*n + "$";
    }
    else if (ColorG == true && Choic1 == true)
    {
        document.getElementById("the499").innerHTML = 498.99*n + "$";
    }
    else if (ColorG == true && Choic2 == true)
    {
        document.getElementById("the499").innerHTML = 498.98*n + "$";
    }
    else if (ColorG == true && Choic3 == true)
    {
        document.getElementById("the499").innerHTML = 498.97*n + "$";
    }
    else if (ColorB == true && Choic1 == true)
    {
        document.getElementById("the499").innerHTML = 497.99*n + "$";
    }
    else if (ColorB == true && Choic2 == true)
    {
        document.getElementById("the499").innerHTML= 497.98*n + "$";
    }
    else
    {
        document.getElementById("the499").innerHTML = 497.97*n + "$";
    }
}

// Onclick add to cart
function productdetailaddtocart()
{
    var ColorW = document.getElementById('white').checked;
    var ColorG = document.getElementById('gray').checked;
    var ColorB = document.getElementById('black').checked;
    var Choic1 = document.getElementById('choice-1').checked;
    var Choic2 = document.getElementById('choice-2').checked;
    var Choic3 = document.getElementById('choice-3').checked;
    if (ColorW == true && Choic1 == true)
    {
        var quanti1 = document.getElementById('item-quantity').value;
        document.getElementById('the499').innerHTML = 499.99*quanti1 + "$";
        alert("Buy " + quanti1 + " item(s) with white color, choice 1 in total " + 499.99*quanti1 +" success! ");
    }
    else if (ColorW == true && Choic2 == true)
    {
        var quanti2 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 499.98*quanti2 + "$";
        alert("Buy " + quanti2 + " item(s) with white color, choice 2 in total " + 499.98*quanti2 +" success! ");
    }
    else if (ColorW == true && Choic3 == true)
    {
        var quanti3 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 499.97*quanti3 + "$";
        alert("Buy " + quanti3 + " item(s) with white color, choice 3 in total " + 499.97*quanti3 +" success! ");
    }
    else if (ColorG == true && Choic1 == true)
    {
        var quanti4 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 498.99*quanti4 + "$";
        alert("Buy " + quanti4 + " item(s) with gray color, choice 1 in total " + 498.99*quanti4 +" success! ");
    }
    else if (ColorG == true && Choic2 == true)
    {
        var quanti5 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 498.98*quanti5 + "$";
        alert("Buy " + quanti5 + " item(s) with gray color, choice 2 in total " + 498.98*quanti5 +" success! ");
    }
    else if (ColorG == true && Choic3 == true)
    {
        var quanti6 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 498.97*quanti6 + "$";
        alert("Buy " + quanti6 + " item(s) with gray color, choice 3 in total " + 498.97*quanti6 +" success! ");
    }
    else if (ColorB == true && Choic1 == true)
    {
        var quanti7 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 497.99*quanti7 + "$";
        alert("Buy " + quanti7 + " item(s) with black color, choice 1 in total " + 497.99*quanti7 +" success! ");
    }
    else if (ColorB == true && Choic2 == true)
    {
        var quanti8 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML= 497.98*quanti8 + "$";
        alert("Buy " + quanti8 + " item(s) with black color, choice 2 in total " + 497.98*quanti8 +" success! ");
    }
    else
    {
        var quanti9 = document.getElementById('item-quantity').value;
        document.getElementById("the499").innerHTML = 497.97*quanti9 + "$";
        alert("Buy " + quanti9 + " item(s) with black color, choice 3 in total " + 497.97*quanti9 +" success! ");
    }
};

//On click new comment submit

function clickrs(n){ 
    var newcomment = document.getElementById('new-comment').value;
    var submittocommentandrate = document.getElementById('submit-button'); 
    var rtg_val;
    if (n==0) {
        var rtg = document.getElementsByClassName("ratings_stars fa fa-star selected");
        rtg_val = rtg.length;
    } else {
        rtg_val = n;
    }
    alert('You have rated: ' + rtg_val + ' star and commented: ' + newcomment );

};


