$(function () {
    if(bodymovin){
        bodymovin.loadAnimation({
            container : document.querySelector('.tree'),
            renderer : 'svg',//canvas, html, svg
            loop : false,
            autoplay : true,
            path: './json/tree.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.snow'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/snow.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success2'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success2.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success3'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success3.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success4'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success4.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success5'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success5.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.success6'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/success6.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.bomb'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/bomb.json'
        });
        bodymovin.loadAnimation({
            container : document.querySelector('.sparkles'),
            renderer : 'svg',//canvas, html, svg
            loop : true,
            autoplay : true,
            path: './json/sparkles.json'
        });
        bodymovin.loadAnimation({
            container: document.querySelector('.go'),
            renderer: 'svg', //canvas, html, svg
            loop: false,
            autoplay: true,
            path: './json/go.json'
        });
    }

});
let res = fetch('./json/users.json')
        .then((res) => {
            return res.json();
        })
        .then((obj) => {
            List(obj);
        });


const vm = {
    url: './img/',
    imgFile: '.png'
}

function whRdom(min, max){
    wR = Math.floor(Math.random() * (max  - min) + min);
    hR = Math.floor(Math.random() * (max  - min) + min);
}

function List(obj) {
    for(let i = 0; i < obj.length; i++){
        const inOut = obj[i].inOut;
        const allH = document.getElementById('receipt').clientHeight;
        const allW = document.getElementById('receipt').clientWidth;
        whRdom(1, 90);
        whRdom(1, 90);
        const temp = document.createElement('a');
        temp.setAttribute('href', '#');
        temp.style.top = wR+'%';
        temp.style.left = hR+'%';
        temp.innerHTML =
            '<span class="'+ obj[i].inOut +'">'+ obj[i].item +'</span>';

            // <a href="#" style="top:'+ wR+'px'+';height:'+ hR +'px'+'"></a>
            document.querySelector('#receipt').append(temp);    
    }
    click();
    click2();
    sparkles();
}

function click(){
    let ck = document.querySelector(".in");
    let succ = document.querySelectorAll(".succ");
    ck.onclick = function(){
        for(i = 0;  i < succ.length; i++){
            succ[i].classList.add('on');
        }
        // document.querySelector(".snow").classList.add('on');
        document.querySelector(".bomb").classList.remove('on');
        document.querySelector('body').classList.add('on');
        document.querySelector('.title').classList.add('on');
        document.querySelector('.timer').classList.add('on');
        clearInterval(timeStop);
    }
}



function click2(){
    let ck2 = document.querySelectorAll(".out");
    // let bomb = document.querySelectorAll(".bomb");
    for(j = 0; j< ck2.length; j++){
        ck2[j].onclick = function(){
            // document.querySelector(".snow").classList.add('on');
            document.querySelector(".bomb").classList.add('on');
        };
    }
}


function sparkles(){
    
    let sp =  document.querySelector("body");
    sp.onclick =  function(event){
        const sparkles = document.querySelector('.sparkles');
        const x = event.clientX;
        const y = event.clientY

        sparkles.style.display = 'block';
        sparkles.style.top = y - 25 +'px';
        sparkles.style.left = x - 25 +'px';
    };
}



function setTimer(){
    var time = new Date();
    var hour = String(time.getHours()).padStart(2, "0");
    var minutes = String(time.getMinutes()).padStart(2, "0");
    var seconds = String(time.getSeconds()).padStart(2, "0");
    var milliseconds = String(time.getMilliseconds()).padStart(3, "0");
    if( minutes.toString().length == 1 ) {
        minutes = "0"+minutes;
    }
    if( seconds.toString().length == 1 ) {
        seconds = "0"+seconds;
    }
    if( milliseconds.toString().length == 1 ) {
        milliseconds = "0" + milliseconds;
    }
    $(".timer").html(hour + ":" + minutes + ":"+seconds + ":" +milliseconds);
}


var timeStop = setInterval(function() {
    setTimer();
}, 10);
