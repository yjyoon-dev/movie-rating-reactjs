import './App.css';
import PropTypes from 'prop-types';

function Print({name, image, rating}) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} />
      <h4>{rating}</h4>
    </div>
  );
}

Print.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const favList = [
  {
    id:1,
    name:"fromis9",
    image:"https://storage3.ilyo.co.kr/contents/article/images/2020/0917/1600316908454180.jpg",
    rating:4.9
  },
  {
    id:2,
    name:"bravegirls",
    image:"https://img.sportsworldi.com/content/image/2021/03/20/20210320505771.jpg",
    rating:5.0
  },
  {
    id:3,
    name:"rollin",
    image:"https://image.ytn.co.kr/general/jpg/2021/0304/202103041352125044_d.jpg",
    rating:5.0
  }
];

function rendorFav(fav) {
  return <Print name={fav.name} image={fav.image} rating={fav.rating}/>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {favList.map(rendorFav)}
    </div>
  );
}


export default App;
