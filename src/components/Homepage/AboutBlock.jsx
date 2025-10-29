import { Block } from "./Block";

export const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-3xl leading-snug">
      <p>
        I build things that solve problems.{" "}
        <span className="text-zinc-400">
          I'm a frontend developer who's passionate about creating solutions.
          Proficient in frontend technologies that bring creative ideas to
          code.
        </span>
      </p>
    </Block>
  );
};
