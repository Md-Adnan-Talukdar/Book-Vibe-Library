import React from 'react';
import Banner from '@/components/homepage/Banner';
import Books from '@/components/homepage/Books';
import { Suspense } from "react";
const page = () => {
  return (
    <div>
       <Banner />
      <Suspense fallback={<p>Loading books...</p>}>
        <Books />
      </Suspense>


    </div>
  );
};

export default page;