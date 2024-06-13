fetch('https://jsonplaceholder.typicode.com/photos/162')
    .then(res => res.json())
    .then(res => {
        const image = document.getElementById('imagen');
        image.src = res.url;
        //document.write(`<h1>El titulo del post ${res.id} es: ${res.title}</h1>`);
    })
    .catch(err => console.log('error: ', err));