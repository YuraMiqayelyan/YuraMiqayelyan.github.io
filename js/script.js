var bot = document.getElementById('butn')

function element(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        bot.style.display = 'block'
    }else{
        bot.style.display  = 'none'
    }
}
window.onscroll = function(){
    element()
}

function topforce(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}




// var mini = document.getElementById('mini')
// var max = document.getElementById('max')
// var div1 = document.getElementById('div1')

// mini.onclick = function(){
//     div1.style.display = 'block'
//     max.src = this.src 
// }

// var close = document.getElementsByClassName('close')[0]

// close.onclick = function(){
//     div1.style.display = 'none'
// }