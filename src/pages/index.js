import Base from '@/components/Tools/Base';
import Header from '@/components/Blocks/Header';
import Tabs from '@/components/Blocks/Tabs';
import React, {useState} from "react";
import Category from "@/components/Blocks/Category";
import Products from "@/components/Blocks/Products";
import Sale from "@/components/Blocks/Sale";
import Auction from "@/components/Blocks/Auction";
import Address from "@/components/Blocks/Address";
import Footer from "@/components/Blocks/Footer";

export default function Home() {
  return (
    <Base>
        <Header/>
        <Tabs/>
        <Category/>
        <Products/>
        <Sale/>
        <Auction/>
        <Address/>
        <Footer/>
    </Base>
  )
}
