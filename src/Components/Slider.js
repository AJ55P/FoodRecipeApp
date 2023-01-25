import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export function Slider({breakfastItems}) {
  let splide_slides = breakfastItems.map((item) => {
    return <SplideSlide varia-labelledby="Random Breakfast Dishes" key={item.id}>
      <div className="rounded-md hover:scale-105 cursor-pointer relative">
        <div>
          <img className="object-cover rounded-md w-full h-full" src={item.image} alt={`tasty breakfast item # ${item.id}`}/>
        </div>
        <p className="text-center text-sm" >{item.title}</p>
      </div>
    </SplideSlide>;
  });
  return (
    <Splide options={ {perPage: 4, gap: '2rem', arrows: false, pagination: false, drag: 'free'} } aria-label="">
      {splide_slides}
    </Splide>
  );
}