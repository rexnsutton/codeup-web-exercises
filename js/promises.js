
function getUserLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
        .then(response => response.json()
            .then( data => data[0].created_at));
}

getUserLastCommit('rexnsutton').then (lastCommitDate => console.log("lastCommitDate ", lastCommitDate));

const wait = miliseconds => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolved(miliseconds);
        }, miliseconds);
    });
};

wait(4000).then((ms) => console.log(`you\'ll see this after one ${ms/1000} second`));


















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
