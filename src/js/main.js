import '../scss/styles.scss'

import { Popover } from 'bootstrap';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import VanillaTilt from 'vanilla-tilt';
VanillaTilt.init(document.querySelectorAll(".card-tilt"));

AOS.init();

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
})
