import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import MenuTitle from "./MenuTitle";
import MenuSubTitle from "./MenuSubTitle";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu({ setPage }) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <span id="menu"></span>
      <div className={`${styles.menuSection} md:pt-8`}>
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#breakfast"
            className="px-4 py-2 text-white rounded-full bg-primary hover:bg-secondary"
          >
            Breakfast
          </a>
          <a
            href="#lunch"
            className="px-4 py-2 text-white rounded-full bg-primary hover:bg-secondary"
          >
            Lunch
          </a>
          <a
            href="#dinner"
            className="px-4 py-2 text-white rounded-full bg-primary hover:bg-secondary"
          >
            Dinner
          </a>
          <Link
            to="/catering"
            className="px-4 py-2 text-white rounded-full bg-primary hover:bg-secondary"
          >
            Catering
          </Link>
        </div>

        {/* Breakfast Section */}
        <div id="breakfast">
          <MenuTitle title="BREAKFAST" description="SERVED ALL DAY" />
          <div className={styles.breakfastSection}>
            <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-min">
              <div>
                {/* omlettes */}
                <MenuSubTitle
                  title="Omlettes"
                  description="All omlettes are 3 eggs and served with one choice of homefries, grits, or tomato slices and buttered toast."
                />
                <MenuItem
                  title="Western Omlette"
                  price={13.95}
                  description="green peppers, sautéed onions, and ham"
                  additions=""
                />
                <MenuItem
                  title="Bacon & Cheese Omlette"
                  price={13.45}
                  description="melted american cheese and perfectly crispy bacon bits"
                />
                <MenuItem
                  title="Veggie & Cheese Omlette"
                  price={13.45}
                  description="Mushrooms, green peppers, onions, with melted american and swiss cheese"
                />
                <MenuItem
                  title="Ham & Cheese Omlette"
                  price={13.45}
                  description="Melted american cheese with diced ham"
                />
                <MenuItem
                  title="Italian Sausage Omlette"
                  price={13.95}
                  description="spicy italian sausage with onions, green peppers and tomato sauce, topped with melted provolone cheese"
                />
                <MenuItem
                  title="Mushroom, Ham & Swiss Omlette"
                  price={13.45}
                  description="melted swiss cheese with diced ham and sautéed mushrooms"
                />
                <MenuItem
                  title="Cheese Omlette"
                  price={11.95}
                  description="creamy melted american cheese on top and inside of the omlette"
                />
                <MenuItem
                  title="Corned Beef & Swiss Omlette"
                  price={13.95}
                  description="melted swiss cheese with chopped corned beef slices"
                />
                <MenuItem
                  title="Minced Nova Scotia Lox Omlette"
                  price={15.95}
                  description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  additions=""
                />
                <MenuItem
                  title="Burrito Omlette"
                  price={14.45}
                  description="sausage, green peppers, onion, tomatoes, and refried beans, topped with melted cheddar cheese and montery jack cheese in a warm tortilla, served with salsa and sour cream on the side"
                />
                <MenuItem
                  title="Spinach & Feta with Mushrooms"
                  price={13.95}
                  description="diced feta with spinach and mushrooms inside an omlette"
                />
                <MenuItem
                  title="Broccoli & Cheddar Omlette"
                  price={14.45}
                  description="melted cheddar cheese with broccoli and minced onions"
                />
                {/* breakfast treats */}
                <MenuSubTitle
                  id="breakfast-treats"
                  title="Breakfast Treats"
                  description="can be served with eggs and/or meat for a discounted price"
                />
                <MenuItem
                  title="Pancakes"
                  price="10.95"
                  description="buttermilk, blueberry, or chocolate chip. A choice of one, two, or three pancakes"
                />
                <MenuItem
                  title="French Toast"
                  price="10.95"
                  description="Three slices of thick french toast served with syrup"
                />
                <MenuItem
                  title="Cheese Blintzes"
                  price="10.95"
                  description="Served with a choice of sour cream or applesauce"
                />
                <MenuItem
                  title="Belgian Waffle"
                  price="10.95"
                  description="Served with syrup"
                />
                <MenuItem
                  title="^Above can be served with two eggs and/or a choice of meat^"
                  price="10.95"
                  description=""
                />
                <MenuItem
                  title="Sausage Biscuits & Gravy"
                  price="3.95"
                  description="our homemade sausage gravy topped over fresh buttermilk biscuits"
                />
                <MenuItem
                  title="Creamed Chip Beef"
                  price="3.95"
                  description="Over homefries or Toast"
                />
              </div>
              <div>
                {/* Egg Dishes */}
                <MenuSubTitle
                  id="egg-dishes"
                  title="Egg Dishes"
                  description="we offer egg whites upon request for all egg dishes."
                />
                <MenuItem
                  title="Two Eggs Any Style"
                  price="12.95"
                  description="two eggs cooked anyway you'd like served with your choice of breakfast meat, a choice of homefries, grits, or tomato slices and a choice of buttered toast, an english muffin, or a bagel"
                  additions=""
                />
                <MenuItem
                  title="Morning Special"
                  price="10.95"
                  description="two eggs cooked anyway you'd like served with your choice of homefries, grits, or tomato slices and a choice of buttered toast, an english muffin, or a bagel"
                  additions=""
                />
                <MenuItem
                  title="Eggs Benedict"
                  price="10.95"
                  description="topped with hollandaise sauce and served With your choice of homefries, grits or tomato slices"
                />
                <MenuItem
                  title="Lox Benedict"
                  price="10.95"
                  description="topped with hollandaise sauce and served With your choice of homefries, grits or tomato slices"
                />
                <MenuItem
                  title="Corned Beef Hash Platter"
                  price="10.95"
                  description="corned beef hash served with two eggs cooked any style and a choice of buttered toast, an english muffin, or a bagel"
                />
                <MenuItem
                  title="Rancheros"
                  price="10.95"
                  description="a soft tortilla stuffed with over easy eggs and refried beans topped with melted cheddar cheese. Served with sour cream and salsa."
                />
                {/* breakfast sandwhiches */}
                <MenuSubTitle
                  id="breakfast-sandwiches"
                  title="Breakfast Sandwhiches"
                  description="Cheese and other toppings added upon request. Toast options: white, wheat, rye, sourdough, bagels, and rolls."
                />
                <MenuItem
                  title="BLT"
                  price="10.95"
                  description=" bacon, lettuce, and tomato layered on toasted bread with mayo."
                />
                <MenuItem
                  title="Bacon & Egg"
                  price="10.95"
                  description="on toasted bread & cheese is added upon request"
                />
                <MenuItem
                  title="Turkey Sausage & Egg"
                  price="10.95"
                  description="on toasted bread & cheese is added upon request"
                />
                <MenuItem
                  title="Link or Patties Sausage & Egg"
                  price="10.95"
                  description="on toasted bread & cheese is added upon request"
                />
                <MenuItem
                  title="Ham & Egg"
                  price="10.95"
                  description="on toasted bread & cheese is added upon request"
                />
                <MenuItem
                  title="Scrapple & Egg"
                  price="10.95"
                  description="on toasted bread & cheese is added upon request"
                />
                <MenuItem
                  title="Beef Sausage & Egg"
                  price="10.95"
                  description="on toasted bread & cheese is added upon request"
                />
                <MenuItem
                  title="Nova Lox Sandwhich"
                  price="10.95"
                  description="served with cream cheese & a choice of bagel"
                />
                <MenuItem
                  title="White Fish Sandwhich"
                  price="10.95"
                  description="served with choice of bagel"
                />
              </div>
              <div>
                {/* breakfast sides */}
                <MenuSubTitle
                  id="breakfast-sides"
                  title="Breakfast Sides"
                  description=""
                />
                <MenuItem
                  title="4 Slices of Bacon"
                  price="3.95"
                  description=""
                />
                <MenuItem
                  title="Beef, Turkey, or Patties Sasuage"
                  price="3.95"
                  description=""
                />
                <MenuItem title="Ham Steak" price="3.95" description="" />
                <MenuItem title="Chipped Beef" price="3.95" description="" />
                <MenuItem
                  title="Sausage and Gravy"
                  price="3.95"
                  description=""
                />
                <MenuItem title="Scrapple" price="3.95" description="" />
                <MenuItem
                  title="Corned Beef Hash"
                  price="3.95"
                  description=""
                />
                <MenuItem title="Homefries" price="3.95" description="" />
                <MenuItem title="Grits" price="3.95" description="" />
                <MenuItem title="Tomato Slices" price="3.95" description="" />
                <MenuItem title="Hard Boiled Egg" price="3.95" description="" />
                <MenuItem title="English Muffin" price="3.95" description="" />
                <MenuItem title="Toasted Bagel" price="3.95" description="" />
                <MenuItem title="Side of Toast" price="3.95" description="" />
                <MenuItem title="Cream Cheese" price="3.95" description="" />
                <MenuSubTitle title="Smoked Fish Platters" description="" />
                <MenuItem
                  title="Nova Scotia Salmon Platter"
                  price="3.95"
                  description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
                />
                <MenuItem
                  title="White Fish Salad Platter"
                  price="3.95"
                  description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
                />
                <MenuItem
                  title="Nova Scotia Salmon & White Fish Salad"
                  price="3.95"
                  description="served with a choice of bagel, lettuce, tomatoes, onions, olives, and cream cheese"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lunch Section */}
        <div id="lunch">
          <MenuTitle title="LUNCH" description="SERVED ALL DAY" />
          <div className={styles.lunchSection}>
            <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-min">
              <div>
                {/* Woodside Burgers */}
                <MenuSubTitle
                  title="Woodside Burgers"
                  description="All our handmade charbroiled patties served with chips and a pickle. All burgers cooked medium-well unless otherwise requested."
                />
                <MenuItem title="Hamburger" price="11.95" />
                <MenuItem title="Cheeseburger" price="12.50" />
                <MenuItem title="Bacon Cheeseburger" price="13.50" />
                <MenuItem title="Mushroom Swiss Burger" price="13.50" />
                <MenuItem title="Turkey Burger" price="12.95" />

                {/* Burger Platters */}
                <MenuSubTitle
                  title="Burger Platters"
                  description="Burger platters served with lettuce, tomato, pickle, and fries."
                />
                <MenuItem title="Hamburger Royale Platter" price="13.95" />
                <MenuItem
                  title="Bacon Cheeseburger Royale Platter"
                  price="14.95"
                />
                <MenuItem title="Cheeseburger Royale Platter" price="14.50" />
                <MenuItem title="Turkey Burger Royale Platter" price="13.95" />
                <MenuItem title="Veggie Burger Platter" price="13.95" />
                <MenuItem
                  title="The General Jubal Burger Platter"
                  price="14.95"
                  description="American cheese, butter, lettuce, tomato, Russian dressing, served with fries and a pickle."
                />
                <MenuItem
                  title="The Rex Burger Platter"
                  price="14.50"
                  description="Our burger on grilled rye, Russian dressing with melted Swiss cheese, served with fries and a pickle."
                />
                <MenuItem
                  title="The Montgomery Burger"
                  price="14.95"
                  description="Melted Swiss cheese, smothered with sautéed onions, Russian dressing on grilled rye, served with fries and a pickle."
                />

                {/* Koehler Dogs */}
                <MenuSubTitle title="Kosher Dogs" description="" />
                <MenuItem title="All-Beef Hot Dog" price="9.75" />
                <MenuItem
                  title="Chili Hot Dog"
                  price="10.75"
                  description="Our homemade chili, shredded cheese, and diced onions."
                />

                {/* Club Sandwiches */}
                <MenuSubTitle
                  title="Club Sandwiches"
                  description="All clubs served on toasted white bread unless otherwise requested."
                />
                <MenuItem
                  title="Ham Club"
                  price="12.95"
                  description="Pit-smoked ham, bacon, lettuce, tomato, and mayo, served with potato chips and a pickle."
                />
                <MenuItem
                  title="Turkey Club"
                  price="12.95"
                  description="Fresh turkey breast – served as above."
                />
                <MenuItem
                  title="Combo Club"
                  price="12.95"
                  description="Combination of ham and turkey, served with chips and a pickle."
                />
                <MenuItem
                  title="Tuna Club"
                  price="12.95"
                  description="Our homemade tuna salad and bacon, served with potato chips and a pickle."
                />
                <MenuItem
                  title="Charbroiled Chicken Club"
                  price="13.50"
                  description="Charbroiled chicken breast, lettuce, tomato, Cheddar cheese, and mayo, served with potato chips and a pickle."
                />

                {/* Hot Sandwich Platters */}
                <MenuSubTitle title="Hot Sandwich Platters" description="" />
                <MenuItem
                  title="Hot Meatloaf"
                  price="14.45"
                  description="Our famous meatloaf with mashed potatoes and gravy."
                />
                <MenuItem
                  title="Hot Turkey"
                  price="14.45"
                  description="Served with mashed potatoes and gravy."
                />
                <MenuItem
                  title="Hot Beef Sandwich"
                  price="14.45"
                  description="Our slow-roasted beef – an American tradition we’re proud to continue. Substitute fries for mashed potatoes upon request."
                />

                {/* Woodside Soups */}
                <MenuSubTitle
                  title="Woodside Soups"
                  description="All our soups are homemade – available in two sizes."
                />
                <MenuItem title="Chicken Noodle" price="6.45 / 7.45" />
                <MenuItem title="Matzo Ball" price="8.95" />
                <MenuItem title="Homemade Chili" price="6.95 / 7.95" />
              </div>
              <div>
                {/* Woodside Triple Decker Combos */}
                <MenuSubTitle
                  title="Woodside Triple Decker Combos"
                  description="Named in honor of our famous patrons. all combos are served on rye bread with chips and  dill pickle."
                />
                <MenuItem
                  title="No. 1 The Cyrano De Bergerac"
                  price="13.95"
                  description="Hot pastrami, corned beef, Russian dressing topped with creamy slaw and melted Swiss cheese."
                />
                <MenuItem
                  title="No. 2 The Romeo & Juliet"
                  price="13.95"
                  description="Roast beef, Swiss cheese topped with coleslaw and Russian dressing."
                />
                <MenuItem
                  title="No. 3 The Lord Byron"
                  price="13.95"
                  description="Corned beef, turkey, coleslaw, Swiss cheese, and Russian dressing."
                />
                <MenuItem
                  title="No. 4 The Lancelot de Guinevere"
                  price="13.95"
                  description="Chicken Salad, bacon, lettuce, tomato, and Russian dressing."
                />
                <MenuItem
                  title="No. 5 The Baby Jane"
                  price="13.95"
                  description="Hot ham and bacon topped with melted Swiss and American cheese with mayonaise."
                />
                <MenuItem
                  title="No. 6 The Henry VIII"
                  price="13.95"
                  description="Hot ham, pastrami, melted Swiss, creamy coleslaw, and Russian dressing."
                />
                <MenuItem
                  title="No. 7 The Toulouse-Lautrec"
                  price="13.95"
                  description="A great tuna melt, swiss cheese, Russian dressing, on grilled rye."
                />
                <MenuItem
                  title="No. 8 The Alfredo & Violetta"
                  price="13.95"
                  description="Roast beef, turkey, Swiss cheese, coleslaw, topped with Russian dressing."
                />
                <MenuItem
                  title="No. 9 The Frederick The Great"
                  price="13.95"
                  description="Turkey breast, ham, melted Swiss cheese, Russian dressing on grilled rye."
                />
                <MenuItem
                  title="No. 10 Athena & Prince Champopolos"
                  price="13.95"
                  description="Turkey, corned beef, and chopped liver with coleslaw, and Russian dressing."
                />

                {/* Submarine Sandwiches */}
                <MenuSubTitle
                  title="Submarine Sandwiches"
                  description="All served with chips and a pickle."
                />
                <MenuItem
                  title="SS-1 Italian Cold Cut Sub"
                  price="12.45"
                  description="Ham, hard salami, mortadella, provolone cheese, lettuce, tomato, mayo, and vinaigrette dressing."
                />
                <MenuItem
                  title="SS-2 Philadelphia Steak & Cheese Sub"
                  price="12.95"
                  description="Thinly sliced ribeye steak, provolone cheese, grilled onions, lettuce, tomato, and mayo."
                />
                <MenuItem
                  title="SS-3 Tuna Sub"
                  price="11.95"
                  description="Our famous tuna salad."
                />
                <MenuItem
                  title="SS-4 Hamburger Sub"
                  price="13.50"
                  description="Two charbroiled patties (10 oz)."
                />
                <MenuItem
                  title="SS-5 Cheeseburger Sub"
                  price="11.95"
                  description="With american cheese."
                />
                <MenuItem
                  title="SS-6 Ham & Cheese Sub"
                  price="12.95"
                  description="Pit-smoked ham, choice of cheese – served hot or cold."
                />
                <MenuItem
                  title="SS-7 Turkey Sub"
                  price="12.95"
                  description="The finest turkey breast available."
                />
                <MenuItem
                  title="SS-8 Roast Beef Sub"
                  price="13.50"
                  description="Thinly sliced top round, served with your choice of dressing."
                />
                <MenuItem
                  title="SS-9 Hot Veggie Sub"
                  price="12.95"
                  description="Swiss, American, and provolone cheese, mushrooms, green peppers, onions, lettuce, tomato, oil and viniegar, served hot."
                />
                <MenuItem
                  title="SS-10 The Deli Sub"
                  price="13.95"
                  description="Corned beef, turkey, roast beef, Swiss cheese, lettuce, tomato, and spicy mustard."
                />
                <MenuItem
                  title="SS-11 Chicken Salad Sub"
                  price="11.95"
                  description="Our homemade deluxe chicken salad."
                />
                <MenuItem
                  title="SS-12 Fish Filet Sub"
                  price="13.95"
                  description="Two fish fillets, lettuce, tomato, and tartar sauce."
                />
                <MenuItem
                  title="SS-13 Philadelphia Chicken & Cheese Sub"
                  price="13.95"
                  description="Grilled chicken with provolone, onions, lettuce, tomato, and mayo."
                />
                <MenuItem
                  title="SS-14 Meatball & Cheese Sub"
                  price="13.50"
                  description="Served with marinara & melted provolone cheese."
                />
                <MenuItem
                  title="SS-15 Chicken Tenderloin Sub"
                  price="13.95"
                  description="Strips of chicken tenders with melted cheddar cheese."
                />
                <MenuItem
                  title="SS-16 French Dip Platter"
                  price="14.50"
                  description="Served french fries and a pickle."
                />
                <MenuItem
                  title="SS-17 New York Deli Sub"
                  price="14.95"
                  description="Roast beef, cappicola ham, salami and mozzarella with oil and vinegar. Served with fries."
                />
              </div>
              <div>
                {/* Appetizers */}
                <MenuSubTitle title="Appetizers" description="" />
                <MenuItem
                  title="Buffalo Wings"
                  price="11.20"
                  description="Served with carrot and celery sticks, with a side of blue cheese dressing."
                />
                <MenuItem
                  title="Potato Skins"
                  price="11.20"
                  description="Loaded with cheddar cheese and chopped bacon, served with sour cream and chives."
                />
                <MenuItem
                  title="Cheese Nachos"
                  price="11.90"
                  description="Tortilla chips topped with refried beans and melted cheese blend. Served with pico de gallo and sour cream."
                />
                <MenuItem
                  title="Fried Mozzarella"
                  price="10.90"
                  description="Breaded and fried, served with marinara sauce."
                />
                <MenuItem
                  title="Chicken Tender Basket"
                  price="10.90"
                  description="Served with honey mustard dressing. Can be served with fries upon request"
                />

                {/* Specialty Sandwiches */}
                <MenuSubTitle title="Specialty Sandwiches" description="" />
                <MenuItem
                  title="The Woodside Reuben"
                  price="12.50"
                  description="Hot corned beef, sauerkraut, Swiss cheese, and Russian dressing on grilled rye."
                />
                <MenuItem
                  title="Beef Barbecue"
                  price="13.50"
                  description="A delicous Texas-style barbeque with creamy slaw, french fries and dill pickle."
                />
                <MenuItem
                  title="European Medley"
                  price="12.95"
                  description="Turkey breast, bacon, melted provolone, and Russian dressing on rye."
                />
                <MenuItem
                  title="The Mermaid"
                  price="12.95"
                  description="Tuna, bacon, Swiss, and tomato on grilled wheat bread."
                />
                <MenuItem
                  title="Roast Beef Grill"
                  price="13.50"
                  description="Top round with sautéed mushrooms and onions on a kaiser roll, served with chips and a pickle."
                />
                <MenuItem
                  title="Pita lite"
                  price="12.95"
                  description="Turkey breast, swiss cheese, tossed salad, tomato and green pepper in a pocket pita bread with vinaigrette dressing."
                />
                <MenuItem
                  title="Charbroiled Chicken"
                  price="14.95"
                  description="Charbroiled boneless chicken breast on a Kaiser roll with lettuce, tomato, fries, coleslaw, and a pickle."
                />
                <MenuItem
                  title="Gyro"
                  price="14.50"
                  description="Sliced lamb in pita. Served with french fries and herb yogurt sauce"
                />

                {/* Delicatessen Favorites */}
                <MenuSubTitle title="Delicatessen Favorites" description="" />
                <MenuItem title="Ham Sandwich" price="11.40" />
                <MenuItem title="Grilled Ham & Cheese" price="11.40" />
                <MenuItem title="Corned Beef" price="11.40" />
                <MenuItem title="Roast Beef" price="11.40" />
                <MenuItem title="Pastrami" price="11.70" />
                <MenuItem title="Turkey" price="11.70" />
                <MenuItem title="Fish Filet" price="11.70" />
                <MenuItem title="BLT" price="10.90" />
                <MenuItem title="Tuna Salad" price="10.90" />
                <MenuItem title="Chicken Salad" price="10.90" />
                <MenuItem title="Grilled Cheese" price="9.80" />
                <MenuItem title="Grilled Cheese & Tomato" price="9.80" />
                <MenuItem title="Grilled Cheese & Bacon" price="10.90" />
                <MenuItem title="Chopped Liver" price="10.90" />
                <MenuItem title="Egg Salad" price="10.40" />

                {/* Mediterranean Specials */}
                <MenuSubTitle title="Mediterranean Specials" description="" />
                <MenuItem
                  title="Falafel in Pita"
                  price="13.50"
                  description="Falafel, salad, and tahini stuffed in pita."
                />
                <MenuItem
                  title="Falafel Platter"
                  price="13.95"
                  description="Falafel, salad, and tahini on a platter, served with pita."
                />
                <MenuItem title="Tahini Plate" price="8.45" description="" />
                <MenuItem title="Israeli Salad" price="8.45" description="" />
                <MenuItem
                  title="Mediterranean Combo Platter"
                  price="15.95"
                  description=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dinner Section */}
        <div id="dinner">
          <MenuTitle title="DINNER" description="SERVED ALL DAY" />
          <div className={styles.dinnerSection}>
            <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-min">
              <div>
                {/* Traditional Favorites */}
                <MenuSubTitle
                  title="Traditional Favorites"
                  description="Main Dishes"
                />
                <MenuItem
                  title="Meatloaf"
                  price="16.95 / 17.95"
                  description="Our homemade meatloaf, served with gravy, whipped potatoes, and vegetables."
                />
                <MenuItem
                  title="Liver & Onions"
                  price="16.95 / 17.95"
                  description="Tender beef liver, grilled with sauteed onions, served with whipped potatoes and vegetables"
                />
                <MenuItem
                  title="Salisbury Steak"
                  price="17.95"
                  description="An American favorite, served with whipped potatoes and vegetables."
                />
                <MenuItem
                  title="Stuffed Cabbage"
                  price="15.95 / 16.95"
                  description="Stuffed with ground beef and rice, topped with out sweer & sour sauce, served with rice."
                />
                <MenuItem
                  title="Sliced Breast of Turkey"
                  price="15.95"
                  description="Pure turkey breast, whipped potatoes and gravy, stuffing, cranberry sauce, and vegetable."
                />
                <MenuItem
                  title="Chicken Tenderloin"
                  price="16.95 / 17.95"
                  description="Smothered with mushroom gravy, served with whipped potatoes and vegetables."
                />
                <MenuItem
                  title="Boneless Chicken Breast"
                  price="17.95"
                  description="Charbroiled with tomatoes and spices, served with rice and vegetables."
                />
                <MenuItem
                  title="Fried Chicken Steak"
                  price="11.95"
                  description="Breaded boneless chicken breast, fried and smothered with mushroom gravy, served with whipped potatoes and vegetables"
                />
                <MenuItem
                  title="Roasted Chicken"
                  price="11.95"
                  description="A half of chicken seasoned to perfection with garden herbs, served with roasted potatoes and vegetable of the day."
                />
                <MenuItem
                  title="Fried Chicken with Mashed Potatoes, Gravy, and Veg of the day"
                  price="11.95"
                  description=""
                />
                <MenuItem title="Brisket Dinner" price="17.95" description="" />
                <MenuItem title="Potato Pancake" price="11.95" description="" />
                {/* From The Sea */}
                <MenuSubTitle title="From The Sea" description="" />
                <MenuItem
                  title="Fried Shrimp"
                  price="18.95"
                  description="Deep fried breade shrimp served with fries, coleslaw, and cocktail sauce."
                />
                <MenuItem
                  title="Breaded Flounder"
                  price="16.95"
                  description="Deep fried breaded flounder served with fries, coleslaw, and tartar sauce."
                />
                <MenuItem
                  title="Seafood Combo"
                  price="16.95"
                  description="Golden fried shrimp, fried fillet of fish served with french fries, cole slaw, cocktail and tartar sauce."
                />
                <MenuItem
                  title="Baked Flounder"
                  price="16.95"
                  description="Topped with lemon dill sauce, served with rice and vegetable."
                />
                <MenuItem
                  title="Fish & Chips"
                  price="16.95"
                  description="Served with creamy coleslaw."
                />
              </div>
              <div>
                {/* Salads & Cold Platters */}
                <MenuSubTitle title="Salads & Cold Platters" description="" />
                <MenuItem
                  title="Garden Salad"
                  price="6.95"
                  description="Fresh lettuce and tomatoes."
                />
                <MenuItem
                  title="Greek Salad"
                  price="13.00"
                  description="Romaine lettuce topped with feta cheese, diced tomato, diced red onion - pepperochini and anchovies mixed with greek dressing."
                />
                <MenuItem
                  title="Tuna Salad Platter"
                  price="12.00"
                  description="Served on a bed of lettuce with tomatoes, hard-boiled egg, coleslaw, pickles, and saltines."
                />
                <MenuItem
                  title="Chicken Salad Platter"
                  price="12.00"
                  description="Our deluxe chicken salad-syled as above."
                />
                <MenuItem
                  title="Woodside Chef Salad"
                  price="13.45"
                  description="Pit ham, pure turkey breast, lettuce, tomato, red cabbage, green peppers, mushrooms, oninos, American, Swiss and provolone cheese, topped with sliced egg and choice of dressing."
                />
                <MenuItem
                  title="Vegetable Salad"
                  price="12.45"
                  description="Lettuce, tomatoes, red cabbage, green peppers, mushrooms, onions, American, swiss, and provolone cheese, topped with sliced egg and choice of dressing."
                />
                <MenuItem
                  title="Grilled Chicken Caesar Salad"
                  price="14.40"
                  description="Tender chicken strips over tossed greens with ceasar dressing, croutons and topped with parmesan cheese."
                />
                <MenuItem
                  title="Taco Salad"
                  price="14.45"
                  description="Spicy chili, shredded cheese, tomatoes, and lettuce on chips, topped with sour cream and picante sauce."
                />
                <MenuItem
                  title="Southwestern Fried Chicken Salad"
                  price="14.00"
                  description="Crispy battered chicken on fresh greens with tomatoes, eggs, and chopped bacon. Served with house honey mustard dressing."
                />
                <MenuItem
                  title="Cobb Salad"
                  price="14.49"
                  description="Chargrilled chicken, chopped bacon, chopped egg, shredded cheddar, avocado, served with your choice of dressing."
                />
                <MenuSubTitle title="Italian Favorites" description="" />
                <MenuItem
                  title="Baked Lasagna"
                  price="8.50"
                  description="Baked homemade lasgna, served with garlic bread."
                />
                <MenuItem
                  title="Spaghetti & Meatballs"
                  price="8.50"
                  description="Served with garlic bread."
                />
                <MenuItem
                  title="Chicken Parmesan"
                  price="8.50"
                  description="Breaded grilled boneless breast of chicken, topped with parmesan, provolone cheese and spaghetti sauce, served with spaghetti."
                />
              </div>
              <div>
                {/* Children’s Menu */}
                <MenuSubTitle
                  title="Children’s Menu (Ages 12 and under)"
                  description=""
                />
                <MenuItem
                  title="Kid's Grilled Cheese w/ French Fries"
                  price="7.50"
                  description=""
                />
                <MenuItem
                  title="Kid's All-Beef Hot Dog w/ French Fries"
                  price="7.50"
                  description=""
                />
                <MenuItem
                  title="Kid's Chicken Tenders w/ French Fries"
                  price="7.95"
                  description=""
                />
                <MenuItem
                  title="Kid's Spaghetti & Meatballs"
                  price="7.95"
                  description=""
                />
                <MenuItem title="Kid's Spaghetti" price="7.95" description="" />
                {/* Sides */}
                <MenuSubTitle title="Sides" description="" />
                <MenuItem title="French Fries" price="4.25" description="" />
                <MenuItem
                  title="French Fries with Gravy"
                  price="4.95"
                  description=""
                />
                <MenuItem title="Onion Rings" price="6.50" description="" />
                <MenuItem title="Coleslaw" price="3.95" description="" />
                <MenuItem
                  title="Whipped Potatoes with Gravy"
                  price="4.50"
                  description=""
                />
                <MenuItem
                  title="Loaded Baked Potato"
                  price="5.95"
                  description=""
                />
                <MenuItem
                  title="Vegetable of the Day"
                  price="4.50"
                  description=""
                />
                <MenuItem title="Rice" price="4.50" description="" />
                <MenuItem title="Apple Sauce" price="4.50" description="" />
                <MenuItem title="Garlic Sub Roll" price="4.50" description="" />
              </div>
            </div>
          </div>
        </div>
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed p-3 text-white rounded-full shadow-lg bottom-5 right-5 bg-primary hover:bg-secondary"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </>
  );
}

export default Menu;
