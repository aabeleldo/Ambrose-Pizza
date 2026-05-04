export interface MenuItemSize {
  size: string;
  price: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  sizes?: MenuItemSize[];
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    category: "International Pizzas",
    items: [
      { name: "Canadian", description: "Pepperoni, bacon, mushrooms", sizes: [{ size: "Sm", price: "$12" }, { size: "Med", price: "$15" }, { size: "Lg", price: "$19" }, { size: "XL", price: "$22" }] },
      { name: "Extreme Pepperoni", description: "Loaded with pepperoni & cheese", sizes: [{ size: "Sm", price: "$13" }, { size: "Med", price: "$16" }, { size: "Lg", price: "$20" }, { size: "XL", price: "$24" }] },
      { name: "Classic", description: "Pepperoni, mushrooms, green peppers, parmesan cheese", sizes: [{ size: "Sm", price: "$13" }, { size: "Med", price: "$16" }, { size: "Lg", price: "$19" }, { size: "XL", price: "$22" }] },
      { name: "Deluxe", description: "Pepperoni, bacon, ham, green peppers, onion, mushrooms", sizes: [{ size: "Sm", price: "$14" }, { size: "Med", price: "$18" }, { size: "Lg", price: "$23" }, { size: "XL", price: "$28" }] },
      { name: "Meat Lovers", description: "Bacon, ham, pepperoni, italian sausage", sizes: [{ size: "Sm", price: "$13" }, { size: "Med", price: "$17" }, { size: "Lg", price: "$21" }, { size: "XL", price: "$25" }] },
      { name: "Hawaiian", description: "Bacon, ham, pineapple", sizes: [{ size: "Sm", price: "$10" }, { size: "Med", price: "$14" }, { size: "Lg", price: "$18" }, { size: "XL", price: "$22" }] },
      { name: "Vegetarian", description: "Mushrooms, tomatoes, green peppers, onions", sizes: [{ size: "Sm", price: "$10" }, { size: "Med", price: "$14" }, { size: "Lg", price: "$17" }, { size: "XL", price: "$20" }] },
      { name: "Cheese Burger", description: "Ground beef, bacon, tomato, onion, pickles", sizes: [{ size: "Sm", price: "$13" }, { size: "Med", price: "$17" }, { size: "Lg", price: "$21" }, { size: "XL", price: "$25" }] },
      { name: "Mexican", description: "Ground beef, onions, jalapeños", sizes: [{ size: "Sm", price: "$12" }, { size: "Med", price: "$15" }, { size: "Lg", price: "$18" }, { size: "XL", price: "$21" }] },
      { name: "BBQ Chicken", description: "With bbq sauce & chicken", sizes: [{ size: "Sm", price: "$12" }, { size: "Med", price: "$15" }, { size: "Lg", price: "$18" }, { size: "XL", price: "$21" }] },
    ],
  },
  {
    category: "Build Your Own Pizza",
    items: [
      { name: "Small", description: "Sauce & cheese included — toppings $1.00 each", price: "$8.99" },
      { name: "Medium", description: "Sauce & cheese included — toppings $1.50 each", price: "$10.99" },
      { name: "Large", description: "Sauce & cheese included — toppings $1.75 each", price: "$13.99" },
      { name: "Extra Large", description: "Sauce & cheese included — toppings $2.00 each", price: "$16.99" },
    ],
  },
  {
    category: "Toppings",
    items: [
      { name: "Mushrooms", price: "$1.00" },
      { name: "Onions", price: "$1.00" },
      { name: "Pineapple", price: "$1.00" },
      { name: "Black Olives", price: "$1.00" },
      { name: "Green Olives", price: "$1.00" },
      { name: "Jalapeños", price: "$1.00" },
      { name: "Banana Peppers", price: "$1.50" },
      { name: "Green Peppers", price: "$1.50" },
      { name: "Sun Dried Tomatoes", price: "$1.50" },
      { name: "Fresh Tomatoes", price: "$1.50" },
      { name: "Roasted Red Peppers", price: "$1.75" },
      { name: "Extra Cheese", price: "$1.75" },
      { name: "Parmesan Cheese", price: "$1.75" },
      { name: "Ground Beef", price: "$1.75" },
      { name: "Chicken", price: "$1.75" },
      { name: "Ham", description: "Counts as two", price: "$2.00" },
      { name: "Bacon", description: "Counts as two", price: "$2.00" },
    ],
  },
  {
    category: "Dipping Sauces",
    items: [
      { name: "Cheddar Chipotle", price: "$1.50" },
      { name: "Creamy Garlic", price: "$1.50" },
      { name: "Ranch", price: "$1.50" },
      { name: "BBQ", price: "$1.50" },
      { name: "Marinara", price: "$1.50" },
      { name: "Gravy", price: "$1.50" },
      { name: "Hot Honey Garlic", price: "$1.50" },
      { name: "Mayo", price: "$1.50" },
      { name: "Plum", price: "$1.50" },
      { name: "Fire & Ice", price: "$1.50" },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Fries", sizes: [{ size: "Sm", price: "$4" }, { size: "Lg", price: "$7" }] },
      { name: "Onion Rings", price: "$5.00" },
      { name: "Potato Wedges", price: "$5.00" },
      { name: "Fry Bread", price: "$2.00" },
      { name: "Side of Rice", price: "$4.00" },
      { name: "Side of Beans", price: "$4.00" },
      { name: "Side of Rice and Beans", price: "$6.00" },
      { name: "Corn Soup", sizes: [{ size: "Sm", price: "$6" }, { size: "Lg", price: "$10" }] },
      { name: "Taters", price: "$5.00" },
      { name: "Coleslaw", price: "$3.00" },
      { name: "1 Piece Chicken Finger", price: "$3.00" },
    ],
  },
  {
    category: "Breakfast & Lunch",
    items: [
      { name: "Breakfast Sandwich", price: "$5.00", description: "English muffin, egg, cheddar cheese, choice of bacon, ham or sausage" },
      { name: "Breakfast BLT", price: "$9.00", description: "2 eggs, bacon, lettuce, tomato, and mayo on a classic bun" },
      { name: "Breakfast Wrap", price: "$10.00", description: "2 scrambled eggs, taters, marble cheese, choice of bacon, ham or sausage" },
      { name: "Loaded Taters", price: "$8.00", description: "Crispy taters, marble cheese, bacon crumble, tomato and sour cream" },
      { name: "Chicken Caesar Wrap", price: "$10.00", description: "Romaine lettuce, croutons, bacon bits, caesar dressing" },
      { name: "BLT", price: "$8.00", description: "Bacon, lettuce, tomato on a classic bun" },
      { name: "Jumbo Hot Dogs", price: "$5.00", description: "Toppings: lettuce, tomato, jalapeños, sauerkraut, relish, onions, banana peppers, pickles. Sauces: hot, BBQ, ranch, mustard, mayo, ketchup. Add cheese +$1.50, chili +$2.50, sauté onions +$1.00" },
    ],
  },
  {
    category: "Burgers & Sandwiches",
    items: [
      { name: "Hamburger", price: "$10.00", description: "Topped with lettuce, onions, tomatoes, ketchup, and mayo on a brioche bun. Comes with fries" },
      { name: "Cheeseburger", price: "$13.00", description: "Topped with lettuce, onions, tomatoes, ketchup, and mayo on a brioche bun. Comes with fries" },
      { name: "Bacon Cheeseburger", price: "$15.00", description: "Topped with lettuce, onions, tomatoes, ketchup, and mayo on a brioche bun. Comes with fries" },
      { name: "Crispy Chicken Burger", price: "$13.00", description: "Topped with lettuce and mayo on a classic burger bun. Comes with fries" },
      { name: "Chicken Ranch Sandwich", price: "$14.00", description: "Shredded chicken, cheddar cheese, lettuce, tomato, and ranch dressing on a classic bun. Comes with fries" },
      { name: "Salt Pork Sandwich", price: "$10.00", description: "Crispy salt pork on fry bread with your choice of toppings and sauces. Comes with fries" },
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
      { name: "Garlic Bread", sizes: [{ size: "Sm", price: "$4" }, { size: "Lg", price: "$7" }] },
    ],
  },
  {
    category: "Tacos",
    items: [
      { name: "Indian Fry Bread Taco", sizes: [{ size: "Sm", price: "$8" }, { size: "Lg", price: "$13" }], description: "Fry bread, chili, marble cheese, lettuce, tomatoes, and sour cream" },
      { name: "Fried Tacos", price: "$10.00", description: "Four chicken or beef tacos on corn tortilla. Served with coleslaw, sour cream and salsa" },
      { name: "Mexican Tacos", price: "$4.00", description: "Chicken, brisket, pulled pork or carne asada. Corn tortilla, tomato, onions, cilantro, lemon wedge. Hot or mild sauce" },
      { name: "Taco Fries", sizes: [{ size: "Sm", price: "$10" }, { size: "Lg", price: "$14" }], description: "Crispy fries topped with tomatoes, onions, cilantro, hot or mild sauce, your choice of protein" },
      { name: "Nachos", sizes: [{ size: "Sm", price: "$10" }, { size: "Lg", price: "$15" }], description: "Marble cheese, onions, green peppers, tomatoes served with salsa and sour cream. Add chicken or chili Sm +$4 / Lg +$6" },
      { name: "Chicken Quesadilla", price: "$12.00", description: "Chicken and cheese. Served with sour cream and salsa" },
      { name: "Deluxe Quesadilla", price: "$14.00", description: "Chicken, cheese, onions, green peppers, tomatoes. Served with sour cream and salsa" },
      { name: "Birria Tacos", price: "$6.00", description: "2 corn tortillas with mozzarella cheese, cilantro and onions. Served with birria sauce. Or 3 for $16" },
      { name: "Burrito", sizes: [{ size: "Sm", price: "$13" }, { size: "Lg", price: "$18" }], description: "Choose from: chicken, brisket, pulled pork, carne azada. Toppings: rice, beans, tomatoes, green peppers, onions, lettuce, jalapeños, corn, cilantro, hot peppers. Sauces: sour cream, salsa, mayo, hot taco sauce, mild taco sauce, tequila lime sauce" },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Chili", sizes: [{ size: "Sm", price: "$10" }, { size: "Lg", price: "$16" }], description: "Served with garlic bread" },
      { name: "Poutine", sizes: [{ size: "Sm", price: "$7" }, { size: "Lg", price: "$10" }] },
      { name: "Wedges Poutine", sizes: [{ size: "Sm", price: "$9" }, { size: "Lg", price: "$12" }] },
      { name: "Chili Cheese Fries", sizes: [{ size: "Sm", price: "$9" }, { size: "Lg", price: "$13" }] },
      { name: "3 Chicken Fingers & Fries", price: "$10.00", description: "Served with plum sauce" },
      { name: "Baked or Fried Panzerotti", sizes: [{ size: "Sm", price: "$12" }, { size: "Lg", price: "$16" }], description: "Choice of 4 toppings" },
      { name: "Caesar Salad", price: "$6.00" },
      { name: "Garden Salad", price: "$6.00", description: "With italian dressing" },
      { name: "Garlic Bread", sizes: [{ size: "Sm", price: "$4" }, { size: "Lg", price: "$7" }] },
      { name: "Add Cheese", sizes: [{ size: "Sm", price: "$2" }, { size: "Lg", price: "$4" }] },
    ],
  },
];