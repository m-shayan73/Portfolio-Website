import "./animations.scss";

let empty_spaces = 0;

const handleAnimationEnd = (e) => {
    const letter = e.target;
    letter.style["opacity"] = `1`;
    letter.style["animation"] = `none`;
    letter.classList.add("hover_enabled");
};

// eslint-disable-next-line react/prop-types
export default function AnimatedLetters ({ word, start_delay }) {
  return (
    <>
      {Array.from(word).map((char, idx) => {
        if (char !== " ") {
          return (
            <span
              key={start_delay + idx}
              className={`animated_letter _${start_delay + idx - empty_spaces}`}
              onAnimationEnd={handleAnimationEnd}
            >
              {char}
            </span>
          );
        }
        empty_spaces++;
        return <span key={start_delay + idx}>{char}</span>;
      })}
    </>
  );
}