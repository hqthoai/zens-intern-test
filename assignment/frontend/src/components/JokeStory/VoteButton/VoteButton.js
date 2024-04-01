function VoteButton(props) {
    const { content, color } = props
    return (
        <button className="p-4 md:min-w-[280px] min-w-[126px] text-white border-b-[3px] border-b-[#00000030] bg-clip-border active:scale-95" style={{ backgroundColor: color }}>
            {content}
        </button>
    );
}

export default VoteButton;