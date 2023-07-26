

var closeBtn = document.getElementById('closeBtn')
var nextBtn = document.getElementById('nextBtn')
var prevBtn = document.getElementById('prevBtn')
var sliderContainer = document.getElementById('sliderContainer')
sliderContainer.style.display='none'
var allImgs = Array.from(document.querySelectorAll('.item img'))
var imgContainer = document.getElementById('imgContainer')


var index;
for(var i=0;i<allImgs.length;i++){
    allImgs[i].addEventListener('click',function(e){
        var imgSrc = e.target.getAttribute('src')
        // console.log(e.target.src)
        imgContainer.style.backgroundImage = `url(${imgSrc})`
        showSlider()
        var currentIndex = allImgs.indexOf(e.target)
        console.log(currentIndex)
        index = currentIndex
    })
}




closeBtn.addEventListener('click',colseImg)

nextBtn.addEventListener('click',function(e){
    e.stopPropagation()
    nextImg()
})
prevBtn.addEventListener('click',function(e){
    e.stopPropagation()
    prevImg()
})




function colseImg(){
    hideSlider()
}
function hideSlider(){
    sliderContainer.style.display='none'
}

function showSlider(){
    sliderContainer.style.display='flex'
}

function nextImg(){
    index++
    if(index >= allImgs.length){
        index = 0
    }
    console.log(index)
    var imgSrc =allImgs[index].getAttribute('src')
    imgContainer.style.backgroundImage = `url(${imgSrc})`
    showSlider()

}

function prevImg(){
    index--
    if(index < 0){
        index = allImgs.length-1
    }
    console.log(index)
    var imgSrc =allImgs[index].getAttribute('src')
    imgContainer.style.backgroundImage = `url(${imgSrc})`
    showSlider()

}


sliderContainer.addEventListener('click',function(){
    hideSlider()
})



document.addEventListener('keyup',function(e){
    console.log(e.key)
    if(e.key == "ArrowRight"){
        nextImg()
    }
    if(e.key == "ArrowLeft")
    {
        prevImg()
    }
    if(e.key == "Escape")
    {
        hideSlider()
    }
})



