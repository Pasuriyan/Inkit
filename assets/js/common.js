/* ==========================================================================
   INKIT - PRINTER INK & TONER REFILL SHOP
   COMMON JAVASCRIPT (common.js)
   Bulletproof Offline SVG Icons & Interactive Logic
   ========================================================================== */

// Offline Vector SVG Icons Dictionary
const SVG_ICONS = {
  // Navigation & Controls
  'right-left': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>',
  'moon': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  'sun': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  'bars': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  'xmark': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  'chevron-down': '<svg class="svg-icon chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  'angle-right': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  'arrow-right': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  'arrow-up-right-from-square': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>',

  // Brand & Socials
  'facebook-f': '<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  'youtube': '<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  'linkedin-in': '<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6 1.6 1.6 0 0 0-1.6 1.6c0 .88.72 1.6 1.6 1.6m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>',
  'instagram': '<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  'whatsapp': '<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.17c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.17 8.17 0 0 1-1.25-4.39c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4 1.55 1.55 2.4 3.61 2.4 5.79 0 4.51-3.67 8.19-8.18 8.19zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.41 1.4.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z"/></svg>',

  // Features, Hardware & Tools
  'print': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>',
  'leaf': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  'seedling': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10v12"/><path d="M12 10a6 6 0 0 1 6-6c0 4-2 6-6 6Z"/><path d="M12 14a6 6 0 0 0-6-6c0 4 2 6 6 6Z"/></svg>',
  'droplet': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
  'bottle-droplet': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4"/><path d="M10 5h4"/><path d="M8 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-8Z"/><path d="M12 12v4"/></svg>',
  'fill-drip': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.6 2-4 .3 1.4 2 2.4 2 4Z"/></svg>',
  'microchip': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
  'wrench': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  'screwdriver-wrench': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  'gears': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  'layer-group': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  'barcode': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5v14"/><path d="M8 5v14"/><path d="M12 5v14"/><path d="M17 5v14"/><path d="M21 5v14"/></svg>',
  'truck': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="12" x="1" y="5" rx="2"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M17 13h5l2 3v1h-7v-4Z"/></svg>',
  'truck-fast': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="12" x="1" y="5" rx="2"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M17 13h5l2 3v1h-7v-4Z"/><path d="M2 2h3"/><path d="M1 8h2"/></svg>',
  'truck-ramp-box': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="12" x="1" y="5" rx="2"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  'van-shuttle': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="12" x="1" y="5" rx="2"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M17 13h5l2 3v1h-7v-4Z"/></svg>',

  // Trust, Verification & Ratings
  'shield-halved': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 22V2"/></svg>',
  'shield-heart': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8a2 2 0 0 0-2 2c0 2 2 3.5 2 3.5s2-1.5 2-3.5a2 2 0 0 0-2-2"/></svg>',
  'shield-virus': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><circle cx="12" cy="11" r="3"/></svg>',
  'building-shield': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><path d="M12 22s6-3 6-7v-4l-6-2-6 2v4c0 4 6 7 6 7Z"/></svg>',
  'circle-check': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
  'check': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  'check-double': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>',
  'star': '<svg class="svg-icon" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  'award': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  'medal': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',

  // Speed, Time & Math
  'stopwatch': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M10 2h4"/><path d="m17 7 2-2"/></svg>',
  'stopwatch-20': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M10 2h4"/></svg>',
  'clock': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'bolt': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  'bolt-lightning': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  'fire': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  'calculator': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',

  // Communication & Location
  'phone': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  'phone-volume': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14 2a8 8 0 0 1 8 8"/><path d="M14 6a4 4 0 0 1 4 4"/></svg>',
  'headset': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
  'envelope': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  'location-dot': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  'map-location-dot': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  'paper-plane': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  'message': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',

  // Forms, Boxes & Structure
  'file-pen': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/></svg>',
  'clipboard-list': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  'clipboard-check': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>',
  'boxes-stacked': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.89 1.45 8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.78 0l-8-4A2 2 0 0 1 2 16.76V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"/><polyline points="2.32 6.16 12 11 21.68 6.16"/><line x1="12" y1="22.76" x2="12" y2="11"/></svg>',
  'boxes-packing': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  'box-open': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>',
  'tag': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>',
  'tags': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"/></svg>',
  'magnifying-glass': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',
  'user': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  'building': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>',
  'house': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  'circle-info': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  'circle-question': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  'recycle': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.2a1.8 1.8 0 0 0 1.6-1 1.8 1.8 0 0 0 0-1.8L16.2 8"/><path d="m14 16 3 3 3-3"/><path d="M8.2 5a1.8 1.8 0 0 1 1.6-1h4.4a1.8 1.8 0 0 1 1.6 1l4.6 8"/></svg>',
  'ticket': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>',

  // Comprehensive Additional Section & Metric Icons
  'address-book': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"/><circle cx="12" cy="10" r="3"/><path d="M7 19c0-2 2-3 5-3s5 1 5 3"/></svg>',
  'book-open': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  'border-all': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/><path d="M12 3v18"/></svg>',
  'box-archive': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>',
  'briefcase': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  'building-circle-check': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><circle cx="18" cy="18" r="4"/><path d="m16 18 1.5 1.5 3-3"/></svg>',
  'building-user': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="12" height="18" x="2" y="3" rx="1"/><circle cx="18" cy="8" r="3"/><path d="M15 17c0-2 1.5-3 3-3s3 1 3 3"/></svg>',
  'calendar-check': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
  'cart-plus': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/><path d="M12 5v6"/><path d="M9 8h6"/></svg>',
  'chart-line': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
  'circle-nodes': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><line x1="8.7" x2="15.3" y1="10.7" y2="7.3"/><line x1="8.7" x2="15.3" y1="13.3" y2="16.7"/></svg>',
  'circle-notch': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10"/></svg>',
  'circle-radiation': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>',
  'clipboard-question': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M10.5 11a1.5 1.5 0 0 1 2.5 1c0 1-1.5 1.5-1.5 2"/><path d="M12 17h.01"/></svg>',
  'code-compare': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>',
  'compass': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  'compass-drafting': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="4" r="2"/><path d="m5 20 5-11 5 11"/><path d="M7 16h6"/></svg>',
  'cubes-stacked': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="8" height="8" x="2" y="14" rx="1"/><rect width="8" height="8" x="14" y="14" rx="1"/><rect width="8" height="8" x="8" y="2" rx="1"/></svg>',
  'diamond-turn-right': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="5" y="5" rx="2" transform="rotate(45 12 12)"/><path d="M10 14v-2a1 1 0 0 1 1-1h3"/><polyline points="13 8 16 11 13 14"/></svg>',
  'file-circle-check': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>',
  'file-contract': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" x2="16" y1="13" y2="13"/><line x1="8" x2="14" y1="17" y2="17"/></svg>',
  'file-invoice-dollar': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 12v6"/><path d="M10 14h3a1 1 0 0 1 0 2h-2a1 1 0 0 0 0 2h3"/></svg>',
  'file-lines': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" x2="16" y1="13" y2="13"/><line x1="8" x2="16" y1="17" y2="17"/></svg>',
  'file-waveform': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m8 15 2-4 2 6 2-3 2 1"/></svg>',
  'gift': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7" rx="1"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
  'graduation-cap': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  'handshake': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a2 2 0 0 0 0-2.8l-1.4-1.4"/><path d="m18 10 1.4-1.4a2 2 0 0 0 0-2.8L17 3.4a2 2 0 0 0-2.8 0L9.9 7.7"/><path d="m6 14 1.4 1.4a2 2 0 0 0 2.8 0L14 11.6"/><path d="m2 10 4.3 4.3a2 2 0 0 0 2.8 0l1.4-1.4"/></svg>',
  'hospital': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6v4"/><path d="M10 8h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/></svg>',
  'microscope': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18h8"/><path d="M3 22h18"/><path d="m14 22 3-3-3-3"/><path d="M9 14h2"/><path d="M9 12a4 4 0 0 1 4-4v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1"/></svg>',
  'network-wired': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="6" height="6" x="9" y="2" rx="1"/><rect width="6" height="6" x="16" y="16" rx="1"/><rect width="6" height="6" x="2" y="16" rx="1"/><path d="M12 8v5"/><path d="M5 16v-3h14v3"/></svg>',
  'palette': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.8-10-8.8Z"/></svg>',
  'plane-departure': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 22h20"/><path d="M6.3 15.6 19.5 8.2a2 2 0 0 0-1-3.7l-4.1.7L9.8 2 8 2.6l3 4.4-4.2.8L5 6.6 3.6 7l2.7 8.6Z"/></svg>',
  'receipt': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>',
  'rotate': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>',
  'rotate-right': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>',
  'route': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H12"/></svg>',
  'scale-balanced': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>',
  'school': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>',
  'sliders': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>',
  'spray-can-sparkles': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="8" height="14" x="4" y="8" rx="2"/><path d="M8 8V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3"/><path d="m16 4 1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/><path d="m19 13 .5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"/></svg>',
  'square-parking': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>',
  'stairs': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h4v-4h4v-4h4V8h4"/></svg>',
  'table-columns': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/></svg>',
  'table-list': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 9v12"/></svg>',
  'train-subway': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/><path d="m8 19-3 3"/><path d="m16 19 3 3"/></svg>',
  'water': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>',
  'wind': '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>'
};

