import React, { useEffect } from "react";
import "../css/products-styles.css";
import dogFood1 from "../images/dog-food1.jpg";
import dogFood2 from "../images/pedigree.jpg";
import catFood1 from "../images/dog-food-3.jpg";
import catFood2 from "../images/cat-food-2.jpg";
import birdFood1 from "../images/bird-food-1.jpg";
import birdFood2 from "../images/bird-food-2.jpg";
import birdFood3 from "../images/bird-food-3.jpg";
import birdFood4 from "../images/bird-food-4.jpg";

const products = [
  {
    name: "Dog Bone",
    price: "$10.00",
    img: dogFood1,
    category: "dog",
  },
  {
    name: "Cat Kisses Chocos",
    price: "$10.00",
    img: catFood1,
    category: "cat",
  },
  {
    name: "Lentils for birds",
    price: "$10.00",
    img: birdFood1,
    category: "bird",
  },
  {
    name: "Worms",
    price: "$10.00",
    img: birdFood2,
    category: "bird",
  },
  {
    name: "Pedigree",
    price: "$10.00",
    img: dogFood2,
    category: "dog",
  },
  {
    name: "Cupcakes for cats",
    price: "$10.00",
    img: catFood2,
    category: "cat",
  },
  {
    name: "Almonds for birds",
    price: "$10.00",
    img: birdFood4,
    category: "bird",
  },
  {
    name: "Beans",
    price: "$10.00",
    img: birdFood3,
    category: "bird",
  },
];
export default function Products() {
  // const filters = ["All Products", "Cat Food", "Dog Food", "Bird Food"];

  const [activeFilter, setActiveFilter] = React.useState("all-products");
  console.log(activeFilter);

  const [filteredProducts, setFilteredProducts] = React.useState(products);

  useEffect(() => {
    if (activeFilter === "all-products") {
      setFilteredProducts(products);
    } else {
      const newProducts = products.filter(
        (prod) => prod.category === activeFilter
      );
      setFilteredProducts(newProducts);
    }
  }, [activeFilter]);

  return (
    <div className="prod-wrapper">
      <a href="#prod-container-skip" id="skip-link" tabIndex={1}>
        Skip to main content
      </a>
      <div className="prod-container" id="prod-container-skip">
        <div className="prod-heading">
          <h4>
            Our <span>Products</span>
          </h4>
          <h1>
            Reliable Healthy Food <br /> For Your Pet.
          </h1>
        </div>

        {/* {filters} */}
        <div className="prods-filters-div">
          <div className="prods-filters">
            <div
              onClick={() => setActiveFilter("all-products")}
              className="prod-filter" 
            >
              <button className="prod-botton-adjust" tabIndex={7}>All Products</button>
            </div>

            <div onClick={() => setActiveFilter("cat")} className="prod-filter" >
              <button className="prod-botton-adjust" tabIndex={8}>Cat Food</button>
            </div>

            <div onClick={() => setActiveFilter("dog")} className="prod-filter">
              <button className="prod-botton-adjust" tabIndex={9}>Dog Food</button>
            </div>

            <div
              onClick={() => setActiveFilter("bird")}
              className="prod-filter"
            >
              <button className="prod-botton-adjust" tabIndex={10}>Bird Food</button>
            </div>
          </div>

          {/* {products} */}
          <div className="prods">
            {/* {prod 1} */}
            {filteredProducts.map((prod) => (
              <div className="prod">
                <div className="prod-img">
                  <img src={prod.img} alt="food" height={200} width={200} />
                </div>
                <div className="prod-info">
                  <h4>{prod.name}</h4>
                  <h3>{prod.price}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
