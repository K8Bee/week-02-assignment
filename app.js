// console.info("Hello World");

// images data (array of objects):
const images = [
  {
    url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "dogimage1",
  },
  {
    url: "https://images.unsplash.com/photo-1558929996-da64ba858215?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "dogimage2",
  },
  {
    url: "https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "dogimage3",
  },
  {
    url: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "dogimage4",
  },
  {
    url: "https://images.unsplash.com/photo-1505623547966-8af2af3515ac?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "dogimage5",
  },
];
// console.log(images);

// ----------------------------------------------------------------------------
//create thumbnail images:
//select image containers from the DOM:
// section id="thumbnail-container"
// section id="full-screen-container"
// function createThumbnails(arrayOfImages){

// }

// help from Luke and Val, to start forEach loop
// also used https://www.youtube.com/watch?v=K_CxaSPjd1c
// the forEach method of an array allows you to execute a provided function for every element of the array
// you can call "images.forEach" and in the "()" we can specify what action we want to perform on every image (item of the array), by writing "function"
// on a separate line, you can create the function (see below)
// images.forEach(function (item) {
//   console.log(item);
//   const img = document.createElement("img");
//   img.src = item.url;
// });

// console.log(images);
// todo create function - but what do I want it to do?
// the user clicks on the thumbnail
// then a copy of the image is created in a different container
// function

// https://javascript.plainenglish.io/how-to-create-an-img-element-with-javascript-f54ad0fda3bb
// create img element and append to thumbnail container
const thumbnailGalleryImgs = document.createElement("img");
thumbnailGalleryImgs.src =
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
document
  .getElementById("thumbnail-container")
  .appendChild(thumbnailGalleryImgs);
