import {Carousel} from "@/components/ui/carousel";
 
const Testimonial = () => {
    const slideData = [
        {
          name: "Wade Warren",
          place: "USA, California",
          review: "Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt curabitur placerat. Eget eget ipsum pulvinar arcu nisi sed orci maecenas. Ridiculus venenatis interdum vitae.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        },
        {
          name: "Wade Warren",
          place: "USA, California",
          review: "Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt curabitur placerat. Eget eget ipsum pulvinar arcu nisi sed orci maecenas. Ridiculus venenatis interdum vitae.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Wade Warren",
          place: "USA, California",
          review: "Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt curabitur placerat. Eget eget ipsum pulvinar arcu nisi sed orci maecenas. Ridiculus venenatis interdum vitae.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Wade Warren",
          place: "USA, California",
          review: "Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt curabitur placerat. Eget eget ipsum pulvinar arcu nisi sed orci maecenas. Ridiculus venenatis interdum vitae.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Wade Warren",
          place: "USA, California",
          review: "Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt curabitur placerat. Eget eget ipsum pulvinar arcu nisi sed orci maecenas. Ridiculus venenatis interdum vitae.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Wade Warren",
          place: "USA, California",
          review: "Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt curabitur placerat. Eget eget ipsum pulvinar arcu nisi sed orci maecenas. Ridiculus venenatis interdum vitae.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        ];
  return (
    <div className="testimonial bg-[#283D68] md:px-20 px-10 py-20 relative overflow-hidden w-full h-full ">
    <Carousel slides={slideData} />
  </div>
  )
}

export default Testimonial
