var convertBtn = document.querySelector('#btn');
var URLinput = document.querySelector('#VideId');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
function sendURL(URL) {
    window.location.href = `https://rocky-sierra-89381.herokuapp.com/download?URL=${URL}`;
}