const bscrypt=require('bcrypt');

async function run()
{
const salt=await bscrypt.genSalt(10);
const hashed =await bscrypt.hash('123',salt)

const result=await bscrypt.compare('123',hashed);

console.log(salt);
console.log(hashed);
console.log(result); 
console.log('test  ');
}

run();