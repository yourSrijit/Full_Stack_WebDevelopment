// Pause the execution of its surrounding async function until the promise is settled(resolved or rejected) 

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            if (num < 5) {
                resolve(); // Resolving the promise for num < 5
            } else {
                reject("Number is greater than or equal to 5"); // Rejecting the promise for num >= 5
            }
        }, 2000);
    });
}

async function demo() {
    try {
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
    } catch (error) {
        console.error("Error:", error); // Handling rejected promises
    }
}

// Call the demo function
demo();

