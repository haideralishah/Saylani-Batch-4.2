var userName = document.getElementById('userName')
var email = document.getElementById('email')
var pass = document.getElementById('pass')


function submit() {
    var storage = localStorage.getItem("userData")
    var user = {
        name: userName.value,
        email: email.value,
        pass: 234567
    }
    if (storage == null) {
        storage = []
    } else {
        storage = JSON.parse(storage)
    }
    storage.push(user)
    console.log(storage)
    localStorage.setItem('userData', JSON.stringify(storage))
}

