import {useState} from 'react';
const SearchBar = () => {
  const [qurey, setQurey] = useState('');
  const handelSearch = () => {
    console.log("Hello");
  };
return <input type="text" value={qurey} onChange={(e) => setQurey(e.target.value)} onBlur={handelSearch}/>;

}

export default SearchBar;