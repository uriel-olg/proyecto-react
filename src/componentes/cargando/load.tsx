export const Load = () => {
return (
        
        <div className="flex flex-col justify-center items-center ">
        <div className="relative w-20 h-20">

            {/* Círculo base */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>

            {/* Borde animado tipo web moderna */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 border-t-transparent animate-spin" />

        </div>

        <p className="text-gray-300 mt-4 text-2xl tracking-wide animate-pulse">
            Cargando...
        </p>
        </div>
    );
};