/**(function () {

    console.log('this is the start'); // 1

    setTimeout(function cb() { // 4
        console.log('this is a msg from call back');
    });

    console.log('this is just a message'); // 2

    setTimeout(function cb1() { // 5
        console.log('this is a msg from call back1');
    }, 0);

    console.log('this is the  end'); // 3

})();
**/
(function () {
    // this line is executed in call stack
   console.log(Math.pow(1,1)) // 1
    // timers api has to wait for 0ms to send this to callback queue until the call stack is empty
    setTimeout(function () {
        console.log(2);
    }, 0) // 4
    console.log(3) // 2
    const interval = setInterval(function () {
        console.log(4); // 5
        setTimeout(function () {
            console.log(5); // 7
        }, 500)
    }, 1000);
   setTimeout(function (){
        clearInterval(interval); // 5
        console.log(6) // 6
   }, 1100);
   console.log(7); // 3

})();
/**
 * javascript run sync and sequential
 * until it hit an async function is executed by the event loop
 *
 * sync code is in the call stack and is executed sequentially line by line
 *
 * callback function is executed by the event loop
 * in callback queue
 * to exec callback queue, the call stack must be empty and no function is running in callback queue
 * the event loop will check the call stack and callback queue
 * if the call stack is empty, it will move the first function in callback queue to call stack
 */
