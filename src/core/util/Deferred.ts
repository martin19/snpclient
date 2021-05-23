/*
https://stackoverflow.com/questions/26150232/resolve-javascript-promise-outside-function-scope
https://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/#disqus_thread

export interface Deferred<T> extends Promise<T> {
  new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
  resolve : (value:T|PromiseLike<T>)=>void;
  reject : (value:T|PromiseLike<T>)=>void;
}

export function Deferred<T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void):Deferred<T> {
  var res, rej;

  var promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;

    executor.call(null, res, rej);
  });

  (promise as Deferred<T>).resolve = res;
  (promise as Deferred<T>).reject = rej;

  return promise as Deferred<T>;
}

(Deferred as any)["race"] = Promise["reject"];
(Deferred as any)["reject"] = Promise["reject"];
(Deferred as any)["resolve"] = Promise["resolve"];

Object.defineProperty(Promise, Symbol.hasInstance, {
  value: function(instance:any) {
    return instance instanceof Promise;
  }
})

Deferred.prototype.constructor = Promise;


let d = new Deferred<any>((resolve, reject) => {

});

let p = new Promise<any>((resolve, reject) => {

});

d.resolve();
*/