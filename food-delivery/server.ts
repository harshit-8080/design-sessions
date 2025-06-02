import { Customer } from "./src/1-customer/Customer";
import { Address } from "./src/2-address/Address";
import { RestaurantAdmin } from "./src/3-restaurant/RestaurantAdmin";
import { Restaurant } from "./src/3-restaurant/Resturant";
import { Menu } from "./src/4-menu/Menu";
import {
  CheeseDecorator,
  ExtraCheeseDecorator,
  baseMenu,
} from "./src/4-menu/MenuDecorator";
import { FoodBrowse } from "./src/7-food-browsing/FoodBrowse";
import { SortByRating } from "./src/7-food-browsing/SortStrategy";
import { UpiStrategy } from "./src/8-payment/3-strategy";
import { PaymentProcessor } from "./src/8-payment/4-paymentProcesssor";
import { OrderStatus } from "./src/utils/enum";

const restro = new Restaurant("restro1", true, "delhi");

const pizza = new Menu(
  "gg pizza",
  400,
  4.5,
  true,
  "best pizza",
  "veg",
  restro.restaurantId,
  30,
);

const butterChicken = new Menu(
  "butterChicken",
  200,
  4.7,
  true,
  "best butterChicken",
  "non-veg",
  restro.restaurantId,
  50,
);

const restroAdmin = new RestaurantAdmin("admin", restro);
restroAdmin.addMenuItem(pizza);
restroAdmin.addMenuItem(butterChicken);

// customer -----
const harshit = new Customer("Harshit", "harshit@gmail.com", "9977");
const harshit_home_address = new Address(
  "sp road",
  "delhi",
  602732,
  harshit.userId,
);

harshit.addNewAddress(harshit_home_address);
harshit.setCurrentAddress(harshit_home_address);

// food browsing
const foodBrowser_sort = new FoodBrowse(new SortByRating());
const results = foodBrowser_sort.browse(restro.menuList);
// console.log(results);

// ---- add item to my cart

const cheesePizza = new CheeseDecorator(pizza);
const baseButterChicken = new ExtraCheeseDecorator(butterChicken);

harshit.cart.addToCart(cheesePizza, 2); /// 820
harshit.cart.addToCart(baseButterChicken, 1); // 220

console.log("Cart total --> ", harshit.cart.totalAmount);

// place the order
const harshit_order = harshit.placeOrder();
console.log("Order Status: -> ", harshit_order.orderStatus);

// order PREPARED
harshit_order.updateOrderStatus(OrderStatus.PREPARED);
console.log("Order Status: -> ", harshit_order.orderStatus);

// order OUT_FOR_DELIVERY
harshit_order.updateOrderStatus(OrderStatus.OUT_FOR_DELIVERY);
console.log("Order Status: -> ", harshit_order.orderStatus);

// payment
const payment = new PaymentProcessor(
  new UpiStrategy(),
  harshit_order.totalAmount,
  harshit_order.orderId,
  harshit_order.userId,
);
payment.process();
