interface OptionButtonProps {
    text: string;
    isSelected: boolean;
    disabled?: boolean;
    onClick: () => void;
}

export default function OptionButton({
    text,
    isSelected,
    disabled = false,
    onClick
}: OptionButtonProps) {
    return (
        <button
            className={`option ${isSelected ? "selected" : ""}`}
            onClick={onClick}
            disabled={disabled}
            aria-pressed={isSelected}
        >
            {text}
        </button>
    );
}
