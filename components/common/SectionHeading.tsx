const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
  const [firstWord, lastWord] = title.split(" ");

  return (
    <h2 className="p-10 table mt-0 mb-50 mx-auto border-4 border-text uppercase border-r-primary font-semibold text-36 lineHeight-40 relative before:content-[''] before:absolute before:w-3/4 before:h-4 before:bg-primary before:-top-4 before:-right-4 after:content-[''] after:absolute after:w-1/2 after:h-4 after:bg-primary after:-bottom-4 after:-right-4">
      {firstWord} <span className="text-primary">{lastWord}</span>
    </h2>
  );
};

export default SectionHeading;
