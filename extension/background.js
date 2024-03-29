//when the extension is first installed,
//when the extension is updated to a new version, and
//when Chrome is updated to a new version.
chrome.runtime.onInstalled.addListener(() => {
    //confirm setting
    chrome.storage.local.get("lang").then((result) => {
        if (Object.keys(result).length === 0) {
            //when setting is empty
            chrome.storage.local.set({ lang: "en-us" }).then(() => { });
        }
    });
});

//when an action icon is clicked
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create(
        {
            url: "options.html",
            active: true
        }
    );
});