// If you once declare const then you dont change the value.
/*Prefer not to use var because of issue in block scope and fumctional scope.*/
const accountId = 101010
let accountEmail = "indrajeet@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 202020 not allowed

accountEmail = "indra@gmail.com"
accountPassword = "54321"
accountCity = "Satara"

// Use for single output.
console.log(accountId);

// Use for multiple output in table format.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

