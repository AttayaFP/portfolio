import Image from "next/image"
import { User } from "lucide-react"

export default function about() {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black to-blue-950">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center ">
            <div className="md:w-1/2 animate-slideInLeft">
              <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-blue-500/30">
                <Image src="/assets/images/6.jpeg" alt="About Me" fill className="object-cover" />
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>
            </div>

            <div className="md:w-1/2 animate-slideInRight">
              <div className="flex items-center space-x-2 mb-6">
                <User className="h-5 w-5 text-blue-400" />
                <h2 className="text-2xl font-bold">Tentang saya</h2>
                <div className="h-px bg-blue-500 flex-grow ml-3"></div>
              </div>

              <h3 className="text-3xl font-bold mb-6">Pengembang yang bersemangat menciptakan pengalaman digital yang menakjubkan</h3>

              <div className="space-y-4 text-gray-300">
                <p>
                Dengan pengalaman lebih dari 5 tahun dalam pengembangan web, saya telah mengerjakan berbagai proyek mulai dari situs web bisnis kecil hingga aplikasi perusahaan besar.
                </p>
                <p>
                Pendekatan saya menggabungkan keahlian teknis dengan pemecahan masalah yang kreatif untuk memberikan solusi yang tidak hanya berfungsi dengan sempurna tetapi juga memberikan pengalaman pengguna yang luar biasa.
                </p>
                <p>
                Saat saya tidak sedang membuat kode, Anda dapat menemukan saya menjelajahi teknologi baru, berkontribusi pada proyek sumber terbuka, atau menikmati aktivitas luar ruangan.
                </p>
              </div>            
            </div>
          </div>
        </div>
      </section>
    )
}