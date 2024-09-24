document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-add-money');
    

    if (isNaN(donateMoney)) {
        alert('Failed! Type Valid Ammount');
        return;
    }

    if (donateMoney >= 0) {
        // donation balance
        const donateBalance = getTextFieldValueById('donation-balance');
        // main account balance
        const accountBalance = getTextFieldValueById('account-balance');
        if (donateMoney > accountBalance) {
            alert('You do not have enough balance.')
        }

        // add and cashout
        const donationBalance = donateBalance + donateMoney;
        const accountNewBalance = accountBalance - donateMoney;

        // donation balance
        document.getElementById('donation-balance').innerText = donationBalance;
        // main balance
        document.getElementById('account-balance').innerText = accountNewBalance;



        // add to transaction history
        const p = document.createElement('p');
        p.classList.add('bg-yellow-300');
        p.innerText = `${donateMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
        // should be a common function
        document.getElementById('history-section').appendChild(p);
        
    } else {
        alert('Failed')
    }
    
})

