/* Common libraries *************************/
import './vendor.js';
import LazyLoad from "vanilla-lazyload";

/* Common scripts ********************/
import './scripts/setHeight.js';

/* Main components ******************/
import tooltip from './components/tooltip.js'; 
import choices from './components/choices.js'; 
import parallax from './components/parallax.js';
import gallery from './components/gallery.js'; 
import datepicker from './components/datepicker.js'; 
import accordion from './components/accordion.js'; 
import video from './components/video.js';
import {modal} from './components/modal.js'

/* Form components ***********/
import formAttach from './form/formAttach.js';

/* Additional components ***********/
import './components/swiper.js';
import cards from './components/cards.js';
import animation from './components/animation.js';

/* Header scripts ********************/
import headerDivisions from './header/headerDivisions.js';
import headerMenu from './header/headerMenu.js';
import headerFixed from './header/headerFixed.js';
import headerSearchForm from './header/headerSearchForm.js';

tooltip();
choices();
parallax();
gallery();
datepicker();
accordion();
video();
modal.init();
formAttach();
cards();
animation();

headerDivisions(1199);
headerMenu(1199);
headerFixed();
headerSearchForm(991);

/* Additional scripts ***********/
import './scripts/homeSectionTitle.js';
import './scripts/awardsTabMenu.js';

/* Validation *************************/
import './validation.js';

// Lazy Load
let lazyLoad = new LazyLoad({});
