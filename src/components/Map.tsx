import Form from "./Form"

const Map = () => {
  return (
    <div  className="flex flex-col md:flex-row gap-6 relative justify-center py-4 items-center bg-[#283D68] ">
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
         src=
         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.9842580341358!2d77.03551315385069!3d28.577325129222128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aeb7d8d192d%3A0x8fd7a6d09c7e455c!2sNIMI%20GROUP!5e0!3m2!1sen!2sin!4v1742303871361!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px] sm:h-[350px] md:h-[500px] rounded-lg"
      ></iframe>
    </div>
    <Form />
  </div>
  )
}

export default Map
