window.onload = () => {

    //set title
    let title = browser.i18n.getMessage('name');
    document.title = title;

    //Select current language
    browser.storage.local.get("lang").then((result) => {
        let selector = document.getElementById("langselector");
        let items = selector.getElementsByTagName("option");
        for (const item of items) {
            if (item.value == result.lang) {
                item.setAttribute("selected", "");
                break;
            }
        }
    });

    //save
    document.getElementById("save").addEventListener("click", () => {
        let selector = document.getElementById("langselector");
        browser.storage.local.set({ lang: selector.value });
        window.close();
    });
}