"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from 'next/image';
import styles from './page.module.css';
import { ButtonsCard } from "../../../components/ui/tailwindcss-buttons";

const Members = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720); // Set isMobile based on viewport width
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to render Navbar or NavbarMobile based on viewport width
  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };

  const members = [
    {
      name: "Abhay Singh",
      description: "Coordinator",
      linkedin: "https://www.linkedin.com/in/singhabhay1/",
      // twitter: "https://x.com/THEBLACKEYES09",
      instagram: "http://instagram.com/mostlyastro",
      gmail: "mailto:21bec003@iiitdmj.ac.in",
      image: "/coordinator.jpg"
    },
    {
      name: "Shuvam Patra",
      description: "Graphic and Media Lead",
      linkedin: "https://www.linkedin.com/in/shuvam-patra-157b50229/",
      twitter: "https://x.com/THEBLACKEYES09",
      instagram: "https://www.instagram.com/blackeyesandblue09/",
      gmail: "mailto:shuvampatra2003@gmail.com",
      image: "/shuvam.jpg"
    },
    {
      name: "Abhinav Kumar",
      description: "Telescope Operator Lead",
      linkedin: "https://www.linkedin.com/in/abhinav-kumar-8b6008247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/i.g_abhinav?igsh=OGt2cnJ4cGluZnFs",
      gmail: "mailto:igabhinav.2003@gmail.com",
      image: "/abhinav.jpg"
    },
    {
      name: "Haritha Murukutla",
      description: "Core Team Member",
      linkedin: "http://www.linkedin.com/in/haritha-murukutla-a6b48722a",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/mysti_thoughts?igsh=MTFpN2NiMm9vNzN4MA==",
      gmail: "mailto:hareethamurukutla@gmail.com",
      image: "/harita.jpg"
    },
    {
      name: "Gaurav Manjhi",
      description: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/gaurav-manjhi/",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/gauravmanjhi07?utm_source=qr&igsh=MWJibG04eG1zMXlxbg==",
      gmail: "mailto:gauravmanjhi2002@gmail.com",
      image: "/gaurav.jpg"
    },
    {
      name: "Aditya Gupta",
      description: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/aditya-gupta-1b4aa4257/",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/adi.ayt?igsh=djY4OHcxNGI0cmF6",
      gmail: "mailto:guptaaditya1801@gmail.com",
      image: "/aditya.jpg"
    },
    {
      name: "Abhishek Gupta",
      description: "Core Team Member",
      linkedin: "https://www.linkedin.com/in/abhishek-gupta-584530228/",
      // twitter: "https://twitter.com/johndoe",
      // instagram: "https://instagram.com/johndoe",
      gmail: "mailto:abhishekgupta020702@gmail.com",
      image: "/abhishek.jpg"
    },
    {
      name: "Alok Rai",
      description: "Co-Coordinator",
      linkedin: "http://linkedin.com/in/alok-rai158",
      // twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/158alokrai?igsh=bm9nbXp1eW84aHhs",
      gmail: "mailto:22bec010@iiitdmj.ac.in",
      image: "/cocoordinator.jpg"
    },
    // {
    //   name: "John Doe",
    //   description: "Software Engineer",
    //   linkedin: "https://linkedin.com/in/johndoe",
    //   twitter: "https://twitter.com/johndoe",
    //   instagram: "https://instagram.com/johndoe",
    //   gmail: "mailto:johndoe@gmail.com",
    //   image: "/path/to/image9.jpg"
    // },

  ];

  return (
    <div className="main">
      <div className="relative w-full flex items-center justify-end top-2">
        {renderNavbar()}
      </div>

      <div className="logo">
        <Image src="/membersbanner.png" alt="banner" width={1000} height={1000} layout="responsive" />
      </div>



      <div style={{
        backgroundImage: 'url(/9.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '50%',
        transition: 'background-position 0.5s ease',
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}>

        <h1 className="font-jetbrains-mono text-4xl text-white text-center pb-10">
          THE CREW
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          {members.map((member, index) => (
            <div key={index} className="bg-gray-600 shadow-md rounded-lg p-4 backdrop-blur-md bg-opacity-30 border-2 border-white/[0.2] ">
              <div className="header h-72 bg-gray-200 rounded-md mb-4 backdrop-blur-md bg-opacity-60">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              {/* <div className="relative w-full h-full">
                
              </div> */}
              <h2 className="font-jetbrains-mono font-bold text-neutral-200 dark:text-neutral-200 mb-2 mt-2">{member.name}</h2>
              <p className="font-sans font-normal text-teal-400 text-xs dark:text-neutral-300">{member.description}</p>
              <div className="flex space-x-4 mt-4 mb-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="x.png" alt="Twitter" className="w-4 h-4" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="instagram.png" alt="Instagram" className="w-4 h-4" />
                </a>
                <a href={member.gmail} target="_blank" rel="noopener noreferrer" className="mr-2">
                  <img src="/gmail.png" alt="Gmail" className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="abouttext flex flex-row justify-center">
        <div className="pt-20 pb-20 pl-32 pr-32 w-1/2">
          <h1 className="font-jetbrains-mono text-4xl text-white pb-4">WANNA JOIN US?</h1>
          <p className="text-teal-400 mb-6">Wanna be a part of The Astronomy And Physics Society? Don't worry. Here we are giving you the opportunity!!!
          </p>
          <TailwindcssButtons/>
        </div>
        <div className="bg-cover flex align-middle relative  w-1/2">
          <Image className="mr-20" src="/3.jpg" alt="about" layout="fill" objectFit="cover" />
        </div>
      </div>


      <footer className="bg-teal-900">
        <div className="max-w-8xl  py-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 ml-10  md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Contact Us</h3>
              <p className="mt-4 font-normal text-teal-400" >52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, <br />
                Khamaria, Jabalpur, Chakdehi, Madhya Pradesh 482005</p>
              {/*UNDER DEVELOPMENT PHASE <p className="mt-2 font-normal gray-400">Phone: 123-456-7890</p> */}
              <p>Email: astronomy@iiitdmj.ac.in</p>
            </div>
            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Links</h3>
              <ul className="mt-4 grid grid-cols-2 space-y-2 text-teal-400 font-normal">

                <li><a href="/about">About Us</a></li>
                <li><a href="/sessions">Sessions</a></li>
                <li><a href="/form">Form</a></li>
                <li><a href="/members">Members</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/forms">Forms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Social Media</h3>
              <ul className="mt-4 space-y-2  text-teal-400 font-normal">
                <li><a href="https://instagram.com/aps_iiitdmj">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/astronomy-and-physics-society/">LinkedIn</a></li>
                <li><a href="https://www.youtube.com/@AstronomyandPhysicsSociety">YouTube</a></li>
              </ul>
            </div>

            <div className="logo  ">
              <Image src="/footsticker.png" alt="logo" width={300} height={300} className={styles.rotate} />
            </div>
            {/* <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Newsletter</h3>
                <p className="mt-4">Subscribe to our newsletter to receive updates and news.</p>
                <form className="mt-2">
                  <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 rounded-md bg-gray-800 text-white" />
                  <button type="submit" className="mt-2 py-2 px-4 bg-teal-400 text-white rounded-md">Subscribe</button>
                </form>
              </div> */
            }

          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 APS | All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30 mb-10", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        {/* <HoveredLink href="/contact">Contact Us</HoveredLink> */}
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/sessions">Sessions</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/form">Form</HoveredLink>
        {/* <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-6 text-s">
            <HoveredLink href="/events">Events</HoveredLink>
            <HoveredLink href="/form">Form</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}

//landing button component starts here
export function TailwindcssButtons() {

  return (
    <div >
      {buttons.map((button, idx) => (
        <ButtonsCard key={idx}>
          {button.component}
        </ButtonsCard>
      ))}
    </div>
  );
}
export const buttons = [
  {
    component: (
      <button className="shadow-[0_0_0_3px_teal-400_inset] px-6 py-2 bg-transparent border border-teal-400 dark:border-teal-400 dark:text-teal-400 text-teal-400 font-bold transform hover:-translate-y-1 transition duration-400 hover:border-white hover:text-white">
        Join Us
      </button>
    ),
  },
]
//landing button component ends here

export default Members
