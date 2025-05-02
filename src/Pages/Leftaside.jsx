import React, { Suspense } from 'react';
import Allcategory from './Allcategory';
import Loading from '../Components/Loading';

const Leftaside = () => {
 
    return (
        <div>
       <Suspense fallback={<Loading></Loading>}>
              <Allcategory></Allcategory>
          </Suspense>
        </div>
    );
};

export default Leftaside;