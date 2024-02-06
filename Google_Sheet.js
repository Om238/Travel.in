const scriptURL ='https://script.google.com/macros/s/AKfycbw6c1ivYDeKHuhrQv-8Zry9U8WDEVcZTcyLF1ZLat7gsu0WHi5P-25ihmSmly_8kyfr/exec'
const form = document.forms['contact-form']
form.addEventListener('submit',e =>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST',body: new FormData(form)})
    .then(response => alert("Thank you! to visiting Apna Travel.We contact you shortly."))
    .then(() =>{window.location.reload();})
    .catch(error => console.error('Error!',error.message))
})