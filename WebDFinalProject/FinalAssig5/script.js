document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the data-bs-toggle="popover" attribute
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    
    // Initialize popover for each element found
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

document.addEventListener('click', function (e) {
    var popover = bootstrap.Popover.getInstance(document.querySelector('.btn-submit'));
    if (popover && !popover._element.contains(e.target)) {
        popover.hide();
    }
});
