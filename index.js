function sendClick() {

    let name = document.getElementById("name")
    let password = document.getElementById("password")
    let email = document.getElementById("email")
    let address = document.getElementById("address")

    // empty inputs ?
    if ((!name.value) || (!password.value) || (!email.value) || (!address.value)) { alert('One of the inputs is empty') }
    // 



    // 8 characters in password ?
    if (password.value.length < 8) { alert('The password has less than 8 characters') }

    //characters, numbers and capital letters ?    
    if (!password.value.match(/[A-Z]/g) || (!password.value.match(/[0-9]/g))) { alert('The password must be a combination of charatacters , numbers and at least a capital letter') }


}

function resetClick() {
    let name = document.getElementById("name")
    let password = document.getElementById("password")
    let email = document.getElementById("email")
    let comment = document.getElementById("comment")
    let address = document.getElementById("address")
    name.value = ""
    address.value = ""
    email.value = ""
    password.value = ""
    comment.value = ""

}