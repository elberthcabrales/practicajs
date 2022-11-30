const names = ['John', 'Paul', 'George', 'Ringo'];

async function printNames(name) {
    console.log(`hello ${name}`);
}

names.forEach(async (name) => {
    await printNames(name); // first all with await
    console.log(name); // at the end
});

console.log('done'); // then this
