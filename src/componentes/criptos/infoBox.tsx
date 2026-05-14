interface InfoProps {
    title: string;
    children: React.ReactNode;
}

export function InfoBox({ title,children}: InfoProps) {
    return (
        <div className="bg-black/20 border border-white/10 rounded-2xl
                                backdrop-blur-md p-5 shadow-lg shadow-black/20">
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-xl font-semibold">{children}</p>
        </div>
    );
}