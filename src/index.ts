import Store from "./DataTransferObject/Store";

const store = new Store("Toko Nana", "Jakarta", "Indonesia", "Laptop")

const store1 = store.clone();
store1.name = "Toko Dina Gadget"
store1.category = "Gadget"

const store2 = store1.clone();
store2.name = "Toko Chatkamon"
store2.city = "Pattaya";
store2.country = "Thailand";

const store3 = store2.clone();
store3.name = "Toko June";


console.log("=== Store ===")
console.log({
    store,
    store1,
    store2,
    store3,
})
console.log("=============")