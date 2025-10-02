import { FaInstagram, FaLinkedin } from "react-icons/fa";
import echoLogo from "../assets/echo-logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 mt-auto z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="font-semibold">echo Consulting</p>
          <a className="text-sm underline" href="mailto:consulting@echo.uib.no">
            consulting@echo.uib.no
          </a>
          <p className="text-sm">Thormøhlens gate 55, 5006 Bergen</p>
        </div>

        <div className="mt-6 text-center flex flex-col items-center">
          <a
            href="https://echo.uib.no/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src={echoLogo} alt="echo logo" className="mb-2 w-20 h-auto" />
          </a>
          <p className="text-sm">
            En undergruppe av echo - Linjeforeningen for informatikk
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-center md:text-left">
          <p className="font-semibold mb-1">Følg oss</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-1">
            <a
              href="https://www.linkedin.com/company/echo-consulting-uib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/echo_consulting_no"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
