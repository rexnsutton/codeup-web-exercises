const url = "https://api.github.com/users/rexnsutton/events/public";
const myPromise = fetch(url, {headers: {'Authorization': GITHUB_KEY}})
                  .then(response => console.log(response.json()));



















// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
