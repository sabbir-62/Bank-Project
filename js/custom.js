// login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display= "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});


// deposit button event handler

const depositBtn = document.getElementById("addDeposit");

    depositBtn.addEventListener("click", function(){

    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit =  document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);

    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;
    document.getElementById("depositAmount").value = "";

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;

    document.getElementById("currentBalance").innerText = totalBalance;

})

// withdraw button event handler

const withdrawbtn = document.getElementById("withdrawButton");
withdrawbtn.addEventListener("click", function(){

    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const withdrawBalance = document.getElementById("withdrawBalance").innerText;
    const withdrawBalanceNumber = parseFloat(withdrawBalance);

    const totalWithdraw = withdrawAmountNumber + withdrawBalanceNumber;

    document.getElementById("withdrawBalance").innerText = totalWithdraw;
    document.getElementById("withdrawAmount").value = "";

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - withdrawAmountNumber;

    document.getElementById("currentBalance").innerText = totalBalance;
    // console.log(totalBalance);
    console.log(currentBalanceNumber);
})