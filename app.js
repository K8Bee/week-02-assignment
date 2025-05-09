console.info("Hello World");
// remember to console log everything at each step, to test before adding, will help avoid bugs, or hard to work out bugs
// how the website is actually working:
// two main things need to worry about are thumbnails and full-screen image


// todo there are three main tasks:
// 1st store images data
// 2nd create the thumbnail Image TrackList
// 3rd create the fullscreen images

// step 1 store your images data:
// for simplicity it might be easier to use external images, but can use local
// an array of objects (src and alt are not optional)
const images = [
    src: "url",
    // or url: "url",
    alt: "meaningful description of my image",
    // srcSet: ,
    // imgName: ,
    // width: ,
    // height: 
]
// harder version (if want two separate images for thumbnail and fullscreen(to get good enough resolution no matter size)):
// const images = [ 
// {
//     src: "url",
    // or url: "url",
    // alt: "meaningful description of my image",
    // srcSet: ,
    // imgName: ,
    // width: ,
    // height: 
// },
//   { src: "url", alt: "meaningful description of my image" },
//   { src: "url", alt: "meaningful description of my image" },
// ];

// 2nd create thumbnail images:
//  select the image containers from the DOM (html)
//  "arrayOfImages" = the parameter
function createThumbnails(arrayOfImages){
// we need a loop to create our thumbnails efficiently -- two options; forEach or "for" loop
// in the loop, thre'll be three steps (creating an image):
// 1. create dom element (img) (better to do images not in html as would have select each image)
// 2. update the attribute values to be the values of our images stored in the array (clue, might be something like (depending on which loop used); image.src = "something" / img.alt = / img.srcSet = / img.className = ) (ALSO add "img.className =" here so can style the images in css)
// 3rd append the new imgs into the thumbnail container
// 4th also want to add event listener here; why? as every image needs to have a listener, if you create it while looping it it's more efficient, might need an event handler and listenr, something like "addEventListener()" which the handler can use (you are supposed to call the largeImg funciton as part of the event, as you want the bigger img to happen when the user clicks ("function createFullscreenImage(largeimg){" is the event handler?))}
// function createThumbnails(){
// }

function createThumbnails(arrayOfImages) {
    (event handler / event listener --> img.addEventListener("click", function(){
createFullscreenImage(img)
}))
}
// 3rd create full-screen image
// "largeimage" is the parameter
function createFullscreenImage(largeImg){
    // we need to clear the current full-screen image before we add a new one
    // making it empty with " = "" "
    fullScreenContainer.innerHTML = "";
    // create a new image element
    // add a classNAme
    // set the src and alt values to be the same as the thumbnail that was clicked (as we're creating a copy)
    // the largeImg is representing the array property
    (img.src = largeImg.url)
    // appened this new image to the fullscreen container
}


// clue for (rewatch video, not sure what I was oging to write here)