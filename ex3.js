function deepEqual(obj1,obj2) {
    compareObj1 = Object.values(obj1);
    compareObj2 = Object.values(obj2);
    for (let i = 0; i < compareObj1.length; i++) {
        if (typeof(compareObj1[i]) == typeof(compareObj2[i])) {
            if (compareObj1[i] == compareObj2[i]) {
                console.log(true);
            }
            else {
                console.log(false);
            }
        }
        else {
            console.log(false);
        }
    }
}

let obj1 = {'nome': 'Pedro', 'numero': 2};
let obj2 = {'nome': 'Pedro', 'numero': 3};

//console.log(typeof(obj1));
//console.log(typeof(obj2.nome));
//console.log(typeof(obj1.nome));
//console.log(Object.values(obj1));
//console.log(obj1 === obj2);
deepEqual(obj1,obj2);