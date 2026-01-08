import React from "react";

export function ColorButton({ color, onSelect }) {
  return (
    <button
      className="w-6 h-6 rounded-lg"
      // ここから下に背景色にcolorを指定するコードを書いてください
      // また、クリックされた時にonSelectにcolorを渡してください
      onClick={() => onSelect(color)}
      style={{ backgroundColor: color }}
    />
  );
}
