import { WidgetGrid } from "@/components";


export const metadata = {
 title: 'Dashboard Admin',
 description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información General</span>

      <WidgetGrid />
    </div>
  );
}