import infofesta from "@/data/info";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="bg-hunter-green text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link href="#inicio" className="flex items-center space-x-4">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src="/images/santa.png"
                                    alt="Logo Santa Luzia"
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                    priority
                                />
                            </div>
                            <div>
                                <span className="block font-display text-white text-lg leading-tight">
                                    Capela
                                </span>
                                <span className="block font-display text-white text-xl font-bold leading-tight">
                                    Santa Luzia
                                </span>
                            </div>
                        </Link>
                        <p className="text-white pt-4 text-sm leading-relaxed">
                            Celebrando a fé e fortalecendo nossa comunidade através da festa
                            de Santa Luzia.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-lg text-parchment mb-4">
                            Navegação
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#inicio"
                                    className="text-white hover:text-yellow-green transition-colors duration-200 text-sm"
                                >
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#programacao"
                                    className="text-white hover:text-yellow-green transition-colors duration-200 text-sm"
                                >
                                    Programação
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#barracas"
                                    className="text-white hover:text-yellow-green transition-colors duration-200 text-sm"
                                >
                                    Barracas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#galeria"
                                    className="text-white hover:text-yellow-green transition-colors duration-200 text-sm"
                                >
                                    Galeria
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#localizacao"
                                    className="text-white hover:text-yellow-green transition-colors duration-200 text-sm"
                                >
                                    Localização
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#rifa"
                                    className="text-white hover:text-yellow-green transition-colors duration-200 text-sm"
                                >
                                    Rifa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-lg text-parchment mb-4">
                            Contato
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <svg
                                    className="w-5 h-5 text-yellow-green mt-0.5 flex-shrink-0"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-white">
                                    {infofesta.endereco.rua}, {infofesta.endereco.numero}
                                    <br />
                                    {infofesta.endereco.bairro} - {infofesta.endereco.cidade}/
                                    {infofesta.endereco.estado}
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg
                                    className="w-5 h-5 text-yellow-green mt-0.5 flex-shrink-0"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a
                                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                                    className="text-white hover:text-yellow-green transition-colors duration-200"
                                >
                                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg
                                    className="w-5 h-5 text-yellow-green mt-0.5 flex-shrink-0"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <a
                                    href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                                    className="text-white hover:text-yellow-green transition-colors duration-200"
                                >
                                    {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-lg text-parchment mb-4">
                            Redes Sociais
                        </h4>
                        <p className="text-white text-sm mb-4">
                            Siga-nos para ficar por dentro de todas as novidades!
                        </p>
                        <div className="flex gap-3">
                            {infofesta.redesSociais.facebook && (
                                <a
                                    href={infofesta.redesSociais.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-asparagus rounded-full flex items-center justify-center hover:bg-yellow-green transition-colors duration-300"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            )}
                            {infofesta.redesSociais.instagram && (
                                <a
                                    href={infofesta.redesSociais.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-asparagus rounded-full flex items-center justify-center hover:bg-yellow-green transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            )}
                            {infofesta.redesSociais.youtube && (
                                <a
                                    href={infofesta.redesSociais.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-asparagus rounded-full flex items-center justify-center hover:bg-yellow-green transition-colors duration-300"
                                    aria-label="YouTube"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t border-hunter-green-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white text-sm text-center md:text-left">
                            © {anoAtual} Paróquia Santa Luzia - Tubarão/SC. Todos os direitos
                            reservados.
                        </p>
                        <p className="text-white text-sm text-center md:text-right">
                            Desenvolvido por{" "}
                            <a
                                href="https://wa.me/5548991155026"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-white transition-colors"
                            >
                                Pedro Paulo
                            </a>
                            , para a comunidade
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}