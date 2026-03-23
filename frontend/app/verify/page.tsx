"use client";
import { Suspense } from "react";
import VerifyOtp from "../components/VerifyOtp";
import Loading from "../components/LoadingComponent";

const VerifyPage = () => { 
  return (
    <Suspense fallback={<Loading />}>
      <VerifyOtp />
    </Suspense>
    
  )
}

export default VerifyPage
