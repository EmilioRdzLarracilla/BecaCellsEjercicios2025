console.log("prototipos");
const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const url = `${baseUrl}/1`;

const arregloPromesas = [
  fetch(`${baseUrl}/33`),
  fetch(`${baseUrl}/33`),
  fetch(`${baseUrl}/41`),
  fetch(`${baseUrl}/52`),
  fetch(`${baseUrl}/67`),
];

// Promise.all(arregloPromesas)
//   .then((res) => console.log(res))
//   .catch((err) => console.log("error", err));

// fetch(url).catch((err) => console.log(err));
Promise.myownAll = function (iterable) {
  let flag = false;
  const promise = new Promise((resolve, reject) => {
    iterable.forEach((element) => {
      promise
        .then((result) => {
          flag = true;
        })
        .catch(() => {
          flag = false;
        });
    });
  });

  if (flag) {
    promise.resolve();
  } else {
    promise.reject;
  }
};
