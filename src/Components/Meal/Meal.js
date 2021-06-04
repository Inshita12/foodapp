import React, { Fragment } from "react";
import Availablemeals from './Available meals/Availablemeals';
import Summary from './Summary/Summary';


const meal = (props) => {
  return (
    <Fragment>
        <Summary/>
<Availablemeals/>

      
    </Fragment>
  );
};

export default meal;
