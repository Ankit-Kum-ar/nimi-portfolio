import { useEffect } from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  useEffect(() => {
    document.title = title; // Update the browser tab title
  }, [title]);

  return null; // This component does not render anything
};

export default Title;