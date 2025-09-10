interface ProgressProps {
    current: number;
    total: number;
}

export default function Progress({ current, total }: ProgressProps) {
    return <p className="progress">Fråga {current + 1} av {total}</p>;
}
