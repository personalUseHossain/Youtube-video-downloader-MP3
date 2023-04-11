let input = document.getElementById("link");
let button = document.getElementById("download");
let videoTitle = document.getElementById("title");
let donwloadLink = document.getElementById("donwloadLink");
let donwloadSection = document.querySelector(".donwloadSection");

button.addEventListener("click", () => {
  let id = input.value;

  let substr = id.substring(id.indexOf("v=") + 2);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "835a27c758msh27567010ccff499p1f4002jsn3586582498bb",
      "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
    },
  };

  fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${substr}`, options)
    .then((response) => response.json())
    .then((response) => {
      let mainUrl = response.link;
      donwloadLink.href = mainUrl;
      console.log(donwloadLink);
      videoTitle.innerHTML = response.title;
      donwloadSection.style.display = "flex";
      if (videoTitle.innerHTML === "undefined") {
        videoTitle.innerHTML =
          "Video not found. Please provide valid video link";
      }
    });
});
