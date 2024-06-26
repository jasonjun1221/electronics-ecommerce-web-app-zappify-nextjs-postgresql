import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";

const cartItems = [
  {
    id: 1,
    name: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
    price: 598,
    image: "/imac-front.svg",
    quantity: 2,
  },
  {
    id: 2,
    name: 'Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black',
    price: 1799,
    image: "/imac-front.svg",
    quantity: 1,
  },
  {
    id: 3,
    name: 'Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold',
    price: 699,
    image: "/imac-front.svg",
    quantity: 1,
  },
  {
    id: 4,
    name: "APPLE iPhone 15 5G phone, 256GB, Gold",
    price: 2997,
    image: "/imac-front.svg",
    quantity: 1,
  },
  {
    id: 5,
    name: "APPLE iPhone 15 5G phone, 256GB, Gold, 2, 2997",
    price: 2997,
    image: "/imac-front.svg",
    quantity: 1,
  },
];

export default function CartPage() {
  return (
    <section className="mx-auto max-w-screen-xl py-8">
      <h2 className="text-2xl font-semibold">Shopping Cart</h2>

      <div className="mt-8 flex items-start gap-8">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <OrderSummary />
      </div>
    </section>
  );
}
