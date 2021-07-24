function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    var b = []
    for(i of prices){
        b.push(increase + i)
    }console.log(b)   
}