// Replace <i> elements with vector SVGs
function renderSvgIcons() {
  const ignoreClasses = new Set([
    'solid', 'regular', 'brands', 'light', 'thin', 'duotone',
    'fa', 'fas', 'far', 'fab', 'fal', 'fat', 'fad',
    '2xl', 'xl', 'lg', 'sm', 'xs', 'fw', 'spin', 'pulse'
  ]);

  document.querySelectorAll('i').forEach(iconEl => {
    const classList = Array.from(iconEl.classList);
    for (const cls of classList) {
      if (cls.startsWith('fa-')) {
        const iconKey = cls.replace(/^fa-/, '');
        if (ignoreClasses.has(iconKey)) {
          continue;
        }

        if (SVG_ICONS[iconKey]) {
          const wrapper = document.createElement('span');
          wrapper.className = 'svg-icon-wrap';
          wrapper.innerHTML = SVG_ICONS[iconKey];

          // Forward parent styles & special classes
          if (iconEl.classList.contains('chevron-icon')) {
            wrapper.classList.add('chevron-icon');
          }

          iconEl.replaceWith(wrapper);
          break;
        }
      }
    }
  });
}

// Run immediately if DOM is ready, or on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onInit);
} else {
  onInit();
}

function onInit() {
  renderSvgIcons();
  initTheme();
  initDirection();
  initMobileMenu();
  initDropdowns();
  initActiveNav();
  initNewsletterForm();
  initFaqAccordions();
  initRefillFinder();
  initSavingsCalculator();
  initProductFilters();
  initEnquiryForm();
  initBlog();
}

/* --- THEME TOGGLE (Dark / Light) --- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('inkit_theme') || 'light';
  applyTheme(savedTheme, false);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme, true);
    });
  }
}

function applyTheme(theme, showNotification) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('inkit_theme', theme);

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    if (theme === 'dark') {
      themeToggleBtn.innerHTML = SVG_ICONS['sun'];
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
      themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      themeToggleBtn.innerHTML = SVG_ICONS['moon'];
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
      themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  }

  if (showNotification) {
    showToast(`Switched to ${theme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  }
}

/* --- DIRECTION TOGGLE (RTL / LTR) --- */
function initDirection() {
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const savedDir = localStorage.getItem('inkit_dir') || 'ltr';
  applyDirection(savedDir, false);

  if (rtlToggleBtn) {
    rtlToggleBtn.innerHTML = SVG_ICONS['right-left'];
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(newDir, true);
    });
  }
}

