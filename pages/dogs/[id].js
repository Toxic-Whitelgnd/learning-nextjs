import React from 'react'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import Card from '../../components/Cards/card';
import DefaultLayout from '../../Layouts/layout'

export default function ViewDogs() {
    const [dog,setdog] = useState(null);

    const router = useRouter();
    const {id} = router.query;

    console.log("came here");
    console.log(id)

    const fetchdog = async () => {
        const response = await fetch(`api/dogs/${id}`);
        const data = await response.json();
        console.log(data)
        setdog(data);

        console.log("came to fetch dog position");
    };
    
    useEffect(()=>{
        fetchdog();
        console.log(dog);
    },[]);

  return (
    <>
    <DefaultLayout>
        {dog && (
            <div>
            <p>{dog.name}</p>
            </div>
        )}
    </DefaultLayout>
    </>
  );
  
}
