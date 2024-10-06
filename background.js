chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    console.log("Tab activated: ", tab.url); // Debugging line
    if (tab.url.includes("youtube.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          const video = document.querySelector("video");
          if (video) {
            video.play();
          }
        },
      });
    }
  });
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  console.log("Window focus changed: ", windowId); // Debugging line
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url.includes("youtube.com")) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: () => {
            const video = document.querySelector("video");
            if (video) {
              video.pause();
            }
          },
        });
      }
    });
  }
});
