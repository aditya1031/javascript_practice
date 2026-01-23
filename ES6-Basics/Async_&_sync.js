//   synchronous = Executes line by line consecutively in a sequential manner,Code that waits for an operation to complete.

//   Asynchronous = Allows multiple operation to be performed concurrently without waiting.
//                  Doesn't block the execution flow and allows the program to continue (I/O operation,network request,fetching data)
//                  handle with: Callbacks,Promises,Async/Await.

function fun1(Callback) {
     setTimeout(() => {
          console.log(`task 1`);
          Callback()
     }, 3000);
}
function fun2(){
     console.log(`task 2`);
     console.log(`task 3`);
     console.log(`task 4`);
     console.log(`task 5`);
}

fun1(fun2);