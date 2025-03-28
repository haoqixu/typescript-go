//// [tests/cases/compiler/genericIsNeverEmptyObject.ts] ////

//// [genericIsNeverEmptyObject.ts]
// Repro from #29067

function test<T extends { a: string }>(obj: T) {
    let { a, ...rest } = obj;
    return { ...rest, b: a };
}

let o1 = { a: 'hello', x: 42 };
let o2: { b: string, x: number } = test(o1);


//// [genericIsNeverEmptyObject.js]
// Repro from #29067
function test(obj) {
    let { a, ...rest } = obj;
    return { ...rest, b: a };
}
let o1 = { a: 'hello', x: 42 };
let o2 = test(o1);
