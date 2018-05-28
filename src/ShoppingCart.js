class Shoppingcart {
    constructor(goods) {
        this.goods = {};
    }
    scan(product) {
        let goods = [
            appleJuice = {
                itemId: 23,
                price: 5.00,
            },
            beer = {
                itemId: 20,
                price: 5.00,
            },
            apple = {
                itemId: 280,
                price: 2.00,
            }
        ]
        if (this.goods.length > 5) {
            return "Your cart is full.";
        } else {
            this.goods.push(product);
        }
    }
    remove(product) {
        if (this.goods.length < 0) {
            return "Your cart is empty.";
        } else {
            delete this.product;
        }
    }
    discount(percentage) {
        if (percentage > 0.5) {
            return "The discount of the items is 0.5";
        } else {
            return percentage;
        }
    }
    total() {
        return this.goods;
    }
    items() {
        return this.product;
    }
}