var src=["https://www.youtube.com/embed/sqC8xFwpzNo","https://www.youtube.com/embed/jof51nGx3Rs","https://www.youtube.com/embed/sqC8xFwpzNo","https://www.youtube.com/embed/jof51nGx3Rs","https://www.youtube.com/embed/sqC8xFwpzNo","https://www.youtube.com/embed/jof51nGx3Rs","https://www.youtube.com/embed/sqC8xFwpzNo","https://www.youtube.com/embed/jof51nGx3Rs","https://www.youtube.com/embed/sqC8xFwpzNo","https://www.youtube.com/embed/jof51nGx3Rs","https://www.youtube.com/embed/sqC8xFwpzNo","https://www.youtube.com/embed/jof51nGx3Rs"];
src.forEach((ele)=>{
    const episode=document.createElement('iframe');
    var newDiv=document.createElement('div');
    newDiv.setAttribute('class','outerDiv');
    document.body.appendChild(newDiv);
    episode.setAttribute('src',ele);
    newDiv.appendChild(episode);
})
