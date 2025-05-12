import { Phone, Mail, Facebook, MapPin, Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-6">
      <div className="mx-auto flex max-w-4xl flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
        {/* Información de contacto */}
        <div className="flex flex-col space-y-1 text-sm">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>TEL: 054-11-4951-1000</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>MAIL: ventasduris@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>Pasteur 322 – Ciudad de Buenos Aires – República Argentina</span>
          </div>
          
        </div>
        
        {/* Redes sociales */}
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Facebook size={20} />
          </a>
        </div>
        
      </div>
      <div className="flex items-center justify-center space-x-2 px-6 mt-4">
        <Copyright size={16} /> <span>Kuper_xx | 2025</span>
      </div>
    </footer>
  );
}
