
fetcher()

async function fetcher() {
    const res = await fetch("/api/quotes")
    const data = await res.json()
    console.log(data);
    document.getElementById("ju").innerHTML = `<div>
    <h1>"${data.quote}"</h1>
    <div class="yu">
    <div class="yes"></div>
    <p>${data.author}</p>
    <div class="yes"></div>                
    </div>
    </div>
    `

}