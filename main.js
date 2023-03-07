import _ from 'lodash'

const user = {
    name: 'amylo',
    age: 85,
    emails: ['amylose1110@gmail.com']
}

const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('-----------')
console.log('-----------')

user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)