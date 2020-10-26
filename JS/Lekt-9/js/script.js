const regform = document.querySelector('#regForm');

regform.addEventListener('submit', function(e){
    e.preventDefault()


if(!e.currentTarget['toc'].checked){
    alert('You must accept the terms and conditions')

    return false
}


    let firstName = e.currentTarget[0].value;

    let lastName = e.currentTarget.lastname.value;

    let address = e.currentTarget['address'].value;

    let user = {
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastname.value,
        address: e.currentTarget.address.value,
        roel: e.currentTarget.role.value,
    }
    console.log(user);
})