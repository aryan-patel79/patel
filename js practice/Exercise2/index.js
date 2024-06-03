let user = prompt("Enter snack, water, gun ");
let cpui = Math.floor(Math.random() * 3);
let cpu = ["snack", "water", "gun"][cpui];

const match = (cpu, user) => {
    if (cpu == user) {
        return 0;
    } else if (cpu == "snack" && user == "water") {
        return cpu;
    } else if (cpu == "snack" && user == "gun") {
        return user;
    } else if (cpu == "water" && user == "gun") {
        return cpu;
    } else if (cpu == "water" && user == "snack") {
        return user;
    } else if (cpu == "gun" && user == "water") {
        return user;
    } else if (cpu == "gun" && user == "snack") {
        return cpu;
    }
};
// let result = cpu;
if (cpu !== user) {
    // console.log("cpu");
    document.write(`CPU: ${cpu} <br> User: ${user} <br> The winner is: CPU`);
}
else if (cpu = user){
    document.write(`CPU: ${cpu} <br> User: ${user} <br> The winner is: 0`);
}
else{
    // console.log("User");
    document.write(`CPU: ${cpu} <br> User: ${user} <br> The winner is: User`);
}


