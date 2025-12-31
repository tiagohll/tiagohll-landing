interface StepProps {
    number: string;
    title: string;
    description: string;
    isLast?: boolean;
}
export default function Step({
    number,
    title,
    description,
}: StepProps) {
    return (
        <div className="relative flex gap-6 md:gap-10 group">
            <div className="flex-1 pb-10">
                <div className="rounded-3xl p-px bg-gradient-to-tr from-primary/70 hover:from-primary hover:to-primary hover:via-primary via-bprimary to-bprimary duration-200">
                    <div className="bg-bprimary border rounded-[calc(1.5rem-1px)] border-white/10 p-6 duration-300">
                        <div className="group flex flex-col md:flex-row md:items-center gap-4 duration-200">
                            {/* Número com Degradê */}
                            <span className="text-3xl font-bold bg-gradient-to-br from-white/40 to-white/10 group-hover:from-white group-hover:to-white bg-clip-text text-transparent opacity-50 hover:opacity-100 font-mono duration-4000">
                                {number}
                            </span>

                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold text-white">
                                    {title}
                                </h3>
                                <p className="text-gray-400 mt-1">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
