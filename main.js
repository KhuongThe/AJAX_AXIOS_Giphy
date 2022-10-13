// async function example
//Khai báo hàm f() là hàm bất đồng bộ
async function f() {
  console.log("Async function.");
  return Promise.resolve(1);
}
//Gọi hàm f()
f();
