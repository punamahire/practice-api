import { getDataSource } from "../data/dataManager.js";

const url1 = "https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json";
const url2 = "https://type.fit/api/quotes";

const promise1 = new Promise((resolve, reject) => {
    resolve(getDataSource(url1)
    .then(data1 => {
        console.log("Source Data", data1)
        return data1.length
    }));
  })

const promise2 = new Promise((resolve, reject) => {
    resolve(getDataSource(url2)
    .then(data2 => {
        console.log("Source Data", data2)
        return data2.length
    }))
})

promise1.then((value1) => {
    promise2.then((value2) => {
        console.log("Chaining the promises: Total number of items in data set:", value1 + value2);
    })
});

// Using Promise.all - ensures all promises are fullfilled
Promise.all([promise1, promise2]).then((results) => {
    promise1.then((value1) => {
        promise2.then((value2) => {
            console.log("Promise.all() values:", results);
            console.log("Using Promise.all(): Total number of items in data set:", value1 + value2);
        })
    });
})

// Alternate way to chain 
const sum = () => {
    getDataSource(url1).then(data1 => {
        getDataSource(url2).then((data2) => {
            console.log("By chaining the function calls: Addition:", data1.length + data2.length); 
        })
    })
}

sum();

// How NOT to do it :) :)
// step #1
// let data1Length = getDataSource(url1)
// .then(data1 => {
//     console.log("Source Data", data1)
//     return data1.length
// })

// step #2
// let data2Length = getDataSource(url2)
// .then(data2 => {
//     console.log("Source Data", data2)
//     return data2.length
// })

// step #3
//console.log(data1Length + data2Length);








