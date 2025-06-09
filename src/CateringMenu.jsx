import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import meatCheesePlatter from "../assets/Images/catering/meat-cheese.jpg";
import supremeCombo from "../assets/Images/catering/supreme-combo.jpg";
import cookiePlatter from "../assets/Images/catering/cookie-platter.jpg";
import loxPlatter from "../assets/Images/catering/fish-platter.jpg";
import fruitPlatter from "../assets/Images/catering/fruit-platter.jpg";
import wrapPlatter from "../assets/Images/catering/wrap-platter.jpg";

const sections = {
  "Lunch Buffet Menu": [
    {
      id: 1,
      photo: meatCheesePlatter,
      name: "Meat & Cheese Platters",
      description:
        "Your choice of meats: fresh roasted turkey, roast beef, first cut corned beef, first cut pastrami, ham, Kosher salami. Your choice of cheese: provolone, muenster, Swiss, American, and cheddar, served with our potato salad, coleslaw, sliced tomatoes, green & black olives, Kosher pickles, mustard, mayonnaise, Russian dressings and assorted breads. (Minimum 15 people)",
      fullRow: true, // This item spans a full row
    },
    {
      id: 5,
      photo: supremeCombo,
      name: "Supreme Combination Platter",
      description:
        "Assorted sandwiches, wraps and clubs. Served with our own potato salad, coleslaw, Kosher pickles, lettuce, sliced tomatoes, green & black olives, mayonnaise, Russian dressing, and mustard.",
      fullRow: false, // This item does not span a full row
    },
    {
      id: 9,
      photo: wrapPlatter,
      name: "Woodside Wraps",
      description:
        "Smoked turkey, rare roast beef or vegetable rolled into tortillas with lettuce, tomato, onion, cucumber and herb spread. Served with vegetable pasta salad and coleslaw.",
      fullRow: false,
    },
    {
      id: 2,
      name: "Sandwich Platters",
      description:
        "Your choice of meats: fresh roasted turkey, roast beef, first cut corned beef, first cut pastrami, ham, Kosher salami. Your choice of cheese: provolone, muenster, Swiss, American, and cheddar, served with our potato salad, coleslaw, sliced tomatoes, green & black olives, Kosher pickles, mustard, mayonnaise, Russian dressing and assorted breads. (Minimum 15 people)",
      fullRow: false,
    },
    {
      id: 3,
      name: "Meat Platters",
      description:
        "Your choice of meats: fresh roasted turkey, roast beef, first cut corned beef, first cut pastrami, ham, Kosher salami served with our own potato salad, coleslaw, sliced tomatoes, green & black olives, Kosher pickles, mustard, mayonnaise, Russian dressing, and assorted bread. (Minimum 15 people)",
      fullRow: false,
    },
    {
      id: 4,
      name: "Sub Platters",
      description:
        "Italian style, Kosher style or choice of any combination on sandwich platter.",
      fullRow: false,
    },
    {
      id: 6,
      name: "Mediterranean Combination",
      description:
        "Fallafal (chick pea & veggie patties) baba ghanoush (egg plant salad), hummus (chick pea dip), Tahini (sesame dressing), salad (chopped tomatoes, cucumbers, onions, green peppers in lemon and olive oil marinated), Served with pita bread.",
      fullRow: false,
    },
    {
      id: 7,
      name: "Assorted Salad Platter",
      description:
        "Your choice of tuna salad, chicken salad, egg salad, shrimp salad, chopped liver, and Whitefish salad. Served with our potato salad, coleslaw, and assorted bread and rolls. Garnished with lettuce, tomatoes, and green & black olives.",
      fullRow: false,
    },
    {
      id: 8,
      name: "Boxed Lunches",
      description:
        "Served with a sandwich, chips, cookie, and pickle with drink.",
      fullRow: false,
    },
    {
      id: 10,
      name: "Woodside Club Platter",
      description:
        "Assorted tuna, ham and combo clubs sandwiches. Served with our own potato salad, coleslaw, Kosher pickles, lettuce, sliced tomatoes, green & black olives, mayonnaise, Russian dressing, and mustard.",
      fullRow: false,
    },
    {
      id: 11,
      name: "Six Foot Italian Cold Cut Subs",
      description:
        "Ham, mortadella, genoa salami, provolone cheese, lettuce and tomatoes, oil, and vinegar, mayonnaise, onions, hot peppers served on the side. Serves approximately 20-25 people.",
      fullRow: false,
    },
    {
      id: 12,
      name: "Six Foot Kosher Style Subs",
      description:
        "Roast Beef, corned beef, oven roasted turkey, Swiss cheese, lettuce, tomatoes, mayonnaise, mustard, and onions served on the side. Serves approximately 20-25 people.",
      fullRow: true,
    },
  ],
  "Appetizers and Salads": [
    {
      id: 13,
      name: "Finger Sandwiches",
      description: "Chicken salad, tuna salad, egg salad.",
      fullRow: false,
    },
    {
      id: 14,
      name: "Chicken Tenders",
      description: "Chicken Tenders.",
      fullRow: false,
    },
    {
      id: 15,
      name: "Garlic Tomato, & Mozzarella Bruschetta",
      description: "",
      fullRow: false,
    },
    {
      id: 16,
      name: "Nova Salmon Fingers",
      description: "Nova Salmon on bread with scallion spread.",
      fullRow: false,
    },
    {
      id: 17,
      name: "Grilled Chicken Salad Cheese",
      description:
        "Grilled Chicken served over a bed of lettuce, tomatoes, cucumbers, croutons.",
      fullRow: false,
    },
    {
      id: 18,
      name: "Cobb Salad",
      description:
        "Chargrilled chicken served over a bed of lettuce, bacon, avocado, tomatoes, cucumbers, cheese, and choice of dressing.",
      fullRow: false,
    },
    {
      id: 19,
      name: "Greek Salad",
      description:
        "Lettuce topped with Feta Cheese, tomatoes, cucumbers, olives, and pepperoncini peppers, served with our Greek vinaigrette dressing.",
      fullRow: false,
    },
    {
      id: 20,
      name: "Chef Salad",
      description:
        "Pit ham, turkey, Swiss cheese and provolone cheese served over a bed of lettuce, tomatoes, cabbage and green peppers. Served with your choice of dressing.",
      fullRow: false,
    },
    {
      id: 21,
      name: "Italian Cold Cut Salad",
      description:
        "Italian cold cuts and provolone cheese served over a bed of lettuce, tomatoes and green peppers. Served with your choice of dressing.",
      fullRow: false,
    },
    {
      id: 22,
      name: "Caesar Salad",
      description:
        "Fresh cut Romaine lettuce served with Caesar dressing, croutons, and parmesan cheese.",
      fullRow: false,
    },
    {
      id: 23,
      name: "Tossed Baby Greens and Mesculin",
      description:
        "Choose two dressings: honey mustard, ranch, low fat ranch, vinaigrette, Russian, blue cheese.",
      fullRow: false,
    },
    {
      id: 24,
      name: "Fresh Fruit Display",
      description: "Seasonal.",
      fullRow: false,
    },
    {
      id: 25,
      name: "Mediterranean Sampler",
      description: "Baba ghanoush, hummus, and pita bread.",
      fullRow: false,
    },
    {
      id: 26,
      name: "Vegetable & Cheese Platter",
      description:
        "A great combination of the vegetable tray and assorted cheese platter.",
      fullRow: false,
    },
    {
      id: 27,
      name: "Assorted Cheese Platter",
      description:
        "Your choice of cheese: provolone, muenster, Swiss, American, and cheddar. Garnished with fresh fruit and served with assorted crackers.",
      fullRow: false,
    },
    {
      id: 28,
      name: "Veggie Platter",
      description:
        "Garnished attractively to compliment your buffet or dinner table. Broccoli, celery, carrots, cauliflower, cherry tomatoes, radishes, mushrooms, and cucumber. Served with California onion dip.",
      fullRow: false,
    },
  ],
  Entrees: [
    {
      id: 29,
      name: "Meat Loaf",
      description:
        "Choose from ground beef or ground turkey. Served with mashed potatoes, gravy, a garden salad and fresh baked rolls.",
      fullRow: false,
    },
    {
      id: 30,
      name: "Chicken Tenderloin",
      description:
        "Strips of chicken tenders smothered in a mushroom gravy served with garlic whipped potatoes and your choice of vegetable.",
      fullRow: false,
    },
    {
      id: 31,
      name: "Oven Roasted Chicken",
      description:
        "Choose from herb seasoned or barbecued; served with rosemary potatoes, a garden salad and fresh baked rolls.",
      fullRow: false,
    },
    {
      id: 32,
      name: "Taco and Burrito",
      description:
        "Spicy beef, Southwestern chicken and peppers, refried beans, cheddar cheese, diced tomatoes, diced onions, black olives, salsa, guacamole, sour cream, soft taco and tortilla shells.",
      fullRow: false,
    },
    {
      id: 33,
      name: "Lasagna",
      description:
        "Choose from meat or vegetable; served with a Caesar salad and garlic bread.",
      fullRow: false,
    },
    {
      id: 34,
      name: "Brisket Dinner",
      description:
        "Served with oven roasted potatoes, with a garden salad, fresh rolls and butter.",
      fullRow: false,
    },
    {
      id: 35,
      name: "Grilled Chicken Breast",
      description:
        "Choose from lemon chicken, orange chicken or barbecued chicken served over confetti rice with fresh rolls and butter.",
      fullRow: false,
    },
    {
      id: 36,
      name: "Spaghetti and Meatballs",
      description:
        "A traditional classic served with a tossed salad and your choice of dressing and garlic bread.",
      fullRow: false,
    },
    {
      id: 37,
      name: "Baked Ziti",
      description: "Served with Caesar salad and dressing.",
      fullRow: false,
    },
    {
      id: 38,
      name: "Pulled Barbeque Chicken or Beef Sandwiches",
      description: "Served with coleslaw, potato salad, and kaiser rolls.",
      fullRow: false,
    },
    {
      id: 39,
      name: "Grilled or Poached Salmon In Dill Sauce",
      description: "Served with rice and a dinner roll basket.",
      fullRow: false,
    },
    {
      id: 40,
      name: "Israeli Style Schnitzel",
      description:
        "Thinly sliced breaded chicken breast served with roasted rosemary potatoes, grilled vegetables and dinner rolls.",
      fullRow: false,
    },
    {
      id: 41,
      name: "Kabob Dinner",
      description:
        "Choice of chicken or vegetable served with rice and dinner rolls.",
      fullRow: true,
    },
  ],
  "Breakfast and Brunch Favorites": [
    {
      id: 44,
      name: "Lox Cream Cheese and Bagel Platter",
      description:
        "Nova lox, assorted cream cheese, muenster, Swiss cheese, Bermuda onion, sliced tomatoes, sliced cucumbers, green & black olives and assorted bagels.",
      fullRow: true,
      photo: loxPlatter,
    },
    {
      id: 42,
      name: "Continental Breakfast",
      description:
        "With assorted muffins and danish $5.95 per person Assorted cream cheese, sliced tomatoes. Bermuda onions, sliced cucumbers, green & black olives, and assorted bagels.",
      fullRow: false,
    },
    {
      id: 43,
      name: "Deluxe Continental Breakfast",
      description:
        "Assorted bagels and cream cheese, assorted muffins and danish with fresh fruit.",
      fullRow: false,
    },
    {
      id: 45,
      name: "Deluxe Smoked Fish And Cheese Platter",
      description:
        "Whitefish (filleted upon request) Whitefish salad, kippered Salmon and Nova lox. Served with assorted cream cheese, muenster, Swiss cheese, Bermuda onion, sliced tomatoes, sliced cucumbers, green & black olives and assorted bagels. (Upon request: Sable and Belly lox, 48 hours notice)",
      fullRow: false,
    },
    {
      id: 46,
      name: "Breakfast Box",
      description:
        "Fresh baked bagel or a muffin served with cream cheese, butter and a piece of fresh fruit.",
      fullRow: false,
    },
    {
      id: 47,
      name: "Woodside’s Hot Breakfast",
      description:
        "Scrambled eggs, assorted breakfast meats, homefries, and assorted toast.",
      fullRow: true,
    },
  ],
  "Dessert and Beverages": [
    {
      id: 49,
      name: "Cookie & Brownie Platter",
      description: "",
      fullRow: false,
      photo: cookiePlatter,
    },
    {
      id: 51,
      name: "Fresh Fruit Display",
      description: "Seasonal.",
      fullRow: false,
      photo: fruitPlatter,
    },
    {
      id: 48,
      name: "Cookie Platter",
      description: "",
      fullRow: false,
    },
    {
      id: 52,
      name: "Assorted Sodas",
      description: "Pepsi, Sierra Mist, Caffeine-free Diet Pepsi, Water.",
      fullRow: false,
    },
    {
      id: 53,
      name: "Bottled Juices",
      description: "",
      fullRow: false,
    },
    {
      id: 54,
      name: "Coffee Service",
      description:
        "100% Columbia coffee, decaffeinated coffee, cream, Sweet & Low, sugar, stirrers and cups.",
      fullRow: false,
    },
  ],
};

