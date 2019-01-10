import React from 'react';

const FilterNav = ({description,isActive,URL, onClick, count}) =>{
    return (
        <button className={ isActive ? 'filter-nav filter-nav-active' : 'filter-nav'} to={URL} onClick={() => onClick(description) } > </button>
    );
}

export default FilterNav;