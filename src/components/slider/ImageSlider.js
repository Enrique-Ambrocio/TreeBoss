import Image from "next/image";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

export default function ImageSlider() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      const Images = [
        '/Image8.jpeg',
        '/Image7.jpeg',
        '/Image6.jpeg',
        '/Image5.jpeg',
        '/Image1.jpeg',
        '/Image2.jpeg',
      ]

  return (
    <div>
    <Carousel responsive={responsive} ssr={true} showDots={true} draggable={false} containerClass="container-with-dots" itemClass="image-item">
    {Images.map((image)=>{
        return (
            <Image src={image} alt={image} width={400} height={400} key={image}/>
        )
    })}
    </Carousel>
    </div>
  )
}
