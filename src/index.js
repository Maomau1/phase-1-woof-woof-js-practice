document.addEventListener('DOMContentLoaded',()=>{

fetch('http://127.0.0.1:3000/pups')
.then((r)=>r.json())
.then((dogs)=>handleDogs(dogs))
const dogDiv= document.querySelector('#dog-bar')

function handleDogs(dogs){
//show dogs on the DOM
//iterate over the dogs array
dogs.forEach(dog => {
    const dogSpan= document.createElement('span')
    dogDiv.append(dogSpan) //append span into dogDiv
    dogSpan.textContent=dog.name //add dog name
    //add dog card
    dogSpan.addEventListener('click',handleClick.bind(dog))
    function handleClick(e){
        //grab the dog info container
        const dogInfo=document.querySelector('#dog-info')
        //empty dog info container
        while(dogInfo.firstChild){
        dogInfo.removeChild(dogInfo.firstChild)}
        //put together dog details
        console.log(dog.name)
        const img =document.createElement('img')
        img.src=dog.image
        const h2 =document.createElement('h2')
        h2.textContent=dog.name
        const button =document.createElement('button')
        button.textContent="Good Dog!"
        
        dogInfo.append(img,h2,button)
    }
});
}

})