function calculateTax() {
    const monthly = parseFloat(document.getElementById("salary").value) || 0;
    const annual = monthly * 12;
    let tax = 0;

    // Pakistan Tax Slabs Logic
    if (annual > 2200000)      tax = 180000 + (annual - 2200000) * 0.25;
    else if (annual > 1200000) tax = 30000 + (annual - 1200000) * 0.15;
    else if (annual > 600000)  tax = (annual - 600000) * 0.05;

    const mTax = tax / 12;

    // Short UI Update (Helper function to format numbers)
    const setVal = (id, val) => document.getElementById(id).innerText = Math.round(val).toLocaleString();

    setVal("mTax", mTax);
    setVal("yTax", tax);
    setVal("netPay", monthly - mTax);
}

function resetAll() {
    document.getElementById("salary").value = "";
    calculateTax(); 
}