function applyDirection(dir, showNotification) {
  document.documentElement.setAttribute('dir', dir);
  localStorage.setItem('inkit_dir', dir);

  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  if (rtlToggleBtn) {
    if (dir === 'rtl') {
      rtlToggleBtn.setAttribute('title', 'Switch to LTR Mode');
      rtlToggleBtn.setAttribute('aria-label', 'Switch to LTR Mode');
      rtlToggleBtn.classList.add('active');
    } else {
      rtlToggleBtn.setAttribute('title', 'Switch to RTL Mode');
      rtlToggleBtn.setAttribute('aria-label', 'Switch to RTL Mode');
      rtlToggleBtn.classList.remove('active');
    }
  }

  if (showNotification) {
    showToast(`Direction updated to ${dir.toUpperCase()}`, 'info');
  }
}

/* --- MOBILE DRAWER NAVIGATION --- */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.innerHTML = SVG_ICONS['bars'];

    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.innerHTML = isOpen ? SVG_ICONS['xmark'] : SVG_ICONS['bars'];
    });

    const drawerLinks = mobileDrawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.innerHTML = SVG_ICONS['bars'];
      });
    });
  }
}

/* --- DROPDOWN ACCESSIBILITY & CLICK --- */
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dd => {
    const toggle = dd.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 868) {
          e.preventDefault();
          dd.classList.toggle('show');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.show').forEach(d => d.classList.remove('show'));
    }
  });
}

/* --- ACTIVE NAVIGATION ITEM HIGHLIGHTING --- */
function initActiveNav() {
  const path = window.location.pathname.toLowerCase();
  const page = path.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item, .mobile-nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const linkPage = href.split('/').pop().split('#')[0];
      if (linkPage === page || (page === '' && linkPage === 'index.html')) {
        link.classList.add('active');
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          const dropToggle = parentDropdown.querySelector('.dropdown-toggle');
          if (dropToggle) dropToggle.classList.add('active');
        }
      }
    }
  });
}

/* --- FAQ ACCORDION --- */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        const parentList = item.closest('.faq-list');
        if (parentList) {
          parentList.querySelectorAll('.faq-item').forEach(sibling => sibling.classList.remove('active'));
        }
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* --- NEWSLETTER FORM --- */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        showToast(`Thank you! ${input.value.trim()} is subscribed to Inkit refill offers!`, 'success');
        input.value = '';
      }
    });
  });
}

/* --- REFILL FINDER (Home 1) --- */
function initRefillFinder() {
  const finderBtn = document.getElementById('findRefillBtn');
  const resultBox = document.getElementById('finderResultBox');
  if (!finderBtn || !resultBox) return;

  const brandSelect = document.getElementById('finderBrand');
  const typeSelect = document.getElementById('finderType');
  const modelInput = document.getElementById('finderModel');

  finderBtn.addEventListener('click', () => {
    const brand = brandSelect ? brandSelect.value : 'HP';
    const type = typeSelect ? typeSelect.value : 'Laser Toner';
    const model = modelInput && modelInput.value.trim() ? modelInput.value.trim() : 'LaserJet 1020 / Pro M404';

    const refillPrice = type.includes('Laser') ? '$18.50' : '$9.90';
    const oemPrice = type.includes('Laser') ? '$68.00' : '$34.00';
    const savings = type.includes('Laser') ? '73%' : '71%';

    const titleEl = document.getElementById('resultCartridgeTitle');
    const priceEl = document.getElementById('resultRefillPrice');
    const oemEl = document.getElementById('resultOemPrice');
    const badgeEl = document.getElementById('resultSavingsBadge');

    if (titleEl) titleEl.textContent = `${brand} Compatible ${type} (${model})`;
    if (priceEl) priceEl.textContent = refillPrice;
    if (oemEl) oemEl.textContent = `OEM Price: ${oemPrice}`;
    if (badgeEl) badgeEl.textContent = `Save ${savings}`;

    resultBox.classList.add('active');
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(`Found compatible refill match for ${brand} ${model}!`, 'success');
  });
}

/* --- SAVINGS CALCULATOR --- */
function initSavingsCalculator() {
  const slider = document.getElementById('cartridgeSlider');
  const countDisplay = document.getElementById('cartridgeCountDisplay');
  const moneyDisplay = document.getElementById('calcMoneySaved');
  const plasticDisplay = document.getElementById('calcPlasticSaved');

  if (!slider) return;

  function updateCalc() {
    const val = parseInt(slider.value, 10);
    if (countDisplay) countDisplay.textContent = `${val} Cartridges / Month`;

    const annualSavings = val * 39 * 12;
    const annualPlastic = (val * 1.3 * 12).toFixed(1);

    if (moneyDisplay) moneyDisplay.textContent = `$${annualSavings.toLocaleString()}`;
    if (plasticDisplay) plasticDisplay.textContent = `${annualPlastic} kg`;
  }

  slider.addEventListener('input', updateCalc);
  updateCalc();
}

