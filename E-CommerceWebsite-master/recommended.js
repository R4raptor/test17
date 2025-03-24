
document.addEventListener('DOMContentLoaded', function () {
    const recommendedContainer = document.getElementById('recommended-container');

    const recommendedProducts = [
        { id: 101, name: 'Wireless Headphones', price: 2999, preview: 'images/headphones.jpg' },
        { id: 102, name: 'Smartwatch Pro', price: 4999, preview: 'images/smartwatch.jpg' },
        { id: 103, name: 'Bluetooth Speaker', price: 1999, preview: 'images/speaker.jpg' }
    ];

    recommendedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="\${product.preview}" alt="\${product.name}">
            <h3>\${product.name}</h3>
            <p>Rs \${product.price}</p>
            <button onclick="location.href='contentDetails.html?\${product.id}'">View Details</button>
        `;
        
        recommendedContainer.appendChild(productCard);
    });
});
