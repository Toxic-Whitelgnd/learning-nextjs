import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../../components/Cards/card';
import DefaultLayout from '../../Layouts/layout'
import Head from 'next/head'

export default function DogsStore() {
  const [dogs,setdogs] =  useState([]);

  const fetchdata = async () => {
    const response = await fetch(`api/dogs`);
    const data = await response.json();
    setdogs(data);

   
  }
useEffect(() => {
  fetchdata();
  console.log(dogs);
}, []);
  return (
    <>
    <DefaultLayout>
    <Head>
        <title>Dogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div> Dogs pages.Let us create a store here!</div>
        <>
        {
           
          dogs.map(dog => (
            <Card name={dog.name}
            id={dog.id}
            breed={dog.breed}
            description={dog.desc}
            age={dog.age}
            gender={dog.gender}
            image={dog.image}
            price={dog.price} />
          )
        )}
        </>
    </DefaultLayout>
    
    </>
  )
}
