var app = new Vue({
    el: '#app',
    data: {
        product: 'Avocado Socks',
        description: 'Best socks in town; will never get a hole, will never let you down. Warm.',
        selectedVariant: 0,
        originalPrice: 6.99,
        currentPrice: 4.99,
        brand: 'Avo-ca-do',
        details: ["100% cotton", "cruelty-free", "available in various styles"],
        sizes: ["small", "medium", "large"],
        variants: [
            {
                variantId: 123,
                variantColour: 'blue',
                variantImage: 'https://images-na.ssl-images-amazon.com/images/I/81clyqeMNDL._UX569_.jpg',
                variantImageAlt: 'Blue socks with green avocados wearing sunglasses whilst clicking their fingers',
                stockCount: 5
            },
            {
                variantId: 456,
                variantColour: 'red',
                variantImage: 'https://images.asos-media.com/products/asos-christmas-avocado-heart-ankle-socks-in-bauble/8602845-1-red?$XXL$&wid=513&fit=constrain',
                variantImageAlt: 'Red socks with avocados wearing santa hats',
                stockCount: 22
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
            console.log(index);
        }

    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        imageAlt() {
            return this.variants[this.selectedVariant].variantImageAlt
        },
        inventory() {
            return this.variants[this.selectedVariant].stockCount
        },
        inStock() {
            if(this.inventory > 0) {
                return true;
            }
            return false;
        },
        onSale() {
            if(this.currentPrice < this.originalPrice) {
                return true;
            }
            return false;
        }
    }
});