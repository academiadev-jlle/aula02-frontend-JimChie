function deepEqual(obj1,obj2) {
    if (typeof(obj1) == typeof(ob2)) {
        if (obj1 == obj2) {
            return true;
        }
    }
    else {
        return false;
    }
}

let obj1 = {'nome': 'Pedro'};
let obj2 = {'nome': 'Pedro'};

//console.log(obj1 === obj2);
console.log(deepEqual(obj1,obj2)); 