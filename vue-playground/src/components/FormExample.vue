<template>
    <form v-on:submit.prevent="addItem">
        <p>Add item</p>
        <p>Item name: <input type="text" required v-model="itemName"></p>
        <p>How many: <input type="number" v-model="itemNumber"></p>
        <p><label><input type="checkbox" v-model="isVegan" value="true"> Vegan </label></p>
        <button type="submit">Add item</button>
    </form>
    <div>
        <p>Shopping list:</p>
        <ul>
            <li v-for="item in shoppingList">{{ item.name }}, {{ item.number }}, Vegan: {{ item.isVegan }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemName: null,
            itemNumber: null,
            isVegan : false,
            shoppingList: [
                { name: 'Tomatoes', number: 5, isVegan:true }
            ]
        }
    },
    methods: {
        addItem() {
            let item = {
                name: this.itemName,
                number: this.itemNumber,
                isVegan : this.isVegan
            }
            this.shoppingList.push(item);
            this.itemName = null
            this.itemNumber = null
            this.isVegan = false
        }
    }
};
</script>

<style>
form {
    border: dashed black 1px;
    width: 200px;
    padding: 20px;
}
</style>     