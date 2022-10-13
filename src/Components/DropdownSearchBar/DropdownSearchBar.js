import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import React, { useState } from 'react';

const CustomMenu = React.forwardRef(
  ({children, style, className, 'aria-labelledby': labeledBy, onChange}, ref) => {
    const [value, setValue] = useState('');

    return (
      <div ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control autoFocus
          className='mx-3 my-2 w-auto'
          placeholder='Type to filter...'
          onChange={e => onChange(e, setValue)}
          value={value}
        />
        <ul className='list-unstyled'>
          {React.Children.toArray(children)}
        </ul>
      </div>
    )
  }
);

const DropdownSearchBar = (props) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [toggleText, setToggleText] = useState('Select city');

  const handleOnChange = (e, inputSetValue) => {
    inputSetValue(e.target.value);
    if(e.target.value)
      setFilteredItems(props.items
        .filter(item => item.desc.toLowerCase().includes(e.target.value.toLowerCase()))
        .filter((_, idx) => idx < 7));
    else
      setFilteredItems([]);
  }

  const handleItemOnClick = (e) => {
    setToggleText(e.target.innerText);
  }

  return (
    <div className='dropdown-search-bar'>
      <Dropdown>
        <Dropdown.Toggle>{toggleText}</Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu} onChange={handleOnChange}>
          {filteredItems.map(item => (
            <Dropdown.Item key={item.id} onClick={handleItemOnClick}>{item.desc}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropdownSearchBar;