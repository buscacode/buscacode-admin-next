import type { Metadata } from 'next';
import Image from 'next/image'
import { Encode_Sans_Expanded } from 'next/font/google';

const font = Encode_Sans_Expanded({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Authenticacion | Buscauth',
  description: 'Sitio para utenticarse en Buscauth.',
}


const AuthLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <section>
      <div>
        <figure>
          <Image
            src="/assets/images/buscauth-logo.svg"
            width={129.711}
            height={117.821}
            alt="Logo de Buscauth"
          />
          <figcaption>
            <h2>
              BUSCAUTH
            </h2>
          </figcaption>
        </figure>

        <div >
          {children}
        </div>
      </div>
    </section>
  )
}

export default AuthLayout;
