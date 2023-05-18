var docURL = "https://eshaaggits.github.io/#/100/Barbeque Times/17th April 11.23 P.M./",
params = [];

docURL = docURL.replace(window.location.origin, '');
if (docURL.indexOf('/#/') > -1) {
docURL = docURL.split('/#/')[1];
console.log(docURL);
if (docURL != '') {
    if (docURL[docURL.length - 1] == '/') {
    docURL = docURL.substring(0, docURL.length - 1);
    }
    params = docURL.split('/');
    console.log(params);
    document.getElementById('amount').value=params[0];
    document.getElementById('payee').value=params[1];
    document.getElementById('time').value=params[2];
}
}
