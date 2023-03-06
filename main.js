const user = {
    name: 'amlylo',
    age: 85,
    email: 'amylose1110@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)