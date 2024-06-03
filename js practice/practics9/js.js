// const loadScript = async(src) => {
//     return new Promise((resolve, reject) => {

//     let script = document.createElement("script");
//     script.src = src
//     script.onload = () => {
//             resolve(src + " don success")
//     }
//     document.head.append(script)
// })
// }

// // let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// // a.then((value) => {
// //     console.log(value)
// // })

// const main2  = async () => {
//     let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a);
// }
// main2();

async function aryan(params) {
  let delhiwather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("26 Deg");
    }, 1000);
  });

  let goawather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 7000);
  });
  // delhiwather.then(alert);
  // goawather.then(alert);
  console.log("delhiwather is processing ..");
  let delhiw = await delhiwather;
  console.log("delhi wather is " + delhiw);
  console.log("goawather is processing ..");
  let goaw = await goawather;
  console.log("goa wather is " + goaw);
  return [delhiw, goaw];
}
let a = aryan();
console.log(a);
