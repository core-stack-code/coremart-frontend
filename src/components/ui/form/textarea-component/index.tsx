import * as React from "react"

import { cn } from "@/lib/utils"
import Icon from "../../icons";
import { Textarea } from "../../textarea";



interface TextAreaComponentProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string | null | undefined;
  wrapperClassName?: string;
}



const TextareaComponent = React.forwardRef<HTMLTextAreaElement, TextAreaComponentProps>(
  ({ error, wrapperClassName, ...props
  }, ref
  ) => {
    return (
      <>
        <div className="flex flex-col gap-1 min-h-16">
          <Textarea
            ref={ref}
            className={cn(
              "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[0px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm p-4 border border-[var(--color-border)] rounded-[var(--border-radius)] resize-none",
              wrapperClassName,

            )}
            {...props}
          />
          <div
            className={cn(
              "flex h-full w-full items-center gap-1 py-1 flex-1 mx-1",
              error ? "opacity-100" : "opacity-0",
            )}
          >
            <Icon name="crossIcon" width={9} height={9} fill="#EF4444" />
            <p className="text-xs text-error transition-opacity duration-300 ease-in-out">              {error}
            </p>
          </div>
        </div>
      </>
    )
  });

TextareaComponent.displayName = "TextareaComponent"
export default TextareaComponent
