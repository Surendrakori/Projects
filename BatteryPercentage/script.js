const batteryLevel =document.getElementById('battery');
navigator.getBattery().then((battery) => {
    const level = battery.level;
    const batteryStatus =level*100;
    batteryLevel.innerHTML=batteryStatus;
})