const Header = () => {
  return (
    <header className="flex items-center space-x-20 px-5 py-5 font-bold h-100">
      <div>Image</div>
      <div className="p-10 px-15 rounded font-medium transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:cursor-pointer">
        Swap
      </div>
      <div className="p-10 px-15 rounded font-medium transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:cursor-pointer">
        Tokens
      </div>
      <div>Image</div>
      <div className="bg-blue-800 py-10 px-20 rounded-md font-bold hover:cursor-pointer hover:text-indigo-300 transition duration-300 ease-in-out">
        Connect
      </div>
    </header>
  );
};

export default Header;
