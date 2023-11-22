import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <header className="mt-4 flex items-center justify-between space-x-20 px-5 py-5 font-bold h-100 border-solid border-y-2 border-zinc-600 mb-10">
      <img
        width={80}
        src="https://www.avatradeportuguese.com/wp-content/uploads/2022/10/what-is-a-currency-swap.png.webp"
      ></img>
      <Link href="/">
        <div className="p-10 px-15 rounded font-bold text-xl transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:cursor-pointer">
          Swap
        </div>
      </Link>
      <Link href="/tokens">
        <div className="p-10 px-15 rounded font-bold  text-xl transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:cursor-pointer">
          Tokens
        </div>
      </Link>
      <div>
        <ConnectButton></ConnectButton>
      </div>
    </header>
  );
};

export default Header;
