let coco = 0;
let shell = 0;
let premium = 0;
let mystic = 0;
let slips = 0;

$(document).ready(function(){    
    $("#btnLucky").click(function () {
        luckyPouch100();
    });
    $("#btnPremium").click(function () {
        premiumPouch100();
    });
    $("#btnMystic").click(function () {
        simulateMystic();
    });
    $("#btnReset").click(function () {
        reset();
    });
});

function updateUI() {
    $(`#coco`).html(Number(coco).toLocaleString());
    $(`#shell`).html(Number(shell).toLocaleString());
    $(`#premium`).html(Number(premium).toLocaleString());
    $(`#mystic`).html(Number(mystic).toLocaleString());
    $(`#slips`).html(Number(slips).toLocaleString());
}

function luckyPouch100() {    
    for (let i = 1; i <= 100; i++) {        
        let result = rollLucky();        
        if (result == 1) 
            coco++;
        else
            shell++;

        slips += 10;        
    }
    updateUI();
}

function rollLucky() {
    let num = Math.floor(Math.random() * 10000000);
    if (num <= 9993333) {
        return 1;
    } else {
        return 2;
    }
}

function premiumPouch100() {    
    for (let i = 1; i <= 100; i++) {        
        let result = rollPremium();        
        if (result == 1) 
            coco++;
        else if (result == 2) 
            premium++;
        else if (result == 3) 
            shell++;
        else
            mystic++;

        slips += 50;        
    }
    updateUI();
}

function rollPremium() {
    let num = Math.floor(Math.random() * 1000000);
    if (num <= 850000) {
        return 1;
    } else if (num <= 997997) {
        return 2;
    } else if (num <= 999997) {
        return 3;
    } else {
        return 4;
    }
}

function simulateMystic() {
    reset();
    while (mystic == 0) {
        let result = rollPremium();        
        if (result == 1) 
            coco++;
        else if (result == 2) 
            premium++;
        else if (result == 3) 
            shell++;
        else
            mystic++;

        slips += 50;  
    }
    updateUI();
}

function reset() {
    coco = shell = premium = mystic = slips = 0;
    updateUI();
}