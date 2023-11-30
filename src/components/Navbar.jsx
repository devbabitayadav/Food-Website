import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div class="container1">
    <header class="d-flex flex-wrap fixed-top py-3 mb-3">
      <a href="/" class="align-items-center mb-4 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi" width="40" height="30"></svg>
        <span class="fs-4 text-dark">Restaurant Landing Page</span>
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link landing">Landing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Gallery</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Shop</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Team</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
        <li class="nav-item"><a href="#" class="nav-link">{<FaShoppingCart />}</a></li>
      </ul>

    </header>
  </div>
    </>
  )
}

export default Navbar
