const script1 = document.createElement('script');
script1.type = 'text/javascript';
script1.text = `
    atOptions = {
        'key': '391a7c454c7632fa62a39c1549db1f6d',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
    };
`;
document.body.appendChild(script1);

const script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.src = '//trashyepochabsorbing.com/391a7c454c7632fa62a39c1549db1f6d/invoke.js';
script2.async = true;
document.body.appendChild(script2);
