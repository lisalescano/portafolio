'use client'

export default function Card() {
    return (
        <a href="https://frontelectroemporium.vercel.app/" className="group relative block bg-black w-64 h-80"> 
  <img
    alt=""
    src="electroemporium.png"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-2 sm:p-3 lg:p-4"> 
    <p className="text-xs font-medium uppercase tracking-widest text-orange-500">Frontend</p> 
    <p className="text-sm font-bold text-white sm:text-base">Electro-Emporium</p> 

    <div className="mt-20 sm:mt-28 lg:mt-36"> 
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-xs text-white">
          Desempeñe el rol de frontend y me encargue de realizar el formulario para guardar un nuevo producto en la base de datos
          y poder ser mostrado en el catalogo para su futura venta
        </p>
      </div>
    </div>
  </div>
</a>
    )
}