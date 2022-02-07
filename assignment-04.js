// problem 01: ana to vori (16 ana = 1 vori)

function anaToVori(ana){
    // this will convert ana to vori
    let vori = ana / 16;

    // this is to check valid input then return
    if (typeof ana != 'number' || ana < 0){  
        console.log('Please provide a positive value/number.');
    }
    else {
        return vori;
    }
}
let totalVori = anaToVori(32);
console.log(totalVori);

///////////////////////////////////////////////////////////////////////////////////////////////////

// problem 02: panda cost (singara = 7 taka/piece, somucha = 10 taka/piece, jilapi = 15 taka/piece)

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity){
    let singaraTotal = singaraQuantity * 7;   // it will give the total price of singara
    let somuchaTotal = somuchaQuantity * 10;  // it will give the total price of somucha
    let jilapiTotal = jilapiQuantity * 15;    // it will give the total price of jilapi

    let total = singaraTotal + somuchaTotal + jilapiTotal;

    // valid input will check if it is a number and the number is not a negative value
    if (typeof singaraQuantity != 'number' || singaraQuantity < 0 && somuchaQuantity != 'number' || somuchaQuantity < 0 && jilapiQuantity != 'number' || jilapiQuantity < 0){  
        console.log('Please provide a positive value/number.');
    }
    else{
        return total;
    }
}
let totalBill = pandaCost(4,6,10);
console.log(totalBill);

///////////////////////////////////////////////////////////////////////////////////////////////////

// problem 03 picnic budget (1-100 = 5000 taka/person, 101-200 = 4000 taka/person, 201-rest = 3000 taka/person)

function picnicBudget(person){
    let total = 0;

    // valid input check, not a negative value and not a float number
    if (typeof person != 'number' || person % parseInt(person) !== 0 || person < 0 ){
        console.log('Please provide a positive integer value/number.');
    }

    // this is the chanda calculation
    else{
        // for 100 persons
        if (person <= 100){
            total = person * 5000;
        }
        // for 200 persons
        else if (person <= 200){
            let first100 = 100 * 5000;
            let remaining = (person - 100) * 4000;
            total = first100 + remaining;
        }
        // for any amount of persons
        else{
            let first100 = 100 * 5000;
            let second100 = 100 * 4000;
            let remaining = (person - 200) * 3000;
            total = first100 + second100 + remaining;
        }
        return total;
    }  
}
let totalChanda = picnicBudget(210);
console.log(totalChanda);

///////////////////////////////////////////////////////////////////////////////////////////////////

// problem 04 odd friend (will give you the first odd friend's name)

let friendsName = ['Aedan Warners', 'Robert Conley', 'Kyla Hursts', 'Frankie Kaisers', 'Kadence Reyes', 'Kaylin Pattersons', 'Dayanara Lucero', 'Lia Long', 'Keira Cooley', 'Kody Pierce', 'Bryce Zimmerman', 'Courtney Jordan']

function oddFriend(names){
    // checks if this is an array
    if (Array.isArray(names)){
        for (let name of names){
            // this will give message if there is any number includes in array
            if (typeof(name) === 'number'){
                return ('The array includes number')
            }
            // this function will remove white space in the name and count total letters and find odd name
            else if (name.split(' ').join('').length % 2 != 0){
                return name;
            }
        }
        return ('There is no odd friend');
    }
    else{
        return ('Please provide valid input/array.')
    }
}

let oddName = oddFriend(friendsName);
console.log(oddName);
