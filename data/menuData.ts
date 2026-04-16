export interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    category: "International Pizzas",
    items: [
      { name: "Canadian", price: "$12.00", description: "Pepperoni, bacon, mushrooms" },
      { name: "Extreme Pepperoni", price: "$13.00", description: "Loaded with pepperoni & cheese" },
      { name: "Classic", price: "$13.00", description: "Pepperoni, mushrooms, green peppers, parmesan cheese" },
      { name: "Deluxe", price: "$14.00", description: "Pepperoni, bacon, ham, green peppers, onion, mushrooms" },
      { name: "Meat Lovers", price: "$13.00", description: "Bacon, ham, pepperoni, italian sausage" },
      { name: "Hawaiian", price: "$10.00", description: "Bacon, ham, pineapple" },
      { name: "Vegetarian", price: "$10.00", description: "Mushrooms, tomatoes, green peppers, onions" },
      { name: "Cheese Burger", price: "$13.00", description: "Ground beef, bacon, tomato, onion, pickles" },
      { name: "Mexican", price: "$12.00", description: "Ground beef, onions, jalapeños" },
      { name: "BBQ Chicken", price: "$12.00", description: "With bbq sauce & chicken" },
    ],
  },
  {
    category: "Build Your Own Pizza",
    items: [
      { name: "Small", price: "$8.99", description: "Sauce & cheese included" },
      { name: "Medium", price: "$10.99", description: "Sauce & cheese included" },
      { name: "Large", price: "$13.99", description: "Sauce & cheese included" },
      { name: "Extra Large", price: "$16.99", description: "Sauce & cheese included" },
    ],
  },
  {
    category: "Toppings",
    items: [
      { name: "Mushrooms", price: "$1.00", description: "" },
      { name: "Onions", price: "$1.00", description: "" },
      { name: "Pineapple", price: "$1.00", description: "" },
      { name: "Black Olives", price: "$1.00", description: "" },
      { name: "Green Olives", price: "$1.00", description: "" },
      { name: "Jalapeños", price: "$1.00", description: "" },
      { name: "Banana Peppers", price: "$1.50", description: "" },
      { name: "Green Peppers", price: "$1.50", description: "" },
      { name: "Sun Dried Tomatoes", price: "$1.50", description: "" },
      { name: "Fresh Tomatoes", price: "$1.50", description: "" },
      { name: "Roasted Red Peppers", price: "$1.75", description: "" },
      { name: "Extra Cheese", price: "$1.75", description: "" },
      { name: "Parmesan Cheese", price: "$1.75", description: "" },
      { name: "Ground Beef", price: "$1.75", description: "" },
      { name: "Chicken", price: "$1.75", description: "" },
      { name: "Ham", price: "$2.00", description: "Counts as two" },
      { name: "Bacon", price: "$2.00", description: "Counts as two" },
    ],
  },
  {
    category: "Dipping Sauces",
    items: [
      { name: "Cheddar Chipotle", price: "$1.50", description: "" },
      { name: "Creamy Garlic", price: "$1.50", description: "" },
      { name: "Ranch", price: "$1.50", description: "" },
      { name: "BBQ", price: "$1.50", description: "" },
      { name: "Marinara", price: "$1.50", description: "" },
      { name: "Gravy", price: "$1.50", description: "" },
      { name: "Hot Honey Garlic", price: "$1.50", description: "" },
      { name: "Mayo", price: "$1.50", description: "" },
      { name: "Plum", price: "$1.50", description: "" },
      { name: "Fire & Ice", price: "$1.50", description: "" },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Fries", price: "$4.00", description: "" },
      { name: "Onion Rings", price: "$5.00", description: "" },
      { name: "Potato Wedges", price: "$5.00", description: "" },
      { name: "Fry Bread", price: "$2.00", description: "" },
      { name: "Side of Rice", price: "$4.00", description: "" },
      { name: "Side of Beans", price: "$4.00", description: "" },
      { name: "Side of Rice and Beans", price: "$6.00", description: "" },
      { name: "Corn Soup", price: "$6.00", description: "" },
      { name: "Taters", price: "$5.00", description: "" },
      { name: "1 Piece Chicken Finger", price: "$3.00", description: "" },
    ],
  },
  {
    category: "Breakfast & Lunch",
    items: [
      { name: "Breakfast Sandwich", price: "$5.00", description: "English muffin, egg, cheddar cheese, and choice of bacon, ham or sausage" },
      { name: "Breakfast BLT", price: "$9.00", description: "2 eggs, bacon, lettuce, tomato, and mayo on a classic bun" },
      { name: "Breakfast Wrap", price: "$10.00", description: "2 scrambled eggs, taters, marble cheese, choice of bacon, ham or sausage" },
      { name: "Loaded Taters", price: "$8.00", description: "Crispy taters, marble cheese, bacon crumble, tomato and sour cream" },
      { name: "Caesar Wrap", price: "$10.00", description: "Romaine lettuce, croutons, bacon bits, caesar dressing" },
      { name: "BLT", price: "$8.00", description: "Bacon, lettuce, tomato on a classic bun" },
    ],
  },
  {
    category: "Burgers & Sandwiches",
    items: [
      { name: "Hamburger", price: "$10.00", description: "Topped with lettuce, onions, tomatoes, ketchup, and mayonnaise on a brioche bun" },
      { name: "Cheeseburger", price: "$13.00", description: "Topped with lettuce, onions, tomatoes, ketchup, and mayonnaise on a brioche bun" },
      { name: "Bacon Cheeseburger", price: "$15.00", description: "Topped with lettuce, onions, tomatoes, ketchup, and mayonnaise on a brioche bun" },
      { name: "Crispy Chicken Burger", price: "$13.00", description: "Topped with lettuce and mayonnaise on a classic burger bun" },
      { name: "Chicken Ranch Sandwich", price: "$14.00", description: "Shredded chicken, cheddar cheese, lettuce, tomato, and ranch dressing on a classic bun" },
      { name: "Salt Pork Sandwich", price: "$10.00", description: "Crispy salt pork on fry bread with your choice of toppings" },
    ],
  },
  {
    category: "Sharables",
    items: [
      { name: "1lb Chicken Wings", price: "$13.00", description: "Sauces: hot, medium, mild, tequila lime, fire and ice, bbq, honey garlic" },
      { name: "7 Piece Chicken Fingers", price: "$15.00", description: "Served with plum sauce" },
      { name: "Jalapeño Poppers", price: "$10.00", description: "Served with marinara" },
      { name: "Mozzarella Sticks", price: "$8.00", description: "Served with marinara" },
      { name: "Battered Mushrooms", price: "$8.00", description: "Served with ranch" },
      { name: "Garlic Bread", price: "$4.00", description: "" },
    ],
  },
  {
    category: "Tacos",
    items: [
      { name: "Indian Fry Bread Taco", price: "$8.00", description: "Fry bread, chili, marble cheese, lettuce, tomatoes, and sour cream" },
      { name: "Fried Tacos", price: "$10.00", description: "Four chicken or beef tacos on corn tortilla. Served with coleslaw, sour cream and salsa" },
      { name: "Mexican Tacos", price: "$4.00", description: "Chicken, brisket, pulled pork or carne asada. Corn tortilla, tomato, onions, cilantro, lemon wedge" },
      { name: "Taco Fries", price: "$10.00", description: "Crispy fries topped with tomatoes, onions, cilantro, hot or mild sauce, your choice of protein" },
      { name: "Nachos", price: "$10.00", description: "Marble cheese, onions, green peppers, tomatoes served with salsa and sour cream" },
      { name: "Chicken Quesadilla", price: "$12.00", description: "Chicken and cheese. Served with sour cream and salsa" },
      { name: "Deluxe Quesadilla", price: "$14.00", description: "Chicken, cheese, onions, green peppers, tomatoes. Served with sour cream and salsa" },
      { name: "Burrito", price: "$13.00", description: "Choose from: chicken, brisket, pulled pork, carne asada. Your choice of toppings and sauces" },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Chili", price: "$10.00", description: "Served with garlic bread" },
      { name: "Poutine", price: "$7.00", description: "" },
      { name: "Wedges Poutine", price: "$9.00", description: "" },
      { name: "Chili Cheese Fries", price: "$9.00", description: "" },
      { name: "3 Chicken Fingers & Fries", price: "$10.00", description: "Served with plum sauce" },
      { name: "Baked or Fried Panzerotti", price: "$12.00", description: "Choice of 4 toppings" },
      { name: "Caesar Salad", price: "$6.00", description: "" },
      { name: "Garden Salad", price: "$6.00", description: "With italian dressing" },
      { name: "Garlic Bread", price: "$4.00", description: "" },
    ],
  },
];