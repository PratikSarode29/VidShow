import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { StyledSearchBar } from './styledComponents';
const SearchBar = () => {
  const [qurey, setQurey] = useState('');
  const handelSearch = () => {
    console.log("Hello");
  };
return     <>  
              <FontAwesomeIcon icon={faSearch} />
              <StyledSearchBar type="text" value={qurey} placeholder="Search here..." onChange={(e) => setQurey(e.target.value)} onBlur={handelSearch}/>
        </>

}

export default SearchBar;