import random from './getRandom'

const a = random()

console.log(a)

if(a === 0)
{
    console.log('a is 0')
}
else if(a === 2)
{
    console.log('a is 2')
}
else
{
    console.log('rest...')
}