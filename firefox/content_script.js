let langitems = [
    "ar-sa",
    "bg-bg",
    "bs-latn-ba",
    "ca-es",
    "cs-cz",
    "da-dk",
    "de-at",
    "de-ch",
    "de-de",
    "el-gr",
    "en-au",
    "en-ca",
    "en-gb",
    "en-ie",
    "en-in",
    "en-my",
    "en-nz",
    "en-sg",
    "en-us",
    "en-za",
    "es-es",
    "es-mx",
    "et-ee",
    "eu-es",
    "fi-fi",
    "fil-ph",
    "fr-be",
    "fr-ca",
    "fr-ch",
    "fr-fr",
    "ga-ie",
    "gl-es",
    "he-il",
    "hi-in",
    "hr-hr",
    "hu-hu",
    "id-id",
    "is-is",
    "it-ch",
    "it-it",
    "ja-jp",
    "ka-ge",
    "kk-kz",
    "ko-kr",
    "lb-lu",
    "lt-lt",
    "lv-lv",
    "ms-my",
    "mt-mt",
    "nb-no",
    "nl-be",
    "nl-nl",
    "pl-pl",
    "pt-br",
    "pt-pt",
    "ro-ro",
    "ru-ru",
    "sk-sk",
    "sl-si",
    "sr-cyrl-rs",
    "sr-latn-rs",
    "sv-se",
    "th-th",
    "tr-tr",
    "uk-ua",
    "vi-vn",
    "zh-cn",
    "zh-hk",
    "zh-tw",
];

browser.storage.local.get("lang").then((result) => {

    let url = location;
    if (url.protocol == "https:" && url.hostname.endsWith(".microsoft.com")) {

        //check current language
        let currentLang = "";
        langitems.forEach(item => {
            if (url.href.startsWith(url.origin + "/" + item)) {
                currentLang = item;
            }
        });

        if (currentLang != "") {
            let langElement = document.createElement('a');
            let langName = (currentLang == "en-us") ? result.lang : "en-us";
            langElement.innerText = langName;
            langElement.style.position = "fixed";
            langElement.style.zIndex = "calc(infinity)";
            langElement.style.right = "20px";
            langElement.style.bottom = "20px";
            langElement.style.backgroundColor = "#EEEEEE";
            langElement.style.padding = "5px";
            langElement.style.border = "1px solid #555555";
            langElement.style.borderRadius = "15px";
            langElement.style.textDecoration = "none";
            langElement.style.color = "#000000";
            langElement.href = url.href.replace(url.origin + "/" + currentLang, url.origin + "/" + langName);

            document.body.appendChild(langElement);
        }
    }
});

