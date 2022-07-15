'use strict';

console.log('1');
/*
setTimeout(function () {
    console.log('2')
}, 1000);
*/
//setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
};

console.clear();
printImmediately(() => console.log('Hello!!, this is JavaScript - World!! '));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};



// callback hell example
//printWithDelay(() => console.log('async callback'), 2000);

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id === 'jun' && password === 'seohyun') || (id === 'seony' && password === 'jun')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jun') {
                onSuccess({name: 'jun', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStroage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStroage.loginUser(
    id,
    password,
    user => {
        UserStorage.getRoles(
            user, userWithRole => {
                alert('Hello ${userWithRole.name}, you have a ${userWothRole.role} role');
            }, 
            error => {
                console.log(error);
            }
        );
    }, 
    error => {
        console.log(error);
    }
);