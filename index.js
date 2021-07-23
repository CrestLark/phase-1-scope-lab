var customerName = "bob";
customerName();
function upperCaseCustomerName() {
    customerName =
     customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = "not bob";
}
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer= "bobs wife";
    leastFavoriteCustomer = "steves wife";
}