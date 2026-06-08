



import React, { useState } from 'react'
import "./index.css"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [facilityOpen, setFacilityOpen] = useState(false)
  const [admissionOpen, setAdmissionOpen] = useState(false)

  const openNav = () => {
    setClosing(false)
    setNavOpen(true)
  }

  const closeNav = () => {
    setClosing(true)
    setTimeout(() => {
      setNavOpen(false)
      setClosing(false)
      setAboutOpen(false)
      setFacilityOpen(false)
      setAdmissionOpen(false)
    }, 350)
  }

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <div className="p-5 hidden xl:flex justify-center">
        <ul className='flex justify-center items-center gap-20 text-white font-sans text-[1rem]'>
          <li><a href="#">Home</a></li>

          <li className='relative cursor-pointer'
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            About&nbsp;us
            {aboutOpen && (
              <ul className="absolute grid text-center gap-1 border-2 border-black animate__animated animate__fadeInDown -translate-x-8 mt-1 bg-white text-black font-serif rounded-2xl p-3 z-10 w-max">
                <li><a href="#" className='hover:underline hover:underline-offset-4 transition-all'>Principal's&nbsp;desk</a></li>
                <li><a href="#" className='hover:underline hover:underline-offset-4 transition-all'>Gallery</a></li>
              </ul>
            )}
          </li>

          <li className='relative cursor-pointer'
            onMouseEnter={() => setFacilityOpen(true)}
            onMouseLeave={() => setFacilityOpen(false)}
          >
            Facility
            {facilityOpen && (
              <ul className="absolute grid text-center gap-1 border-2 border-black animate__animated animate__fadeInDown -translate-x-8 mt-1 bg-white text-black font-serif rounded-2xl p-3 z-10 w-max">
                <li><a href="#" className='hover:underline hover:underline-offset-4 transition-all'>Smart&nbsp;Classrooms</a></li>
                <li><a href="#" className='hover:underline hover:underline-offset-4 transition-all'>Library</a></li>
              </ul>
            )}
          </li>

          <li className='relative cursor-pointer'
            onMouseEnter={() => setAdmissionOpen(true)}
            onMouseLeave={() => setAdmissionOpen(false)}
          >
            Admission
            {admissionOpen && (
              <ul className="absolute grid text-center gap-1 border-2 border-black animate__animated animate__fadeInDown -translate-x-8 mt-1 bg-white text-black font-serif rounded-2xl p-3 z-10 w-max">
                <li><a href="#" className='hover:underline hover:underline-offset-4 transition-all'>Apply&nbsp;Now</a></li>
                <li><a href="#" className='hover:underline hover:underline-offset-4 transition-all'>Fee&nbsp;Structure</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* ── HAMBURGER BUTTON ── */}
      <button
        className="xl:hidden fixed top-10 right-5 bg-transparent border-none cursor-pointer"
        style={{ zIndex: 9999 }}
        onClick={navOpen ? closeNav : openNav}
        aria-label="Toggle menu"
      >
        {navOpen || closing ? (
          <span className='text-white font-bold text-[2rem] leading-none'>&times;</span>
        ) : (
          <span className='text-white font-bold text-[1.2rem] tracking-widest'
            style={{ writingMode: 'vertical-rl' }}>|||</span>
        )}
      </button>

      {/* ── MOBILE NAV PANEL ── */}
      {(navOpen || closing) && (
        <div
          className={`xl:hidden fixed top-0 right-0 h-screen bg-blue-400 p-6 pt-20 animate__animated ${closing ? 'animate__fadeOutRight' : 'animate__fadeInRight'}`}
          style={{ width: '72vw', maxWidth: '320px', zIndex: 9998 }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.25rem' }}>

            {/* Home */}
            <li>
              <a href="#" onClick={closeNav}
                style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '1rem', display: 'block' }}>
                Home
              </a>
            </li>

            {/* About Us */}
            <li>
              <div
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  color: 'white', fontFamily: 'sans-serif', fontSize: '1rem',
                  cursor: 'pointer', userSelect: 'none'
                }}
                onClick={() => setAboutOpen(p => !p)}
              >
                <span>About us</span>
                <span style={{ fontSize: '0.75rem' }}>{aboutOpen ? '▲' : '▼'}</span>
              </div>
              {aboutOpen && (
                <div style={{
                  marginTop: '0.5rem', background: 'white', borderRadius: '1rem',
                  border: '2px solid black', padding: '0.75rem',
                  display: 'grid', gap: '0.5rem'
                }}>
                  <a href="#" style={{ display: 'block', color: 'black', fontFamily: 'serif', textDecoration: 'none', padding: '4px 0' }}
                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                    Principal's desk
                  </a>
                  <a href="#" style={{ display: 'block', color: 'black', fontFamily: 'serif', textDecoration: 'none', padding: '4px 0' }}
                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                    Gallery
                  </a>
                </div>
              )}
            </li>

            {/* Facility */}
            <li>
              <div
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  color: 'white', fontFamily: 'sans-serif', fontSize: '1rem',
                  cursor: 'pointer', userSelect: 'none'
                }}
                onClick={() => setFacilityOpen(p => !p)}
              >
                <span>Facility</span>
                <span style={{ fontSize: '0.75rem' }}>{facilityOpen ? '▲' : '▼'}</span>
              </div>
              {facilityOpen && (
                <div style={{
                  marginTop: '0.5rem', background: 'white', borderRadius: '1rem',
                  border: '2px solid black', padding: '0.75rem',
                  display: 'grid', gap: '0.5rem'
                }}>
                  <a href="#" style={{ display: 'block', color: 'black', fontFamily: 'serif', textDecoration: 'none', padding: '4px 0' }}
                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                    Smart Classrooms
                  </a>
                  <a href="#" style={{ display: 'block', color: 'black', fontFamily: 'serif', textDecoration: 'none', padding: '4px 0' }}
                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                    Library
                  </a>
                </div>
              )}
            </li>

            {/* Admission */}
            <li>
              <div
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  color: 'white', fontFamily: 'sans-serif', fontSize: '1rem',
                  cursor: 'pointer', userSelect: 'none'
                }}
                onClick={() => setAdmissionOpen(p => !p)}
              >
                <span>Admission</span>
                <span style={{ fontSize: '0.75rem' }}>{admissionOpen ? '▲' : '▼'}</span>
              </div>
              {admissionOpen && (
                <div style={{
                  marginTop: '0.5rem', background: 'white', borderRadius: '1rem',
                  border: '2px solid black', padding: '0.75rem',
                  display: 'grid', gap: '0.5rem'
                }}>
                  <a href="#" style={{ display: 'block', color: 'black', fontFamily: 'serif', textDecoration: 'none', padding: '4px 0' }}
                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                    Apply Now
                  </a>
                  <a href="#" style={{ display: 'block', color: 'black', fontFamily: 'serif', textDecoration: 'none', padding: '4px 0' }}
                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                    Fee Structure
                  </a>
                </div>
              )}
            </li>

          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar


