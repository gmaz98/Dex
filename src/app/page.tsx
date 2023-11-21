import Header from './components/Header';
import Swap from './components/Swap';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <Swap />
      </div>
    </div>
  );
}
