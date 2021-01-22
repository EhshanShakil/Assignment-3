// // Problem-1 Solve
// //

function kilometerToMeter(kilometer) {
    var getMeter = kilometer * 1000;
    return getMeter;
}
var resultMeter = kilometerToMeter(1);

// Console Output
console.log(resultMeter);

// Problem-2 Solve

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var TotalPrice = watchPrice + phonePrice + laptopPrice;
    return TotalPrice;
}

var budgetResult = budgetCalculator(1, 2, 3);

// Console Output
console.log(budgetResult);




// Problem-3 Solve

function hotelCost(dayCount) {
    var totalPrice = 0;
    if (dayCount <= 10) {
        totalPrice = dayCount * 100;
    } else if (dayCount <= 20) {
        var firstHotelBill = 10 * 100;
        var secondStayDay = dayCount - 10;
        var secondHotelBill = secondStayDay * 80;
        var totalPrice = firstHotelBill + secondHotelBill;
    } else {
        var firstHotelBill = 10 * 100;
        var secondHotelBill = 10 * 80;
        var thirdStayDay = dayCount - 20;
        var thirdHotelBill = thirdStayDay * 50;
        var totalPrice = firstHotelBill + secondHotelBill + thirdHotelBill;
    }
    return totalPrice;
}

var HotelBill = hotelCost(25);

// Console Output

console.log(HotelBill);


//Problem-4 Solve
function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

// Friends list
var getMegaFriend = megaFriend([
    'Ehshan Shakil',
    'Rabbi Akram',
    'Shakila Jafor',
    'Tahsan khan',
    'Faysal Hossain',
    'Rafiqul Islam',
]);

// Console Output
console.log(getMegaFriend);