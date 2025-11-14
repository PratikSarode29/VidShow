import React from 'react';
import SearchBar from './searchbar';
import {StyledHedar} from './styledComponents';
function WebHeader(){
  return(
    <StyledHedar>
        <div>
          <h3>
            VS 
            VidShow
          </h3>
        </div>
        <div>
          <SearchBar />
        </div>
    </StyledHedar>
  );
}
export default WebHeader;

