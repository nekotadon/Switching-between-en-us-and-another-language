//when the extension is first installed,
//when the extension is updated to a new version, and
//when Chrome is updated to a new version.
browser.runtime.onInstalled.addListener(() => {
    //confirm setting
    browser.storage.local.get("lang").then((result) => {
        if (Object.keys(result).length === 0) {
            //when setting is empty
            browser.storage.local.set({ lang: "en-us" }).then(() => { });
        }
    });
});
