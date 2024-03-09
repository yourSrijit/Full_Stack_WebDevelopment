let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data.fact );
    });
})
.catch((err)=>{
console.log('Error -',err);
})