import { laptop } from "../assets";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img 
          className="w-[500px] mx-auto my-4"
          src={laptop} 
          alt="laptop image" 
        />
        <div>
          <p className="text-[#00df91] font-bold">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusantium in fugit possimus aspernatur pariatur tenetur? 
            Inventore accusantium beatae 
            illum est? Placeat nostrum cum voluptatem explicabo optio 
            exercitationem adipisci amet qui.
          </p>
          <button className="bg-black text-[#00df91] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics;