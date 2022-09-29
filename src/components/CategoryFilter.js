import React from "react";

function CategoryFilter({setSelectedCategory,CATEGORIES,selectedCategory}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => {
        const className  =  category=== selectedCategory ? 'selected':null; 
        return (
          <button key={category}className={className} onClick={()=>setSelectedCategory(category)}>{category}</button>)
        })};
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
