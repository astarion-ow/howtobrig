/* external links open new tab */
document.addEventListener("DOMContentLoaded",()=>{
    const links = document.querySelectorAll("a");
    links.forEach(link =>{
        if (link.hostname !== window.location.hostname){
            link.setAttribute('target','_blank');
            link.setAttribute('rel','noopener noreferrer');
        }
    });
});

function showAttribution(){
    var popup = document.getElementById("attribution");
    popup.classList.toggle("show");
}

/* convert data spans to data variable values */
function populateDataValues(){
    document.querySelectorAll("[data-value]").forEach(element => {

        const path = element.dataset.value.split(".");

        let value = dataMap;

        path.forEach(key => {
            value = value[key];
        });

        element.textContent = value;

    });
};

document.addEventListener("DOMContentLoaded",() => {
    populateDataValues();
});
