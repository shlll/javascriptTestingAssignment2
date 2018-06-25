describe("Shopping Cart", () => {
    it("should be able to add items to the cart", () => {
        const shoppingCart = new ShoppingCart();
        const cheese = {
            itemId: 4,
            price: 11.00
        }
        shoppingCart.scan(cheese)
        shoppingCart.scan(cheese)
        expect(shoppingCart.items()).toEqual([cheese, cheese])
    })
    it("should limit the cart to 5 items", () => {
        const shoppingCart = new ShoppingCart();
        const cheese = {
            itemId: 4,
            price: 11.00
        }
        shoppingCart.scan(cheese)
        shoppingCart.scan(cheese)
        shoppingCart.scan(cheese)
        shoppingCart.scan(cheese)
        shoppingCart.scan(cheese)
        expect(shoppingCart.scan(cheese)).toBe("Your cart is full.")
        expect(shoppingCart.items()).toEqual([cheese, cheese, cheese, cheese, cheese]);
    })
    it("Should be able to remove items from the cart", () => {
        const shoppingCart = new ShoppingCart();
        const cheese = {
            itemId: 4,
            price: 11.00
        }
        const crackers = {
            itemId: 5,
            price: 12.00
        }
        shoppingCart.scan(cheese)
        shoppingCart.scan(crackers)
        shoppingCart.remove(4);
        expect(shoppingCart.items()).toEqual([crackers]);
    })
    it("Should be able to remove items from an empty cart", () => {
        const shoppingCart = new ShoppingCart();
        expect(shoppingCart.remove(4)).toBe("Your cart is empty.")
    })
    it("Should calculate the total of all the items in the cart", () => {
        const shoppingCart = new ShoppingCart();
        const cheese = {
            itemId: 4,
            price: 10.00
        }
        shoppingCart.scan(cheese)
        shoppingCart.scan(cheese)
        
        expect(shoppingCart.total()).toBe(20.00);
    })

})