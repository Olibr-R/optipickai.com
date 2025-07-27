"use client"

import Image from "next/image"

export default function CompanyLogos() {
  const companyLogos = [
    {
      src: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a395a12aaf3_logo-01.svg",
      alt: "Company Logo 1",
    },
    {
      src: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ae38212aaf1_logo-03.svg",
      alt: "Company Logo 2",
    },
    {
      src: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a411512aaf4_logo-04.svg",
      alt: "Company Logo 3",
    },
    {
      src: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ade1612aaf2_logo-02.svg",
      alt: "Company Logo 4",
    },
    {
      src: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a3cd712aaf6_logo-05.svg",
      alt: "Company Logo 5",
    },
    {
      src: "https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a85fd12aaf5_logo-08.svg",
      alt: "Company Logo 6",
    },
  ]

  return (
    <section className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Trusted by industry leaders</p>
        </div>

        <div className="relative">
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Infinite scrolling container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-12 lg:space-x-16">
              {/* First set of logos */}
              {companyLogos.map((logo, index) => (
                <div key={`first-${index}`} className="flex items-center justify-center flex-shrink-0 group">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="h-8 lg:h-10 w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
                    style={{ maxHeight: "40px", minWidth: "80px" }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((logo, index) => (
                <div key={`second-${index}`} className="flex items-center justify-center flex-shrink-0 group">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="h-8 lg:h-10 w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
                    style={{ maxHeight: "40px", minWidth: "80px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          
          @media (max-width: 768px) {
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
