import Carousel from '../components/Carousel'
import puppy_1 from '../assets/puppy_images/puppy_1.jpg'
import puppy_2 from '../assets/puppy_images/puppy_2.jpg'
import puppy_3 from '../assets/puppy_images/puppy_3.jpg'
import puppy_4 from '../assets/puppy_images/puppy_4.jpg'
import kitten_1 from '../assets/kitten_images/kitten_1.jpg'
import kitten_2 from '../assets/kitten_images/kitten_2.jpg'
import kitten_3 from '../assets/kitten_images/kitten_3.jpg'
import kitten_4 from '../assets/kitten_images/kitten_4.jpg'

const CarouselPage = () => {
    const puppies = [puppy_1, puppy_2, puppy_3, puppy_4];
    const kittens = [kitten_1, kitten_2, kitten_3, kitten_4];
    return (
        <>
            <h1>Carousel Page</h1>
            <div>
                <Carousel items={puppies} />
                <Carousel items={kittens} />
            </div>
        </>
    );
}

export default CarouselPage;