const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let row = 0; row < table.length; row++) {
    console.log(table[row]);

    for (let column = 0; column < table.length; column++) {
        console.log(table[row][column]);
    }
}