/* --- PRODUCT FILTERS & SEARCH --- */
function initProductFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const searchInput = document.getElementById('productSearchInput');
  const categorySelect = document.getElementById('productCategorySelect');

  if (!filterBtns.length && !productCards.length) return;

  function applyFilters() {
    const activeBtn = document.querySelector('.filter-btn.active');
    const selectedBrand = activeBtn ? activeBtn.getAttribute('data-brand') : 'all';
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCategory = categorySelect ? categorySelect.value : 'all';

    let visibleCount = 0;

    productCards.forEach(card => {
      const brand = card.getAttribute('data-brand') || '';
      const category = card.getAttribute('data-category') || '';
      const text = card.textContent.toLowerCase();

      const matchBrand = (selectedBrand === 'all' || brand.toLowerCase() === selectedBrand.toLowerCase());
      const matchCategory = (selectedCategory === 'all' || category.toLowerCase() === selectedCategory.toLowerCase());
      const matchSearch = (!searchTerm || text.includes(searchTerm));

      if (matchBrand && matchCategory && matchSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const emptyNotice = document.getElementById('noProductsNotice');
    if (emptyNotice) {
      emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  });

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (categorySelect) categorySelect.addEventListener('change', applyFilters);
}

/* --- ENQUIRY FORM (Contact Page) --- */
function initEnquiryForm() {
  const form = document.getElementById('enquiry-form-element') || (document.getElementById('enquiry-form')?.tagName === 'FORM' ? document.getElementById('enquiry-form') : document.querySelector('#enquiry-form form'));
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="customerName"]')?.value.trim();
    const phone = form.querySelector('[name="customerPhone"]')?.value.trim();
    const service = form.querySelector('[name="serviceType"]')?.value || 'Refill';

    if (!name || !phone) {
      showToast('Please fill in your name and contact phone number.', 'warning');
      return;
    }

    showToast(`Thank you, ${name}! Your refill request for ${service} has been received. Our technician will contact you within 15 minutes!`, 'success');
    form.reset();

    const confirmationBox = document.getElementById('formSuccessMessage');
    if (confirmationBox) {
      confirmationBox.style.display = 'block';
      confirmationBox.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* --- TOAST NOTIFICATION UTILITY --- */
function showToast(message, type) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  let iconSvg = SVG_ICONS['circle-info'] || '';
  if (type === 'success') {
    iconSvg = SVG_ICONS['circle-check'] || '';
  }

  toast.innerHTML = `
    <span style="color: #38bdf8; display: inline-flex; align-items: center;">${iconSvg}</span>
    <div style="flex: 1;">${message}</div>
    <button style="color: #94a3b8; font-size: 0.85rem;" aria-label="Close notification" onclick="this.parentElement.remove()">
      ${SVG_ICONS['xmark'] || '×'}
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4500);
}

/* Global helper export */
window.InkitApp = {
  showToast,
  SVG_ICONS
};


/* --- INKIT BLOG & INTERACTIVE ARTICLE READER SYSTEM --- */

const BLOG_ARTICLES = {
  'article-1': {
    id: 'article-1',
    title: 'The Definitive 2026 Fleet Guide: Laser Toner vs. Inkjet Refills — How Small Businesses Cut Overhead by 78%',
    category: 'Cost Optimization',
    readTime: '8 min read',
    date: 'November 2026',
    author: {
      name: 'David Vance',
      role: 'Chief Master Refill Technician',
      avatar: 'assets/images/logo-icon.png'
    },
    takeaways: [
      'Refilling high-yield monochrome toner cartridges delivers an average cost-per-page (CPP) of $0.004 compared to $0.028 for OEM cartridges.',
      'Modern pigment-based inkjet refills match OEM water resistance while eliminating 80% of single-use cartridge plastic.',
      'The US Magnuson-Moss Warranty Act strictly prevents printer OEMs from voiding machine warranties simply for using third-party refilled toner.',
      'Small offices with print volumes above 600 pages/month achieve highest ROI with remanufactured high-capacity laser toner hoppers.'
    ],
    contentHtml: `
      <p class="lead-text" style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); line-height: 1.7; margin-bottom: 1.5rem;">
        Every corporate accountant and office manager encounters the same shock: your modern multi-function printer was purchased for $280, but replacing four OEM toner cartridges sets the company back $450 every quarter. In 2026, printer manufacturers earn more than 85% of their gross hardware division profits from consumable lock-in. Here is our technician-verified breakdown of how laser toner and inkjet precision refilling truly compare.
      </p>

      <h2>1. Chemistry & Physics: Laser Toner vs. Inkjet Fluid</h2>
      <p>
        Laser toner is not liquid ink; it is a microscopic powder composed of polymer resins, magnetite, and carbon black pigments engineered to fuse to cellulose fibers at 180°C to 205°C via heated fuser rollers. Inkit's remanufacturing process replaces worn organic photoconductor (OPC) drums, installs micro-polished wiper blades, and fills the hopper with electrostatically matched polymer toner.
      </p>
      <p>
        Inkjet cartridges, conversely, utilize thermal or piezoelectric chambers that heat micro-nozzles to 300°C in microseconds, launching droplets as small as 1.5 picoliters. Precision refilling requires vacuum-degassed pigment or dye inks calibrated for exact surface tension (dynes/cm) and viscosity (centipoise).
      </p>

      <div class="callout-box tip">
        <span class="svg-icon-wrap" style="color: #10b981; font-size: 1.25rem;"><svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg></span>
        <div>
          <strong>Pro Technician Rule:</strong> Never mix dye and pigment inks in the same printer model. Dye dissolves completely in water (ideal for vivid color photos), whereas pigment suspends micro-particles (essential for razor-sharp, waterproof legal briefs). Inkit technicians always flush internal sponges with deionized fluid before introducing new formulation batches.
        </div>
      </div>

      <h2>2. True Cost-Per-Page (CPP) Comparison Study</h2>
      <p>
        We tracked 250,000 pages printed across 12 legal firms and medical practices in our regional testing network. Here is how genuine OEM cartridges compared to Inkit Precision Refills:
      </p>

      <div class="table-responsive-wrap" style="margin: 1.5rem 0 2rem 0;">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Printer Category & Cartridge</th>
              <th>OEM Standard Cost</th>
              <th>Inkit Certified Refill</th>
              <th>Monthly Savings (1,500 Pgs)</th>
              <th>Warranty Protection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>HP LaserJet Pro (CF258A / 58A)</strong></td>
              <td>$142.00 (3,000 pgs)</td>
              <td class="highlight-col">$38.00 (3,200 pgs)</td>
              <td><strong>$52.00 / month</strong></td>
              <td>100% Inkit Guarantee</td>
            </tr>
            <tr>
              <td><strong>Brother MFC Mono (TN-760)</strong></td>
              <td>$89.00 (3,000 pgs)</td>
              <td class="highlight-col">$26.00 (3,000 pgs)</td>
              <td><strong>$31.50 / month</strong></td>
              <td>100% Inkit Guarantee</td>
            </tr>
            <tr>
              <td><strong>Canon Pixma Color Pack (PG-245/CL-246)</strong></td>
              <td>$62.00 (300 pgs)</td>
              <td class="highlight-col">$19.00 (400 pgs)</td>
              <td><strong>$71.60 / month</strong></td>
              <td>100% Inkit Guarantee</td>
            </tr>
            <tr>
              <td><strong>Epson EcoTank 502 CMYK Set</strong></td>
              <td>$54.00 (6,000 pgs)</td>
              <td class="highlight-col">$22.00 (7,500 pgs)</td>
              <td><strong>$6.40 / month</strong></td>
              <td>100% Inkit Guarantee</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. The Legal Reality: Does Refilling Void Your Printer Warranty?</h2>
      <p>
        One of the most persistent myths pushed by printer OEM warning popups is that refilling your toner or ink voids your manufacturer warranty. Under the <strong>United States Magnuson-Moss Warranty Improvement Act (15 U.S.C. § 2302(c))</strong> and comparable European Union consumer protection directives, it is illegal for an OEM to condition warranty coverage on the exclusive use of brand-name consumables.
      </p>
      <p>
        A printer manufacturer can only deny a warranty repair if they can legally and forensically prove that a specific defect or mechanical failure was directly caused by an aftermarket consumable. At Inkit, we carry comprehensive product liability insurance and offer our own <strong>Total Printer Hardware Guarantee</strong>: if an Inkit-refilled cartridge ever damages your machine, our certified field engineers repair or replace the hardware at zero cost.
      </p>

      <h2>4. 4-Step Checklist for Maximizing Refill Lifespan</h2>
      <div class="step-procedure-card">
        <div class="step-procedure-number">1</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Refill Before the Chamber Runs Bone Dry</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            In thermal inkjet cartridges, liquid ink acts as a cooling agent for the heating resistors. Printing with an empty chamber burns out micro-resistors within 10-15 pages, making the nozzle plate non-refillable. Bring cartridges in when the first light streaks appear.
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">2</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Turn Off Automatic Firmware Updates</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Silent Wi-Fi firmware updates frequently alter the printer's crypto-handshake with smart chips. Disable "Auto Firmware Updates" in your printer's LCD touchscreen network settings to ensure uninterrupted cartridge recognition.
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">3</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Store Spares in Cool, Airtight Polybags</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Never leave spare cartridges sitting under direct sunlight or near HVAC heat vents. Ambient humidity between 40% and 60% prevents sponge drying and toner clump aggregation.
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">4</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Always Request Diagnostic Print Test Pages</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Every Inkit refill undergoes optical density densitometer testing and a 100% full-bleed test page printout before leaving our workshop so you never face unexpected lines or blotches.
          </p>
        </div>
      </div>

      <div class="callout-box warning" style="margin-top: 2rem;">
        <span class="svg-icon-wrap" style="color: #f59e0b; font-size: 1.25rem;"><svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
        <div>
          <strong>Avoid Dirt-Cheap Online Knockoffs:</strong> Generic $9 cartridges from untrusted overseas marketplaces frequently reuse brittle plastic casings and substandard abrasive powders that erode fuser rollers and leak into laser optics. Choose certified closed-loop remanufacturing with genuine OEM casings.
        </div>
      </div>
    `
  },

  'article-2': {
    id: 'article-2',
    title: 'How to Fix Clogged Printhead Nozzles at Home: The Safe, Solvent-Free Method',
    category: 'Cartridge Care',
    readTime: '6 min read',
    date: 'November 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Lead Hardware Specialist',
      avatar: 'assets/images/logo-icon.png'
    },
    takeaways: [
      'Never use rubbing alcohol, acetone, or household windex on printheads; harsh solvents permanently melt the microscopic silicone nozzle membranes.',
      'A warm distilled water steam and capillary bath safely liquefies dried ink crust without applying mechanical pressure.',
      'Built-in printer deep-clean cycles waste up to 25% of your ink supply per session; manual capillary soaking is 4x more effective.',
      'Integrated cartridges (HP & Canon 2-cartridge systems) can be revived in under 15 minutes with a warm paper towel compress.'
    ],
    contentHtml: `
      <p class="lead-text" style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); line-height: 1.7; margin-bottom: 1.5rem;">
        You turn on your printer after a two-week vacation, send an urgent boarding pass or contract to print, and the paper comes out with white horizontal streaks through every sentence. Dried ink in the nozzle plate is the single most common inkjet issue worldwide. Here is our lab-tested, solvent-free recovery protocol that will not destroy your expensive hardware.
      </p>

      <h2>1. Why Standard Clean Cycles Often Fail (And Waste Your Ink)</h2>
      <p>
        When you press "Deep Clean" in your printer maintenance software, the printer's internal purge pump forcefully pulls ink through all nozzles into a waste ink pad. While this clears minor air locks, it consumes up to <strong>20% to 25% of your full cartridge volume</strong> in a single cycle. Worse, if dried ink has formed a rock-hard crust over the micro-apertures, repeated pumping forces ink sideways, causing color bleeding and air suction pockets.
      </p>

      <h2>2. Step-by-Step Distilled Capillary Bath Method</h2>
      <div class="step-procedure-card">
        <div class="step-procedure-number">1</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Prepare Pure Distilled Water</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Do not use tap water! Tap water contains calcium, magnesium, and chlorine minerals that will crystallize inside the 15-micron nozzle openings as soon as the water evaporates. Warm 100ml of pure distilled water to approximately 45°C–50°C (comfortably warm to the touch, not boiling).
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">2</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">The Shallow Saucer Soak</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Fold a lint-free microfiber cloth or thick multi-ply paper towel into a shallow saucer and pour in warm distilled water so it is roughly 2mm to 3mm deep. Submerge ONLY the copper nozzle plate at the bottom. Keep the top electrical contact strip completely dry.
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">3</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Observe Capillary Bleeding</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Within 60 to 90 seconds, you will observe dried ink dissolving into the water towel, creating clear trails of black or cyan/magenta/yellow ink. Allow it to sit for 8 to 10 minutes.
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">4</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Dab, Dry, and Clean Contacts</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Gently dab the nozzle plate downward onto a dry paper towel. You should see a clean, rectangular ribbon of ink. Use an alcohol-free lens wipe to remove any fingerprint oils from the gold-plated electrical contacts on the back. Reinsert into the printer and run a standard single test page.
          </p>
        </div>
      </div>

      <h2>3. What About Permanent Printheads (Epson & Canon 5-Cartridge Systems)?</h2>
      <p>
        If your printer uses separate ink tanks where the printhead stays permanently inside the printer carriage, use a silicone tubing syringe filled with warmed distilled water. Gently flush 2ml through each color intake post until clear liquid drips into an absorbent paper towel laid beneath the carriage.
      </p>

      <div class="callout-box tip">
        <span class="svg-icon-wrap" style="color: #10b981; font-size: 1.25rem;"><svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg></span>
        <div>
          <strong>When to Visit Inkit:</strong> If your printhead nozzles remain stubborn after a 10-minute warm bath, bring your cartridge to our shop. Our ultrasonic frequency degreaser cleans micro-nozzles with 40 kHz cavitation waves that break stubborn crusts without touching the nozzle membrane.
        </div>
      </div>
    `
  },

  'article-3': {
    id: 'article-3',
    title: 'Demystifying Printer Firmware Updates & Microchip "Cartridge Depleted" Locks',
    category: 'Firmware & Chips',
    readTime: '7 min read',
    date: 'November 2026',
    author: {
      name: 'Marcus Chen',
      role: 'Firmware & Electronics Lead',
      avatar: 'assets/images/logo-icon.png'
    },
    takeaways: [
      'Printer OEMs push silent "Dynamic Security" firmware updates specifically engineered to reject third-party and refilled microchips.',
      'Disabling automatic cloud firmware updates on your printer preserves your freedom to use cost-effective refilled cartridges indefinitely.',
      'Inkit uses state-of-the-art Apex & Megacell hardware decoders to rewrite chip serial IDs so your printer recognizes full capacity.',
      'Bypassing the low ink warning popup is safe as long as physical ink is present inside the reservoir.'
    ],
    contentHtml: `
      <p class="lead-text" style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); line-height: 1.7; margin-bottom: 1.5rem;">
        You insert a freshly refilled cartridge, and the printer LCD displays a harsh red warning: "Non-HP Cartridge Detected" or "Cartridge Depleted / Replace Supplies". You know the cartridge is 100% full because you just had it refilled. What is happening under the hood, and how can you regain control of hardware you paid for?
      </p>

      <h2>1. The Architecture of Modern Smart Chips</h2>
      <p>
        Every modern printer cartridge contains a small printed circuit board (PCB) equipped with an EEPROM memory chip and cryptographic coprocessor. Contrary to popular belief, <strong>most cartridges have zero physical sensors measuring liquid ink volume</strong>. Instead, the printer calculates ink consumption using an algorithmic page counter: counting dot firings, print coverage percentages, and cleaning cycle purges.
      </p>
      <p>
        Once the counter reaches zero, the printer permanently burns a digital lockout bit into the cartridge chip, instructing the machine never to allow that specific serial ID to print again.
      </p>

      <h2>2. How Inkit Bypasses the Lockout Bit</h2>
      <p>
        At Inkit, our electronics lab utilizes specialized hardware reset tools:
      </p>
      <ul style="margin: 1rem 0 1.5rem 1.5rem; line-height: 1.8;">
        <li><strong>Physical EEPROM Flashing:</strong> We rewrite the serial number address on Brother, Canon, and Epson chips, making the printer recognize the cartridge as a fresh, unused factory unit.</li>
        <li><strong>Permanent Smart Chip Replacement:</strong> For locked HP and Xerox cartridges with irreversible cryptographic keys, we install our high-grade universal replacement chips that report 100% full yield to all printer firmware revisions.</li>
      </ul>

      <h2>3. How to Turn Off Automatic Firmware Updates (Brand by Brand)</h2>
      <div class="step-procedure-card">
        <div class="step-procedure-number">HP</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">HP OfficeJet & LaserJet Printers</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            On your printer touchscreen: Go to <strong>Setup (Gear) → Printer Maintenance → Update the Printer → Printer Update Options → Do Not Check → Select 'No'</strong> to turn off printer analytics.
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">Eps</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Epson Workforce & EcoTank Printers</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Open Windows Taskbar / Mac System Settings: Open <strong>Epson Software Updater → Auto Update Settings → Change interval from 'Every Week' to 'Never'</strong>.
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">Bro</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Brother MFC & HL Series</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Access printer IP in web browser: Go to <strong>Administrator Settings → Firmware Update → Automatic Firmware Update → Disable</strong>.
          </p>
        </div>
      </div>
    `
  },

  'article-4': {
    id: 'article-4',
    title: 'Epson EcoTank & Tank Inks: Why Dye vs. Pigment Chemistry Matters',
    category: 'Ink Chemistry',
    readTime: '5 min read',
    date: 'November 2026',
    author: {
      name: 'Sarah Jenkins',
      role: 'Ink Formulation Chemist',
      avatar: 'assets/images/logo-icon.png'
    },
    takeaways: [
      'Dye-based ink is water-soluble and provides brilliant, wide-gamut photo prints on glossy paper.',
      'Pigment ink uses solid microscopic color particles that bond permanently with paper fibers for archival, highlighter-proof legal text.',
      'Mixing dye and pigment inks inside the same fluid reservoir causes chemical coagulation and permanent printhead clogging.',
      'Inkit bottle refills are precision matched to exact manufacturer surface tension and viscosity specifications.'
    ],
    contentHtml: `
      <p class="lead-text" style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); line-height: 1.7; margin-bottom: 1.5rem;">
        Continuous ink tank printers like Epson EcoTank, Canon MegaTank, and HP Smart Tank have transformed home and small office printing. However, bottle refilling introduces a critical chemistry choice that many users overlook: the fundamental distinction between dye-based and pigment-based ink formulas.
      </p>

      <h2>1. The Molecular Difference</h2>
      <p>
        <strong>Dye Ink:</strong> The colorant is 100% chemically dissolved in water, similar to sugar dissolved in tea. When printed, dye ink absorbs deeply into the paper fibers. It delivers spectacular optical vibrancy, rich shadow gradation, and ultra-smooth skin tones, making it the favorite for family photography and artistic prints. However, it will smudge if exposed to water or highlighters.
      </p>
      <p>
        <strong>Pigment Ink:</strong> The colorant consists of microscopic solid polymer-encapsulated particles suspended in a carrier fluid. When fired through the nozzle, the fluid evaporates while the pigment particles anchor to the surface of the paper. Pigment prints are 100% waterproof, UV fade-resistant for up to 100 years, and immune to fluorescent highlighter bleed.
      </p>

      <div class="callout-box warning">
        <span class="svg-icon-wrap" style="color: #f59e0b; font-size: 1.25rem;"><svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
        <div>
          <strong>The Danger of Cross-Contamination:</strong> If you pour pigment ink into a tank previously containing dye ink (or vice-versa), the pH and electrical polarity mismatch causes the pigment particles to coagulate into a sticky gel, clogging the 20-micron piezo channels irreparably. Always verify your bottle code with an Inkit technician before topping up!
        </div>
      </div>
    `
  },

  'article-5': {
    id: 'article-5',
    title: 'The Circular Economy: Where 300 Million Discarded Cartridges Go & The Inkit Closed-Loop Model',
    category: 'Eco Sustainability',
    readTime: '5 min read',
    date: 'November 2026',
    author: {
      name: 'Tara O\'Connor',
      role: 'Sustainability Director',
      avatar: 'assets/images/logo-icon.png'
    },
    takeaways: [
      'More than 375 million ink and toner cartridges are tossed into landfills annually, taking 450 to 1,000 years to decompose.',
      'Manufacturing a single new laser toner cartridge consumes over 3 quarts of crude petroleum oil.',
      'A precision-remanufactured cartridge can be refilled up to 5 to 7 times with zero degradation in print quality.',
      'Inkit\'s zero-landfill e-waste program guarantees that 100% of non-refillable components are recycled into raw industrial materials.'
    ],
    contentHtml: `
      <p class="lead-text" style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); line-height: 1.7; margin-bottom: 1.5rem;">
        Every second, 11 printer cartridges are thrown into garbage bins worldwide. That translates into more than 1,000,000 cartridges per day ending up in municipal landfills. Because printer casings are engineered from high-grade industrial polymers (ABS, polyphenylene ether, and high-impact polystyrene) designed to withstand heat and pressure, they resist natural degradation for over ten centuries.
      </p>

      <h2>1. The Raw Resource Footprint</h2>
      <p>
        Manufacturing just one brand-new laser toner cartridge requires:
      </p>
      <ul style="margin: 1rem 0 1.5rem 1.5rem; line-height: 1.8;">
        <li><strong>3.25 Quarts of Crude Oil:</strong> Used as feedstock for virgin plastics and energy.</li>
        <li><strong>2.5 Pounds of Refined Metal:</strong> Aluminum drum rollers, copper contacts, and steel gear assemblies.</li>
        <li><strong>4.8 Kilograms of CO2 Greenhouse Gases:</strong> Emitted during overseas factory processing and international shipping.</li>
      </ul>

      <h2>2. Inkit’s 4-Stage Closed Loop Remanufacturing Process</h2>
      <p>
        When you bring an empty cartridge to Inkit, it enters our zero-landfill circular remanufacturing workflow:
      </p>
      <div class="step-procedure-card">
        <div class="step-procedure-number">1</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Chamber Decontamination & Cleaning</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Residual toner waste is extracted using negative-pressure HEPA vacuums, and inkjet sponge chambers are flushed with warm deionized steam.
          </p>
        </div>
      </div>
      <div class="step-procedure-card">
        <div class="step-procedure-number">2</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">High-Stress Component Replacement</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            We replace worn OPC drums, wiper blades, PCR charge rollers, and microchips with brand-new precision hardware.
          </p>
        </div>
      </div>
      <div class="step-procedure-card">
        <div class="step-procedure-number">3</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Gram-Precision Digital Injection</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Automated microprocessor scales inject the exact gram weight of polymer toner or vacuum-degassed ink to match original factory specifications.
          </p>
        </div>
      </div>
      <div class="step-procedure-card">
        <div class="step-procedure-number">4</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Certified Quality Page Testing</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Each cartridge prints an ISO/IEC 19752 diagnostic page verifying grayscale gradient uniformity and optical density before being sealed in moisture-proof packaging.
          </p>
        </div>
      </div>
    `
  },

  'article-6': {
    id: 'article-6',
    title: 'OPC Drum Unit vs. Toner Hopper: Diagnosing Streaks, Repeating Dots & Gray Haze',
    category: 'Laser Toner',
    readTime: '6 min read',
    date: 'November 2026',
    author: {
      name: 'David Vance',
      role: 'Chief Master Refill Technician',
      avatar: 'assets/images/logo-icon.png'
    },
    takeaways: [
      'Understanding the difference between the toner cartridge (powder reservoir) and drum unit (imaging cylinder) saves hundreds in misdiagnosed replacements.',
      'Repeating spots at exact equal distances down the page indicate a physical scratch on the organic photoconductor (OPC) drum cylinder.',
      'A faint gray haze across the entire page background points to an old, worn primary charge roller (PCR) or incorrect bias voltage.',
      'Brother printers separate the drum from the toner; replacing the toner does not fix drum scratches!'
    ],
    contentHtml: `
      <p class="lead-text" style="font-size: 1.15rem; font-weight: 500; color: var(--text-main); line-height: 1.7; margin-bottom: 1.5rem;">
        "I just put in a brand new toner, and I'm still getting black streaks down the edge of every printed page!" Our support hotline hears this complaint weekly. In many laser printers (particularly Brother, Lexmark, and Panasonic), the toner cartridge and the imaging drum unit are two separate mechanisms. Knowing which part is failing prevents expensive guesswork.
      </p>

      <h2>1. The Two-Part Architecture Explained</h2>
      <p>
        <strong>The Toner Cartridge (TN):</strong> The plastic container that holds the dry toner powder. It features internal agitator paddles and a developer roller that charges the toner particles.
      </p>
      <p>
        <strong>The Drum Unit (DR):</strong> The photosensitive aluminum cylinder coated in green or blue organic photoconductor (OPC) film. Laser beams write electrostatic images onto this cylinder, which attracts the toner particles and transfers them onto paper before passing into the heated fuser.
      </p>

      <h2>2. Visual Diagnostic Cheat-Sheet</h2>
      <div class="step-procedure-card">
        <div class="step-procedure-number">A</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Symptom: Repeating Dots Down the Page</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            Measure the vertical distance between the repeating marks with a ruler. If the distance is approximately <strong>75mm to 94mm</strong>, the OPC drum has a pinhole scratch from a staple or paperclip. Solution: Replace the OPC drum cylinder, not the toner cartridge!
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">B</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Symptom: Solid Black Vertical Line Along the Margin</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            A nick in the rubber wiper blade has allowed excess toner to escape the waste collection hopper, depositing an unbroken line of toner. Solution: Inkit replaces the wiper blade and empties the waste sump during standard servicing.
          </p>
        </div>
      </div>

      <div class="step-procedure-card">
        <div class="step-procedure-number">C</div>
        <div>
          <h4 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">Symptom: Gray Background Fog or Shading</h4>
          <p style="margin: 0; font-size: 0.925rem; color: var(--text-muted);">
            The primary charge roller (PCR) is failing to maintain negative electrostatic potential, or poor quality generic toner with incompatible dielectric resistance was used. Solution: Clean or replace the PCR and flush the hopper with OEM-spec polymer toner.
          </p>
        </div>
      </div>
    `
  }
};

function initBlog() {
  const blogContainer = document.getElementById('articles-grid');
  if (!blogContainer && !document.getElementById('inpageArticleViewer')) return;

  const viewer = document.getElementById('inpageArticleViewer');
  const searchInput = document.getElementById('blogSearchInput');
  const categoryChips = document.querySelectorAll('.category-chip');
  const articleCards = document.querySelectorAll('.article-card');
  const noArticlesNotice = document.getElementById('noArticlesNotice');

  // 1. Article Open / Close Logic
  function openArticle(articleId) {
    const article = BLOG_ARTICLES[articleId];
    if (!article || !viewer) return;

    // Populate data
    document.getElementById('viewerCategory').textContent = article.category;
    document.getElementById('viewerTitle').textContent = article.title;
    document.getElementById('viewerDate').textContent = article.date;
    document.getElementById('viewerReadTime').textContent = article.readTime;
    document.getElementById('viewerAuthorName').textContent = article.author.name;
    document.getElementById('viewerAuthorRole').textContent = article.author.role;
    
    const avatarEl = document.getElementById('viewerAuthorImg');
    if (avatarEl) avatarEl.src = article.author.avatar;

    // Takeaways
    const takeawaysList = document.getElementById('viewerTakeawaysList');
    if (takeawaysList) {
      takeawaysList.innerHTML = article.takeaways.map(item => `
        <li>
          <span class="svg-icon-wrap" style="color: var(--primary); font-size: 1.1rem; flex-shrink: 0; margin-top: 2px;">
            ${SVG_ICONS['circle-check'] || '✓'}
          </span>
          <span>${item}</span>
        </li>
      `).join('');
    }

    // Body HTML
    const contentEl = document.getElementById('viewerContentBody');
    if (contentEl) {
      contentEl.innerHTML = article.contentHtml;
    }

    // Show viewer and scroll
    viewer.classList.add('active');
    viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update URL hash without reload
    try {
      history.replaceState(null, '', `#article-${articleId}`);
    } catch (e) {}

    showToast(`Opening article: "${article.title.substring(0, 38)}..."`, 'info');
  }

  function closeArticle() {
    if (!viewer) return;
    viewer.classList.remove('active');
    
    const articlesSection = document.getElementById('articles-section') || document.getElementById('articles-grid');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
      history.replaceState(null, '', window.location.pathname);
    } catch (e) {}
  }

  // Attach event listeners to all Read More buttons & Featured buttons
  document.querySelectorAll('[data-article-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const articleId = btn.getAttribute('data-article-id');
      openArticle(articleId);
    });
  });

  // Attach event listeners to back buttons
  document.querySelectorAll('.back-to-articles-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeArticle();
    });
  });

  // 2. Category Filter Logic
  let activeCategory = 'all';
  function filterArticles() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    articleCards.forEach(card => {
      const cardCat = (card.getAttribute('data-category') || '').toLowerCase();
      const cardTitle = (card.querySelector('.article-title')?.textContent || '').toLowerCase();
      const cardExcerpt = (card.querySelector('.article-excerpt')?.textContent || '').toLowerCase();

      const matchCat = (activeCategory === 'all' || cardCat.includes(activeCategory));
      const matchSearch = (!query || cardTitle.includes(query) || cardExcerpt.includes(query) || cardCat.includes(query));

      if (matchCat && matchSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noArticlesNotice) {
      noArticlesNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = (chip.getAttribute('data-category') || 'all').toLowerCase();
      filterArticles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterArticles);
  }

  // 3. Diagnostics Matrix Tab Switcher (Section 4)
  const diagTabs = document.querySelectorAll('.diag-tab-btn');
  const diagCards = document.querySelectorAll('.diag-detail-card');
  diagTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      diagTabs.forEach(t => t.classList.remove('active'));
      diagCards.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const targetCard = document.getElementById(targetId);
      if (targetCard) targetCard.classList.add('active');
    });
  });

  // 4. Helpful Feedback Buttons
  document.querySelectorAll('.feedback-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('voted')) return;
      btn.classList.add('voted');
      const countSpan = btn.querySelector('.count');
      if (countSpan) {
        let current = parseInt(countSpan.textContent, 10) || 0;
        countSpan.textContent = current + 1;
      }
      showToast('Thank you! Your feedback helps us improve Inkit technical guides.', 'success');
    });
  });

  // 5. Check if URL hash matches an article on load
  const currentHash = window.location.hash;
  if (currentHash && currentHash.startsWith('#article-')) {
    const reqId = currentHash.replace('#article-', '');
    if (BLOG_ARTICLES[reqId]) {
      setTimeout(() => openArticle(reqId), 250);
    }
  }
}
