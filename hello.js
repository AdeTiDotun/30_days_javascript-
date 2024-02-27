function greetings() {
    let callGreetings = "Hello World";
    function called() {
        console.log(callGreetings);
    }
    called()
}

greetings()

let greetMe = () => {
    console.log('good');
}

greetMe()