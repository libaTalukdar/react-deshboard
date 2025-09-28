import { FaBatteryFull, FaHackerrank, FaShoppingCart } from "react-icons/fa"
import { FaCircleQuestion } from "react-icons/fa6"
// import { FiExternalLink } from "react-icons/fi"

 export const SalesData = [
    {
        id:1,
        // icon: 'FaHackerrank',
        icon:<FaHackerrank className="w-[40px] h-[40px]"/>,
        count:"$5k",
        title:"Total Sales",
        description:"50% from yesterday",
        color:"#98F5F9"

    },
    {
        id:2,
        icon:<FaBatteryFull className="w-[40px] h-[40px]"/>,
        count:"$5k",
        title:"Total order",
        description:"50% from yesterday",
        color:"#060270"

    },
    {
        id:3,
        icon:<FaShoppingCart className="w-[40px] h-[40px]"/>,
        count:"$5k",
        title:"Product Sold",
        description:"40% from yesterday",
        color:"#BFD641"

    },
    {
        id:4,
        icon:<FaShoppingCart className="w-[40px] h-[40px]"/>,
        
        count:"$5k",
        title:"New Customer",
        description:"60% from yesterday",
        color:"#EFC3CA"

    }
    

]

export const topProductsData = [
    {
      id: 1,
      name: "Home Decor Range",
      priority: 90,
      color: "#FEB95A",
    },
    {
      id: 2,
      name: "Disney Princess Dress",
      priority: 80,
      color: "#A9DFD8",
    },
    {
      id: 3,
      name: "Bathroom Essentials",
      priority: 60,
      color: "#28AEF3",
    },
    {
      id: 4,
      name: "Apple Smartwatch",
      priority: 40,
      color: "#F2C8ED",
    },
  ];
  export const ordersList = [
    {
      id: 1,
      customerName: "John Doe",
      date: "2025-03-25",
      paymentMessage: "Success",
      total: 120.5,
      items: ["Coffee", "Bagel"],
      delivery: "Delivered",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      date: "2025-03-24",
      paymentMessage: "Pending",
      total: 45.0,
      items: ["Latte", "Sandwich"],
      delivery: "In Transit",
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      date: "2025-03-23",
      paymentMessage: "Success",
      total: 78.25,
      items: ["Espresso", "Croissant"],
      delivery: "Delivered",
    },
    {
      id: 4,
      customerName: "Michael Brown",
      date: "2025-03-22",
      paymentMessage: "Pending",
      total: 30.99,
      items: ["Cappuccino"],
      delivery: "Pending",
    },
    {
      id: 5,
      customerName: "Emily Davis",
      date: "2025-03-21",
      paymentMessage: "Success",
      total: 95.75,
      items: ["Americano", "Muffin"],
      delivery: "Out for Delivery",
    },
    {
      id: 6,
      customerName: "Chris Wilson",
      date: "2025-03-20",
      paymentMessage: "Pending",
      total: 110.0,
      items: ["Mocha", "Brownie"],
      delivery: "Shipped",
    },
    {
      id: 7,
      customerName: "Olivia Martinez",
      date: "2025-03-19",
      paymentMessage: "Success",
      total: 50.5,
      items: ["Tea", "Scone"],
      delivery: "Pending",
    },
    {
      id: 8,
      customerName: "William Anderson",
      date: "2025-03-18",
      paymentMessage: "Pending",
      total: 75.99,
      items: ["Macchiato", "Danish"],
      delivery: "Delivered",
    },
    {
      id: 9,
      customerName: "Sophia Thomas",
      date: "2025-03-17",
      paymentMessage: "Success",
      total: 60.25,
      items: ["Flat White", "Toast"],
      delivery: "In Transit",
    },
    {
      id: 10,
      customerName: "Daniel Garcia",
      date: "2025-03-16",
      paymentMessage: "Pending",
      total: 35.5,
      items: ["Hot Chocolate"],
      delivery: "Pending",
    },
    {
      id: 11,
      customerName: "Ella Hernandez",
      date: "2025-03-15",
      paymentMessage: "Success",
      total: 89.75,
      items: ["Green Tea", "Cookies"],
      delivery: "Out for Delivery",
    },
    {
      id: 12,
      customerName: "James Lopez",
      date: "2025-03-14",
      paymentMessage: "Pending",
      total: 105.0,
      items: ["Iced Coffee", "Bagel"],
      delivery: "Shipped",
    },
    {
      id: 13,
      customerName: "Ava Gonzalez",
      date: "2025-03-13",
      paymentMessage: "Success",
      total: 55.5,
      items: ["Cortado", "Croissant"],
      delivery: "Pending",
    },
    {
      id: 14,
      customerName: "Benjamin Clark",
      date: "2025-03-12",
      paymentMessage: "Pending",
      total: 92.99,
      items: ["Matcha Latte", "Muffin"],
      delivery: "Delivered",
    },
    {
      id: 15,
      customerName: "Mia Rodriguez",
      date: "2025-03-11",
      paymentMessage: "Success",
      total: 68.25,
      items: ["Chai Latte", "Toast"],
      delivery: "In Transit",
    },
    {
      id: 16,
      customerName: "Henry Lewis",
      date: "2025-03-10",
      paymentMessage: "Pending",
      total: 40.5,
      items: ["Turmeric Latte"],
      delivery: "Pending",
    },
    {
      id: 17,
      customerName: "Charlotte Walker",
      date: "2025-03-09",
      paymentMessage: "Success",
      total: 99.75,
      items: ["Affogato", "Cookies"],
      delivery: "Out for Delivery",
    },
    {
      id: 18,
      customerName: "Lucas Hall",
      date: "2025-03-08",
      paymentMessage: "Pending",
      total: 112.0,
      items: ["Iced Tea", "Bagel"],
      delivery: "Shipped",
    },
    {
      id: 19,
      customerName: "Harper Allen",
      date: "2025-03-07",
      paymentMessage: "Success",
      total: 65.5,
      items: ["Ristretto", "Croissant"],
      delivery: "Pending",
    },
    {
      id: 20,
      customerName: "Jack Young",
      date: "2025-03-06",
      paymentMessage: "Pending",
      total: 85.99,
      items: ["Espresso", "Muffin"],
      delivery: "Delivered",
    },
  ];

 