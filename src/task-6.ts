function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["a", "b", "c"]);
const firstBool = getFirstElement<boolean>([true, false, true]);

const firstMixed = getFirstElement<number | string>([1, "2", 3]);