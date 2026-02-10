"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border border-gray-300 bg-[#ffffff]">
      <div className="mx-auto flex max-w-360 items-center gap-6 px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <img src="/img/pixel-cart-logo.png" alt="" width={150} />
        </Link>

        {/* Search */}
        <div className="hidden flex-1 md:flex">
          <div className="relative w-full max-w-lg">
            <img src="/img/search.svg" alt="" width={25} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40"/>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:ring-2 focus:ring-gray-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/categories" className="hover:text-blue-600">
            Categories
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link href="/cart" className="relative">
            <img src="/img/cart.svg" alt="" width={25} className="opacity-60"/>
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
              2
            </span>
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className="hidden items-center gap-1 rounded-lg border px-3 py-1.5 hover:bg-gray-100 sm:flex"
          >
            {/* <User size={18} /> */}
            <span>Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
