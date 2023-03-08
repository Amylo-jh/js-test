import _ from 'lodash'

const users = [
    { userId: '1', name: 'amylo'},
    { userId: '2', name: 'new'},
    { userId: '3', name: 'amyy'},
    { userId: '4', name: 'Evan'},
    { userId: '5', name: 'Lewis'}
]

const foundUser = _.find(users, { name: 'amyy'})
const foundUserIndex = _.findIndex(users, { name: 'amyy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'amylo'})
console.log(users)
