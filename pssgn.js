/*JDI (JDIRSMV)*/
/*https://github.com/JDIDPRKJ/*/
var password = ''
var longitud = 10

for(i = 0; i < longitud; i++)
{
    password += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33)
}

console.log(password)
