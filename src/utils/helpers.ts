export const reduceSumFunc = (prev: number, cur: number) => prev + cur

export const getRandomElement = <T>(array: T[]) => array[Math.floor(Math.random() * array.length)]
