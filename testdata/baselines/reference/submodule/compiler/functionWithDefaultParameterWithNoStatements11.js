//// [tests/cases/compiler/functionWithDefaultParameterWithNoStatements11.ts] ////

//// [functionWithDefaultParameterWithNoStatements11.ts]
var v: any[];

function foo(a = v[0]) { }

function bar(a = v[0]) {
}

//// [functionWithDefaultParameterWithNoStatements11.js]
var v;
function foo(a = v[0]) { }
function bar(a = v[0]) {
}
