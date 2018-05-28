describe("Shoppingcart", () => {
   it("should only allow 5 items in the cart", () => {
        const shoppingcart = new Shoppingcart([]);
        shoppingcart.scan("appleJuice")
        shoppingcart.scan("beer")
        shoppingcart.scan("apple")
        shoppingcart.scan("cake")
        shoppingcart.scan("water")
        expect(shoppingcart.scan("pie")).toBe("Your cart is full.")
    })
    it("should not remove items from an empty cart", () => {
        const shoppingcart = new Shoppingcart();
        expect(shoppingcart.remove()).toBe("Your cart is empty.")
    })
    it("should  discount items less than 50%", () => {
        const shoppingcart = new Shoppingcart();
        expect(shoppingcart.discount(0.2)).toBe(0.5);
        expect(shoppingcart.discount(0.3)).toBe(0.5);
    })
    it("should list all of the items in the cart", () => {
        const shoppingcart = new Shoppingcart(["appleJuice","beer","apple"]);
        expect(shoppingcart.total()).toBe(["appleJuice","beer","apple"]);
    })
    it("should return the current items in the cart", () => {
        const shoppingcart = new Shoppingcart();
        expect(shoppingcart.items()).toBe();
    })
})