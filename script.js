function opentab(tabname, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-link", "");
    }

    document.getElementById(tabname).style.display = "block";

    elmnt.className += " active-link";
}

var sidemenu;

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.right = "-200px";
}

document.addEventListener('DOMContentLoaded', (event) => {
    sidemenu = document.getElementById("sidemenu");
});

document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz33_GybIXFm-AZMEescWXg5uqT8Mbdk0n-ySYVJy4_KEAgbxbr0VBy0iEtPtnJPtth/exec'
    const form = document.getElementById('submit-to-google-sheet');
    const msg= document.getElementById('msg');
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })
})

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
       pageLanguage: 'en', layout: 
       google.translate.TranslateElement.InlineLayout.HORIZONTAL, autoDisplay: 
       false, includedLanguages: 'fr,de,es,en', gaTrack: true, gaId: 'AIzaSyDXfXePTSGe_Kdi-epMgmjjrphscuZPycc'
       }, 'google_translate_element');
 }