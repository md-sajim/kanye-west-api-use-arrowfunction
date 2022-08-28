document.getElementById("btn").addEventListener("click", function () {
    fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(json => kenyeApi(json))
        const  kenyeApi = text =>{
            const p = document.getElementById("p")
            p.innerText = text.quote;
            

        }
})
