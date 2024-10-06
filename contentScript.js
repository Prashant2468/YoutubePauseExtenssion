let video = document.querySelector("video");

if (video) {
  document.addEventListener("visibilitychange", () => {
    console.log("Visibility changed: ", document.visibilityState); // Add this line for debugging
    if (document.visibilityState === "hidden") {
      console.log("Tab is hidden, pausing the video."); // Debugging line
      video.pause();
    } else if (document.visibilityState === "visible") {
      console.log("Tab is visible, playing the video."); // Debugging line
      video.play();
    }
  });
}
