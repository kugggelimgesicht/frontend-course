const name = document.getElementById('name');
name.addEventListener('keyup', function (evt) {
    const exp = /[^aieou]/gi;
    this.value = this.value.replace(exp, '')
})



