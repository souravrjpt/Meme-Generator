import React from "react"
import Memesdata from "./memesdata"
import Header from "./components/header"
import "./App.css"
import Memes from "./components/memes"

export default function GetMemes(){
  return (
    <div>
      <Header/>
      <Memes/>
    </div>
  )
}