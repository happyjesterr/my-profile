import { useState, useEffect } from "react";
import PropTypes from "prop-types";
const AnimatedText = ({ text }) => {
  const [currentText, setCurrentText] = useState([]);
  const [fixedIndex, setFixedIndex] = useState(-1);
  const lettersAndNumbers =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    const initialText = Array.from({ length: text.length }, () =>
      lettersAndNumbers.charAt(
        Math.floor(Math.random() * lettersAndNumbers.length)
      )
    );
    setCurrentText(initialText);

    const interval = setInterval(() => {
      setFixedIndex((prevIndex) => {
        if (prevIndex >= text.length - 1) {
          clearInterval(interval);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [text, lettersAndNumbers]);

  useEffect(() => {
    const randomInterval = setInterval(() => {
      setCurrentText((prevText) =>
        prevText.map((char, i) => {
          if (i <= fixedIndex) {
            return text[i];
          }
          return lettersAndNumbers.charAt(
            Math.floor(Math.random() * lettersAndNumbers.length)
          );
        })
      );
    }, 100);

    return () => clearInterval(randomInterval);
  }, [fixedIndex, text, lettersAndNumbers]);

  return (
    <div className="title-container   uppercase">
      <div className=" prve:block hidden  text-center   ">
        <div>
          {currentText.slice(0, 6).map((char, index) => (
            <span
              className={`  display-1 !text-6xl ${
                index <= fixedIndex ? "glow " : ""
              }`}
              key={index}
            >
              {char}
            </span>
          ))}
          {/* لعرض كلمة "Mohamed" */}
        </div>
        <div className="-mt-3">
          {currentText.slice(8).map((char, index) => (
            <span
              className={`  display-1 !text-6xl ${
                index + 8 <= fixedIndex ? "glow " : ""
              }`}
              key={index}
            >
              {char}
            </span>
          ))}{" "}
          {/* لعرض كلمة "Sadek" */}
        </div>
      </div>
      <div className="prve:hidden">
        {currentText.map((char, index) => {
          // إذا كان الحرف مسافة (بين الكلمتين)، نعرضه كما هو
          if (index === 7) {
            return (
              <span className="display-1 " key={index}>
                &nbsp;
              </span>
            );
          }

          // الحروف المثبتة لن يتم إعادة طباعتها
          return (
            <span
              key={index}
              className={`  display-1 ${index <= fixedIndex ? "glow " : ""}`}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};
AnimatedText.propTypes = {
  text: PropTypes.string.isRequired, // تحديد أن 'text' يجب أن يكون نصًا
};
export default function Name() {
  return <AnimatedText text="Mohamed Sadek" />;
}
