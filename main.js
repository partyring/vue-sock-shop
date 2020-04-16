Vue.component('product', {
    template:
    `
        <div class="product">
        <span class="cart">Cart ({{ cart }})</span>

            <div class="product-info">
                <h1>{{ title }}</h1>

                <div class="product-image">
                    <img class="product-preview" v-bind:src="image" v-bind:alt="imageAlt">
                </div>

                <p class="price">£{{ currentPrice }} <span v-if="onSale" class="badge--sale">On Sale!</span></p>
                <p v-if="onSale" class="price--original">£{{ originalPrice }}</p>

                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Hurry, only {{ inventory }} left in stock!</p>
                <p v-else>Out of Stock</p>

                <div v-for="size in sizes">
                    <span>{{ size }}</span>
                </div>

                <p>{{ description }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <p>Available colours:</p>

                <div v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    class="colour-box"
                    v-bind:style="{ backgroundColor: variant.variantColour }"
                    v-on:click="updateProduct(index)"
                >
                </div>

            </div>

            <button v-if="inStock" v-on:click="addToCart">Add to Cart</button>
        </div>
    `,
    data() {
        return {
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
        }
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
})

var app = new Vue({
    el: '#app', 
});