class ShoppingCart {
    constructor() {
        this.cartItems = [];
        this.cartDiscount = 0;
    }
    scan(product) {
        if (this.cartItems.length > 4) {
            return "Your cart is full."
        } else {
            this.cartItems.push(product);
        }
    }
    remove(product) {
        if (this.cartItems.length > 0) {
            const itemIndex = this.cartItems.findIndex((item) => item.itemId === product.itemId)
            this.cartItems.splice(itemIndex, 1)
        } else {
            return "Your cart is empty.";
        }

    }
    discount(percentage) {
        if(percentage <= 50){
            this.cartDiscount = percentage / 100;
        }else{
            this.cartDiscount = 0.50
        }
        
    }
    items() {
        return this.cartItems;
    }
    total() {
        let total = 0;

        for (const item of this.cartItems) {
            total += item.price;
        }
        let totalDiscount = total * this.cartDiscount
        return total - totalDiscount
    }
}