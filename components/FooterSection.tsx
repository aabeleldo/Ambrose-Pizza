export default function FooterSection() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-10 px-6 text-center">
      <p className="text-red-500 font-serif text-2xl font-bold mb-1">Ambrose Pizza</p>
      <p className="text-neutral-600 text-sm mb-4">Authentic • Homemade • Fresh</p>
      <div className="flex justify-center gap-6 text-neutral-500 text-sm mb-6">
        <a href="#menu" className="hover:text-red-400 transition-colors">Menu</a>
        <a href="#order" className="hover:text-red-400 transition-colors">Order</a>
        <a href="#about" className="hover:text-red-400 transition-colors">About</a>
        <a href="#hours" className="hover:text-red-400 transition-colors">Hours</a>
      </div>
      <p className="text-neutral-700 text-xs">
        © {new Date().getFullYear()} Ambrose Pizza. All rights reserved.
      </p>
    </footer>
  );
}