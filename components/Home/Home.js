import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function HomeDog() {
  const router = useRouter();
  return (
    <div>
        <div className="container-fluid">
            <h2>Welcome to DogKatsuki!</h2>
        </div>
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Want Best Dog</h1>
            <p className="lead">We have all kind of dog . This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
        <button type="button" onClick={() => router.push("/dogs")} className="btn btn-primary">View</button>
        </div>

    </div>
  )
}
