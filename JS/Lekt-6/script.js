const user = {
    firstName: 'Anthony',
    lastName: 'Norman',
    age: 49,
    address: {
        street: 'Högmoravägen',
        nr: 70,
        ZipCode: '13836',
        city: 'Älta'
    },
    phoneNumbers:[
        '555-3335556',
        '555-3366656'
    ],
    isActive: true
}

let key = 'age';
console.log(user.firstName);
console.log(user.lastName);
console.log(user.address);
console.log(user[key]);

console.log(user['lastName']);

console.log(`Användaren heter ${user.firstName} och bor i  ${user.address.city}`);

for (let i = 0; i < 5; i++) {
    console.log(i);

}