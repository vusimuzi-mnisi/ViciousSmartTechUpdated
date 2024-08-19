document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category').toLowerCase();

        if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

function filterProducts(category) {
    const products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        if (category === '' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}


//=================Picture button event=================
    
    document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const images = product.querySelectorAll('.product-images img');
        const prevButton = product.querySelector('.prev-button');
        const nextButton = product.querySelector('.next-button');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });

        showImage(currentIndex); // Show the first image initially
    });
});
