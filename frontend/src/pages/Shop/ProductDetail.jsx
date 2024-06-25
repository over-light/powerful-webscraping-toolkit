/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useParams } from "react-router-dom";
import axios from "axios";

import convertDateFormat from "../../utils/utils"
import NumberFormat from "../../utils/NumberFormat";
const ProductDetail = () => {


  return (
    <div>
      <Header />

      <div className="mt-[40px] bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 w-full lg:w-[80%] flex justify-center mx-auto">

      </div>

      <div
        className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[80%] h-full justify-center lg:mx-auto mx-3 lg:grid lg:grid-cols-7">
       
      </div>
      <div className=" bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[80%] flex justify-center lg:mx-auto mx-3">


        {/* Table */}

      </div>
      <div className="flex justify-center mt-5">
      </div>
      <div className="flex justify-center mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
