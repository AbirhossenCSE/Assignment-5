document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-add-money');
    

    if (isNaN(donateMoney)) {
        alert('Failed');
        return;
    }

    if (donateMoney >= 0) {
        // donation balance
        const donateBalance = getTextFieldValueById('donation-balance');
        // main account balance
        const accountBalance = getTextFieldValueById('account-balance');
        if (donateBalance > accountBalance) {
            alert('You do not have enoth balance');
            return;
        }

        // add and cashout
        const donateNewBalance = donateBalance + donateMoney;
        const accountNewBalance = accountBalance - donateMoney;

        // donation balance
        document.getElementById('donation-balance').innerText = donateNewBalance;
        // main balance
        document.getElementById('account-balance').innerText = accountNewBalance;



        // add to transaction history
        // 96500 Taka is Donated for famine-2024 at Feni, Bangladesh
        const p = document.createElement('p');
        p.classList.add('bg-yellow-300');
        p.innerText = `${donateMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
        // should be a common function
        document.getElementById('history-section').appendChild(p);
        
    } else {
        alert('Failed')
    }
    
})