
const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('bg-green'));

        this.classList.add('bg-green');
    });
});
