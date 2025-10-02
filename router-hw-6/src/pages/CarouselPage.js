import Carousel from '../components/Carousel'
import puppy_1 from '../assets/puppies/p1.webp'
import puppy_2 from '../assets/puppies/p2.jpeg'
import puppy_3 from '../assets/puppies/p3.webp'
import puppy_4 from '../assets/puppies/p4.jpg'
import puppy_5 from '../assets/puppies/p5.webp'
import kitten_1 from '../assets/kittens/k1.jpg'
import kitten_2 from '../assets/kittens/k2.webp'
import kitten_3 from '../assets/kittens/k3.jpg'
import kitten_4 from '../assets/kittens/k4.jpg'
import kitten_5 from '../assets/kittens/k5.jpg'

const CarouselPage = () => {
    const puppies = [puppy_1, puppy_2, puppy_3, puppy_4, puppy_5];
    const kittens = [kitten_1, kitten_2, kitten_3, kitten_4, kitten_5];

    return (
        <>
            <h1>Image Carousel Page</h1>
            <div>
                <Carousel items={puppies}/>
                <Carousel items={kittens}/>
            </div>
        </>
    );
}

export default CarouselPage;