export const findScore = (x, y) => {
    // THIS IS WHY TYPESCRIPT IS USEFUL
    if (Number.isNaN(Number(x)) || Number.isNaN(Number(x))) {
        return null;
    }

    const distance = Math.sqrt(x * x + y * y);

    if (distance > 10) {
        return 0;
    }
    if (distance > 5) {
        return 1;
    }
    if (distance > 1) {
        return 5;
    }
    return 10;
};
