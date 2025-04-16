import {Carousel} from "@/components/ui/carousel";
 
const Testimonial = () => {
    const slideData = [
        {
          name: "Rohan Mehta",
          place: "Mehta Finserve Pvt. Ltd.",
          review:
          "NimiDevelopers exceeded our expectations. Their team was professional, transparent, and delivered our office space on time with zero compromise on quality.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        },
        {
          name: "Ananya Sharma",
          place: "Freelancer (Homebuyer",
          review:
            "Buying my first home with NimiDevelopers was a breeze. From paperwork to possession, everything was handled smoothly. Highly recommend them!",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Rajiv Kapoor",
          place: "RK Architects",
          review: 
          "We’ve collaborated with many developers, but NimiDevelopers’ attention to detail and commitment to sustainable design really stands out.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Pooja Nair",
          place: "BloomTech Solutions",
          review: 
            "Our new commercial hub built by NimiDevelopers has helped us scale efficiently. The layout, quality, and post-handover support were fantastic.",
          src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Wade Warren",
          place: "USA, California",
          review: 
            "I’ve invested in two of their projects and both turned out to be great value for money. Transparent dealings and solid appreciation!",
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
