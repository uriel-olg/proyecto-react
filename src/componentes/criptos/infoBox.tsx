interface InfoProps {
    title: string;
    children: React.ReactNode;
}

export function InfoBox({ title,children}: InfoProps) {
    return (
        <div className="bg-gradient-to-br from-[#0a0f2d] to-[#11183d]  p-4 rounded-lg flex flex-col gap-1">
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-xl font-semibold">{children}</p>
        </div>
    );
}