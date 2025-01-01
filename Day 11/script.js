

document.getElementById('mybtn1').onclick = (()=> alert('Using DOM'))
document.getElementById('mybtn2').ondblclick = (()=> alert('Using DOM'))

document.getElementById("mybtn3").addEventListener("click", () => {
    alert("using addEvenetListener")
})

document.getElementById("mybtn4").addEventListener("dblclick", () => {
    alert("using addEvenetListener")
})