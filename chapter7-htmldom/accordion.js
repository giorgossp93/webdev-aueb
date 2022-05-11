let accordions = document.getElementsByClassName('accordion');
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        let panel = this.nextElementSibling;
        let fa = this.firstChild;
        if (panel.style.display === 'block'){
            panel.style.display = 'none';
            this.classList.remove('active');
            fa.classList.remove('fa-chevron-up');
            fa.classList.add('fa-chevron-down');
        } else {
            for (let j = 0; j < accordions.length; j++) {
                accordions[j].nextElementSibling.style.display = 'none';
                accordions[j].classList.remove('active');
                accordions[j].firstChild.classList.remove('fa-chevron-up');
                accordions[j].firstChild.classList.add('fa-chevron-down');
            }
            panel.style.display = 'block';
            this.classList.add("active");
            fa.classList.remove('fa-chevron-down');
            fa.classList.add('fa-chevron-up');
        }
    });
}