const { connectToDB, testConnection } = require('./models/conn');
const Category = require("./models/CategoryModel");
const Item = require("./models/ItemModel");
const { Sequelize, Op } = require('sequelize'); //import operators from Sequelize


// --------function calls ----------
// addCategory()
// addItem()

// Call the function to search and display meat items
// searchMeatItems();
// Call the function to update meat prices
// updateMeatPrices();
// updateFruitPrices();
// Call the function to select items with prices greater than 20
// selectItemsWithPriceGreaterThan20();
// deleteItem();
// deleteCategory();
viewCategoryTable();
viewItemTable();

// --------functions ----------

//---ADDCATEGORY---//

// async function addCategory() {

//     let newCategory = {
//         name: "meat"
//     }

//     await Category.create(newCategory)
// }
async function addCategory() {

    let newCategory = {
        name: "fruit"
    }

    await Category.create(newCategory)
}

//---ADDITEM---//

async function addItem() {

    // let newItem = {
    //     name: "pork",
    //     description: "The other white meat.",
    //     price: 1,
    //     category_id: 2
    // }
    // let newItem = {
    //     name: "chicken",
    //     description: "The most common type of poultry in the world.",
    //     price: 1,
    //     category_id: 2
    // }
    // let newItem = {
    //     name: "apple",
    //     description: "One serving, or one medium apple, provides about 95 calories.",
    //     price: 1,
    //     category_id: 3
    // }
        let newItem = {
        name: "peach",
        description: "One raw medium peach (147 grams) has 50 calories.",
        price: 1,
        category_id: 3
    }


    await Item.create(newItem)
}

//---VIEWTABLES---//

async function viewCategoryTable() {
    let result = await Category.findAll()
    console.log(JSON.stringify(result))
}

async function viewItemTable() {
    let result = await Item.findAll()
    console.log(JSON.stringify(result))
}

//---DELETEITEM---//

async function deleteItem() {
    let itemToDelete = {
        id: 1 
    }
    // console.log("itemToDelete: " + itemToDelete.id);
    await Item.destroy({where: {id: itemToDelete.id}})
}

//---DELETECATEGORY---//

async function deleteCategory() {
    let categoryToDelete = {
        id: 1 
    }
    // console.log("categoryToDelete: " + categoryToDelete.id);
    await Category.destroy({where: {id: categoryToDelete.id}})
}

//---SEARCHMEATITEMS---//

async function searchMeatItems() {
    try {
        // Find the "meat" category by its name (adjust the condition as needed)
        const meatCategory = await Category.findOne({
            where: { name: 'meat' }
        });

        if (!meatCategory) {
            console.log('Meat category not found.');
            return;
        }

        // Find all items belonging to the "meat" category and retrieve their names and descriptions
        const meatItems = await Item.findAll({
            where: { category_id: meatCategory.id },
            attributes: ['name', 'description']
        });

        if (meatItems.length === 0) {
            console.log('No meat items found.');
            return;
        }

        // Display the name and description of each meat item
        console.log('Meat Items:');
        meatItems.forEach((item) => {
            console.log(`Name: ${item.name}`);
            console.log(`Description: ${item.description}`);
            console.log('---');
        });
    } catch (error) {
        console.error('Error searching for meat items:', error);
    }
}

//---UPDATEMEATPRICES---//

async function updateMeatPrices() {
    try {
        // Find the "meat" category by its name (adjust the condition as needed)
        const meatCategory = await Category.findOne({
            where: { name: 'meat' }
        });

        if (!meatCategory) {
            console.log('Meat category not found.');
            return;
        }

        // Update the prices of meat items
        const updatedItemCount = await Item.update(
            { price: 120.99 }, // New price value
            { where: { category_id: meatCategory.id } }
        );

        console.log(`${updatedItemCount} meat items updated to price 120.99.`);
    } catch (error) {
        console.error('Error updating meat prices:', error);
    }
}

//---UPDATEFRUITPRICES---//

async function updateFruitPrices() {
    try {
        // Find the "meat" category by its name (adjust the condition as needed)
        const fruitCategory = await Category.findOne({
            where: { name: 'fruit' }
        });

        if (!fruitCategory) {
            console.log('Fruit category not found.');
            return;
        }

        // Update the prices of fruit items
        const updatedItemCount = await Item.update(
            { price: 2.99 }, // New price value
            { where: { category_id: fruitCategory.id } }
        );

        console.log(`${updatedItemCount} fruit items updated to price 2.99.`);
    } catch (error) {
        console.error('Error updating fruit prices:', error);
    }
}

//---SELECTITEMSWITHPRICES>20---//

async function selectItemsWithPriceGreaterThan20() {
    try {
        // Find all items with prices greater than 20
        const items = await Item.findAll({
            where: {
                price: {
                    [Op.gt]: 20 // Using Sequelize's greater-than operator
                }
            }
        });

        if (items.length === 0) {
            console.log('No items with prices greater than 20 found.');
            return;
        }

        // Display the selected items
        console.log('Items with Prices Greater Than 20:');
        items.forEach((item) => {
            console.log(`Name: ${item.name}`);
            console.log(`Price: ${item.price}`);
            console.log('---');
        });
    } catch (error) {
        console.error('Error selecting items with prices greater than 20:', error);
    }
}
