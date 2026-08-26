import { Code } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-themes";
import { useEffect, useState } from "react";

const Canvas = () => {
  const [aiActive, setAiActive] = useState(false);
  const [question, setQuestion] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [solved, setSolved] = useState(false);
  const [warning, setWarning] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const initialCode = `function solution() {// Type your code here}`;
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.puter?.ai?.chat) {
        setAiActive(true);
        clearInterval(checkReady);
      }
    }, 300);

    return () => {
      clearInterval(checkReady);
    };
  }, []);

  const handleDifficulty = (level) => {
    setDifficulty(level);
    if (warning) setWarning("");
  };

  const generateQuestion = async () => {
    const coachLevels = ["Beginner", "Intermediate", "Expert"];

    if (!coachLevels.includes(difficulty)) {
      setWarning(
        "Please select a difficulty level before generating a question",
      );
      return;
    }

    setWarning("");
    setLoading(true);
    setFeedback("");
    setSolved(false);
    setCode(initialCode);
    setQuestion(null);

    try {
        const res = await window.puter?.ai?.chat(``)
    } catch (err) {
      setFeedback(`Error: ${err instanceof Error ? err.message : String(err)}`)
      setLoading(false)
    }
  };

  const checkSolution = async () => {};

  return <div></div>;
};

export default Canvas;
