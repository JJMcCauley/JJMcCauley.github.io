const btn = document.getElementById('sign-up-btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = `Thank you for your interest in this fake newsletter.
    Nothing has been done with your information.
    Please look forward to not hearing from us.`;
    swal(msg);
})


// swal (sweet alert): https://github.com/t4t5/sweetalert 