/**
 * Compares equivalence of two objects down to each element.
 * @param {*} a - the first object
 * @param {*} b - the second object
 * @returns {Bool}
 */
export const isEquivalent = (a, b) => {
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length)
        return false;

    for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i];

        if (a[propName] !== b[propName])
            return false;
    }

    return true;
};
