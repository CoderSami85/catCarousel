//onselect of image on m and k,
//replace default img with target img

//make a selector for each image

//$('.thumbnail img') - selector for thumbnail

// .hero img  - selector for large image

//alt attribute for small img should be copied to large image onclick

//src attribute for small img should be copied to large image onclick
function handleThumbnailClicks() {
  $(".thumbnail").click(event => {
    event.preventDefault();
    //src attribute for small img should be copied to large image onclick

    const imgSrc = $(event.currentTarget)
      .find("img")
      .attr("src");
    $(".hero img").attr("src", imgSrc);
    //alt attribute for small img should be copied to large image onclick
    const imgAlt = $(event.currentTarget)
      .find("img")
      .attr("alt");
    $(".hero img").attr("alt", imgAlt);
    console.log(imgAlt);
  });
}
$(handleThumbnailClicks);
