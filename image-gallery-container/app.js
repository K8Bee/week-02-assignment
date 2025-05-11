// console.info("Hello World");

// images data (array of objects):
const imagesArray = [
  {
    url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Two dogs running together freely, down a countryside dirt track.",
    className: "tImage",
    idName: "fImage",
    // width: 90px,
    // height: ,
    // thumbnailSrc: ,
    // fullscreenSrc: ,
    // srcSet: ,
  },
  {
    url: "https://images.unsplash.com/photo-1558929996-da64ba858215?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Two dogs both looking up eagerly at something unknown, on a sunny day.",
    className: "tImage",
    idName: "fImage",
  },
  {
    url: "https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Two corgis sat side by side on a beach, happily looking up at photographer.",
    className: "tImage",
    idName: "fImage",
  },
  {
    url: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A dog posed as if pausing to think whilst reading a magazine with dog images, wearing owner's glasses.",
    className: "tImage",
    idName: "fImage",
  },
  {
    url: "https://images.unsplash.com/photo-1505623547966-8af2af3515ac?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Two dogs swimming side by side, one is retrieving a large stick.",
    className: "tImage",
    idName: "fImage",
  },
];
// console.log(imagesArray);
//todo - select your image containers from the DOM (also appended the img elements-ish)
// https://medium.com/swlh/selecting-elements-in-the-dom-with-javascript-dc194a33e603
// const thumbnailContainer = document.querySelector("thumbnail-container");
// const thumbnailImage = document.createElement("img");
// thumbnailImage.src = "url?";
// thumbnailContainer.appendChild(thumbnailImage);

// const fullscreenContainer = document.querySelector("fullscreen-container");
// const fullscreenImage = document.createElement("img");
// fullscreenImage.src = "url?";
// fullscreenContainer.appendChild(fullscreenImage);
const thumbnailContainer = document.querySelector("thumbnail-container");
const fullscreenContainer = document.querySelector("fullscreen-container");
//todo - make a function to create the thumbnail images (have a loop in it and callback function)
function createThumbnails(imagesArray) {
  const thumbnailImage = document.createElement("img");
  thumbnailImage.src = imagesArray.url;
  thumbnailImage.alt = imagesArray.alt;
  thumbnailImage.idName = imagesArray.idName;
  thumbnailContainer.appendChild(thumbnailImage);
  thumbnailImage.addEventListener("onclick", function () {
    createFullscreenImage(img);
  });
}

//todo - create the fullscreen image
function createFullscreenImage(copiedImage) {
  fullscreenContainer.innerHTML = "";
  const fullscreenImage = document.createElement("img");
  fullscreenImage.src = thumbnailImage.src;
  fullscreenImage.alt = thumbnailImage.alt;
  fullscreenImage.idName.add("fsImage");
  fullscreenContainer.appendChild(fullscreenImage);
}
