
const $btn = document.querySelector('#change');
const $pet = document.querySelector('#my-pet');

$btn.addEventListener('click', e => {
    $pet.textContent = '귀여운 거북이!'
});
