import { years } from '@/app/constants';

export default async function ResultPage({ params }) {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/vehicles/GetModelsForMakeIdYear/makeId/${params?.slug?.[0]}/modelyear/${params?.slug?.[1]}?format=json`
  );
  let filteredData = await data.json();

  return (
    <div className="p-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Filtered Results are here for you ...
      </h1>
      <div className="overflow-x-auto">
        <table className="w-600 bg-grey border border-gray-300 m-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border-b">Make ID</th>
              <th className="py-2 px-4 border-b">Make Name</th>
              <th className="py-2 px-4 border-b">Model ID</th>
              <th className="py-2 px-4 border-b">Model Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.Results?.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.Make_ID}</td>
                <td className="py-2 px-4 border-b">{item.Make_Name}</td>
                <td className="py-2 px-4 border-b">{item.Model_ID}</td>
                <td className="py-2 px-4 border-b">{item.Model_Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const vehicleMakes = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/vehicles/GetMakesForVehicleType/car?format=json`
  ).then(res => res.json());

  const paths = [];

  for (const make of vehicleMakes?.Results) {
    years.forEach(year => {
      paths.push({
        params: {
          makeId: make.MakeId.toString(),
          year: year.value,
        },
      });
    });
  }

  return paths;
}
