import { Suspense } from 'react';
import Filtration from './components/Filtration/filtration';
import Loading from './components/Loading/loading';

export default async function Home() {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/vehicles/GetMakesForVehicleType/car?format=json`
  );
  let vehicleMakes = await data.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-8">
        Select your vehicle car make and model year
      </h1>
      <div>
        <Suspense fallback={<Loading />}>
          <Filtration vehicleMakes={vehicleMakes?.Results} />
        </Suspense>
      </div>
    </div>
  );
}
