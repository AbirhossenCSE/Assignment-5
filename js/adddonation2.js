// part 2
document.getElementById('btn-donate-2').addEventListener('click', function(event){
    event.preventDefault();

    const donateMoney = getInputFieldValueById('input-add-money-2');
    

    if (isNaN(donateMoney)) {
        alert('Failed! Type Valid Ammount');
        return;
    }

    if (donateMoney >= 0) {
        // donation balance
        const donateBalance = getTextFieldValueById('donation-balance-2');
        // main account balance
        const accountBalance = getTextFieldValueById('account-balance');
        if (donateMoney > accountBalance) {
            alert('You do not have enoth balance');
            return;
        }

        // add and cashout
        const donateNewBalance = donateBalance + donateMoney;
        const accountNewBalance = accountBalance - donateMoney;

        // donation balance
        document.getElementById('donation-balance-2').innerText = donateNewBalance;
        // main balance
        document.getElementById('account-balance').innerText = accountNewBalance;



        // add to transaction history
        // 96500 Taka is Donated for famine-2024 at Feni, Bangladesh
        const p = document.createElement('p');

        const currentDate = new Date();
        const formattedDate = currentDate.toString();

        p.classList.add('bg-gray-100', 'border', 'border-black', 'mx-auto', 'p-4', 'w-9/12', 'rounded');
        p.innerHTML = `${donateMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh <br> ${formattedDate}`;

        // should be a common function
        document.getElementById('history-section').appendChild(p);
        
    } else {
        alert('Failed')
    }
    
})