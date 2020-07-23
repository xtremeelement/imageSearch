$(function() {
    // Handler for .ready() called.
    
    
    
    
  });
  function getPhotos(){
    let query = document.querySelector(".searchField").value;
    // console.log(query);
    let imagesDiv = document.querySelector(".images");
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=25`, {
headers: {
    'Authorization': '563492ad6f9170000100000126437d6221734cbe9ae3cb4415ae4cf1'
}
}).then(res =>res.json())
.then(data => {
    // console.log(data.photos)
    let allimages = ``;
    for(let i = 0; i < data.photos.length; i++){
        // console.log(data.photos[i])
        allimages += `
            <div class="col s3 zoom">
                <a href="${data.photos[i].src.large}" target="_blank">
                    <img src="${data.photos[i].src.landscape}" class="displayImage"/>
                </a>
            </div>
        `
        imagesDiv.innerHTML = allimages;

    }
    
})
}
  
  // pexels api 563492ad6f9170000100000126437d6221734cbe9ae3cb4415ae4cf1