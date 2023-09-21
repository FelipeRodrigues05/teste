import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "px-4 bg-slate-600 text-white rounded-full hover:brightness-50 transition duration-300",
  variants: {
    color: {
      primary: "bg-indigo-600 text-white",
      danger: "bg-red-500 text-white",
      warning: "bg-amber-500 text-black",
      secundary: "bg-zinc-500 text-white",
    },
    size: {
      sm: "text-sm h-8 px-4",
      md: "text-md h-10 px-5",
      lg: "text-lg h-12 px-7",
      xl: "text-xl h-14 px-9",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export default function Button({ size, color, ...props }: ButtonProps) {
  return (
    <>
      <button {...props} className={button({ size, color })}></button>
    </>
  );
}
