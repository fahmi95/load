const script1 = document.createElement('script');
script1.type = 'text/javascript';
script1.text = `
    atOptions = {
        'key': '31ea857d05687a492c2ff82c865610d6',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
    };
`;
document.body.appendChild(script1);

const script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.src = 'https://trashyepochabsorbing.com/31ea857d05687a492c2ff82c865610d6/invoke.js';
script2.async = true; // Memuat secara asynchronous
document.body.appendChild(script2);
