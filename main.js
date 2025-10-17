let bgc=['#f5f5f5','#0d1b2a','#e8f5e9','#2e1a47','#121212']
let fgc=['#222222','#e0e1dd','#1b5e20','#f9a826','#e0e0e0']

let elmnts = document.querySelectorAll('.content')
let i = 0
setInterval(()=>{
    let bg=bgc[i]
    let fg=fgc[i]
    elmnts.forEach((ele)=>{
        ele.style.backgroundColor=bg
        ele.style.color=fg 
    })
    i=(i+1) % bgc.length
},2000)