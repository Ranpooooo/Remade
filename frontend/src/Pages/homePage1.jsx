import React from "react";
import placeholder from "../assets/Image1.jpg";

function HomePage1() {

  const Card = ({ title, description, link }) => (
    <a
      href={link}
      className="flex items-center justify-center bg-stone-900 rounded-lg shadow-md p-1 hover:shadow-xl h-20 transition-shadow outline outline-gray-800 cursor-pointer"
    >
      <div className="text-center">
        <h2 className="text-xs font-bold pt-12 text-white">{title}</h2>
        <p className="text-white mt-1">{}</p>
      </div>
    </a>
  );
  
  const Item = ({itemName}) => (

    <div className="grid grid-cols-10 grid-rows-4 gap-3 p-4 bg-white h-10 mt-3">  
      <h1 className="text-cyan-400">{itemName}</h1>
    </div>

  );

  
  return (
    <div className="bg-black min-h-screen">
      <section
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `linear-gradient(to top, #000000, #00000000), url('${placeholder}')`,
        }}
      >
        <h1 className="text-5xl font-bold">Donate!</h1>
        <p className="mt-4 text-lg">Feel Free To Help Out</p>
      </section>


    
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            <Card
              link=""
              title="Feature"
              description="This section highlights the first feature of your app."
            />
            <Card
              link=""
              title="Feature"
              description="Add more details here to make this card engaging."
            />

            <Card
              link=""
              title="Feature"
              description="Every card can have unique content to showcase your app."
            />

             <Card
              title="Feature"
              description="Every card can have unique content to showcase your app."
            />

              <Card
              link=""
              title="Feature"
              description="Every card can have unique content to showcase your app."
            />

              <Card
              link=""
              title="Feature"
              description="Every card can have unique content to showcase your app."
            />

              <Card
              link=""
              title="Feature"
              description="Every card can have unique content to showcase your app."
              />
          </div>
        </div>
      </section>


      <section className="bg-black text-white py-16 text-center min-h-[1000px]">
        <h2 className="text-3xl font-bold">Items</h2>
        <p className="mt-4">
          Join us today and enjoy all the amazing features we offer.
        </p>
        

        <div className="py-12 px-6 max-w-44 mx-auto">
        <Item
        itemName = "wow"
        /> 
   
        <Item
        itemName = "wow"
        /> 


        <Item
        itemName = "wow"
        /> 
   
   
        </div>
      </section>
    </div>
  );
}





export default HomePage1;
