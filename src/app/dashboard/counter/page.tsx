import { CardCounter } from "@/shopping-cart/components";


export const metadata = {
  title: "Shopping Cart",
  description: "Un simple contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CardCounter value={20}/>
    </div>
  );
}