const CateringMenu = () => {
  const [focusedPlatter, setFocusedPlatter] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80; // Adjust this value to match your nav bar height
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFocus = (platter) => {
    setFocusedPlatter(platter);
  };

  const handleClose = () => {
    setFocusedPlatter(null);
  };

  const scrollToTop = () => {
    const cateringMenu = document.querySelector("#catering-menu");
    if (cateringMenu) {
      cateringMenu.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="px-4 py-10 pt-20 bg-transparent md:px-10"
      id="catering-menu"
    >
      {" "}
      {/* Removed id="catering" */}
      <div className="flex justify-center mb-10">
        <div className="px-6 py-3 text-4xl font-bold text-white rounded-full shadow-lg bg-primary font-cubano">
          Catering Menu
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(sections).map((sectionName) => (
          <a
            key={sectionName}
            href={`#${sectionName.replace(/\s+/g, "-").toLowerCase()}`}
            className="px-4 py-2 text-white rounded-full bg-secondary hover:bg-primary font-din2014"
          >
            {sectionName}
          </a>
        ))}
      </div>
      {Object.entries(sections).map(([sectionName, items]) => (
        <div
          key={sectionName}
          id={sectionName.replace(/\s+/g, "-").toLowerCase()}
          className="mb-10"
        >
          <h3 className="mb-6 text-3xl font-bold text-center text-white font-din2014">
            {sectionName}
          </h3>
          <hr className="w-1/2 mx-auto mb-6 border-t-2 border-primary" />
          <div
            className={`grid gap-10 ${
              items.length === 1
                ? "grid-cols-1 place-items-center"
                : "md:grid-cols-2"
            }`}
          >
            {items.map((platter) => (
              <div
                key={platter.id}
                className={`p-6 rounded-lg shadow-lg cursor-pointer bg-white/90 ${
                  platter.fullRow ? "md:col-span-2 mx-auto" : ""
                }`}
                onClick={() => handleFocus(platter)}
                style={platter.fullRow ? { maxWidth: "600px" } : {}}
              >
                <h4 className="mt-4 mb-2 text-2xl font-semibold text-black font-din2014">
                  {platter.name}
                </h4>
                <p className="text-lg text-black font-din2014">
                  {platter.description}
                </p>
                {platter.photo && (
                  <img
                    src={platter.photo}
                    alt={platter.name}
                    className="object-cover w-full mt-4 rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      {focusedPlatter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-2xl">
            <button
              className="absolute text-2xl font-bold text-gray-600 top-2 right-2 hover:text-black"
              onClick={handleClose}
            >
              &times;
            </button>
            <h3 className="mb-4 text-3xl font-bold text-center text-primary font-din2014">
              {focusedPlatter.name}
            </h3>
            <p className="text-lg text-center text-gray-700 font-din2014">
              {focusedPlatter.description}
            </p>
            {focusedPlatter.photo && (
              <img
                src={focusedPlatter.photo}
                alt={focusedPlatter.name}
                className="object-cover w-full mt-6 rounded-lg shadow-lg"
              />
            )}
            <button
              className="block px-6 py-2 mx-auto mt-6 text-white rounded-full bg-primary hover:bg-secondary font-din2014"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed p-3 text-white rounded-full shadow-lg bottom-5 right-5 bg-primary hover:bg-secondary"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default CateringMenu;
