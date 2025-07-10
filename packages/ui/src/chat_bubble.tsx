interface BubbleType {
  text: string;
  initiator: "sender" | "reciever";
}

export default function ChatBubble({ text, initiator }: BubbleType) {
  const isSender = initiator === "sender";

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
      <span
        className={`inline-block ${
          isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        } mt-3 rounded-xl px-4 py-2 max-w-xs break-words`}
      >
        {text}
      </span>
    </div>
  );
}