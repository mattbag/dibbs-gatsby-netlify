/* global tw */
import { css } from "emotion";
import React from 'react'

// import fb from './../img/icons/fb.svg'
const icons = [
  {name:'facebook', svg: '<svg aria-hidden="true" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-facebook fa-w-14 fa-3x"><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" class=""></path></svg>' },
  {name:'youtube', svg: '<svg aria-hidden="true" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-youtube fa-w-18 fa-3x"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" class=""></path></svg>' },
  {name:'mail', svg: '<svg aria-hidden="true" data-prefix="fal" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope fa-w-16 fa-3x"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" class=""></path></svg>' },
  {name:'music', svg: '<svg aria-hidden="true" data-prefix="fal" data-icon="music" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-music fa-w-16 fa-3x"><path fill="currentColor" d="M512 32.01C512 13.74 497.68 0 481.45 0c-3.04 0-6.15.48-9.25 1.51l-290.78 96C168.71 101.71 160 114 160 128v244.76C142.99 359.99 120.7 352 96 352c-53.02 0-96 35.82-96 80s42.98 80 96 80 96-35.82 96-80V256l288-96v148.76C462.99 295.99 440.7 288 416 288c-53.02 0-96 35.82-96 80s42.98 80 96 80 96-35.82 96-80c0-.03-.01-.05-.01-.08L512 32.01zM96 480c-34.69 0-64-21.98-64-48s29.31-48 64-48 64 21.98 64 48-29.31 48-64 48zm384-353.73l-288 96V128h-.55v-.11L480 32.63v93.64zM416 416c-34.69 0-64-21.98-64-48s29.31-48 64-48 64 21.98 64 48-29.31 48-64 48z" class=""></path></svg>' },
]
const social = {
  icon: css(
    tw`inline-block text-pink hover:text-white m-1`
  ),
  wrap: css(
    tw`flex justify-end items-end`
  ),
}

const Socialbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className={social.wrap}>
        {icons.map(i =>
          <a key={`icon_${i.name}`} rel="noopener noreferrer" target="_blank" href="https://google.com" className={social.icon} style={{ height: 20, width: 20 }} dangerouslySetInnerHTML={{ __html: i.svg }}></a>
        )}
      </div>
    </div>
  </nav>
)

export default Socialbar
