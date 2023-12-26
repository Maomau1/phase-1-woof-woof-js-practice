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
    dogSpan.addEventListener('click',handleClick)

    const img =document.createElement('img')
    const h2 =document.createElement('h2')
    const button =document.createElement('button')

    function handleClick(e){
        //grab the dog info container
        const dogInfo=document.querySelector('#dog-info')
        //empty dog info container
        while(dogInfo.firstChild){
        dogInfo.removeChild(dogInfo.firstChild)}
        //put together dog details
        //console.log(dog.name)
        img.src=dog.image
        h2.textContent=dog.name
        button.textContent=(dog.isGoodDog?"Good Dog!":"Bad Dog!")
        
        dogInfo.append(img,h2,button)
    }
    
    button.addEventListener('click',toggle)

    function toggle(){
        fetch(`http://127.0.0.1:3000/pups/${dog.id}`,{
            method:"PATCH",
            headers:{'Content-Type':"application/JSON"},
            body: JSON.stringify({isGoodDog:!dog.isGoodDog})
        })
        .then((r)=>r.json())
        .then((data)=>console.log(data))

    }

});
}

})