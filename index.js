const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function totalBatteries (batteries){
    let totalBattery = 0;

    for(const battery of batteries) {
        totalBattery += battery;
    }
    return totalBattery
}
console.log(totalBatteries(batteryBatches))


