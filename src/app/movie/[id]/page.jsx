'use client'
import Image from "next/image";
const page = async ({ params }) => {
  const id = params.id
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '232d47ba56msh916ddb608209238p1304a4jsn9bc609ec4736',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result[0].details


  return (
    <div className=" overflow-hidden bg-gradient-to-b from-black to-red-800 pt-[50px]">
      <div className="px-1 py-2 w-full m-auto flex flex-wrap justify-around items-center max-w-[80%] gap-3">
      <div className="w-[100%]">
        <h1 className="text-4xl font-bold text-stone-200">Netflix \ <span className="text-red-600">{main_data.type}</span></h1>
        <br />
        <h1 className="py-2 text-xl md:text-5xl font-bold text-stone-300">{main_data.title}</h1>
        <Image src={main_data.backgroundImage.url} width={600} height={150} alt={main_data.title}
          className="rounded-md -hover:scale-110 duration-300 py-2" />
      </div>
      <p className="text-sm text-stone-400 pb-1 w-[90%] md:max-w-[70%]" >{main_data.synopsis}</p>
          </div>

      <div />
    </div>
  )
}

export default page