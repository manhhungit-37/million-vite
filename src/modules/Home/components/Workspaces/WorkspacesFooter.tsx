import QuoteIcon from "@icons/Home/Quote";
import classNames from "classnames";
import useOnScreen from "hooks/useOnScreen";
import { block } from "million/react";
import { useRef } from "react";

const WorkspacesFooter = block(() => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="w-full flex px-7 tablet-max:px-12 mb-10 max-w-[1256px] mx-auto">
      <div className="relative flex-1 border border-l-0 border-b-0 border-r-orange-01 border-t-orange-01 h-[200px] w-full">
        <div className={classNames("absolute w-14 h-14 -right-7 -top-7 transition-all duration-1000 opacity-0 scale-50", {
          'opacity-100 transform-none': isVisible,
        })}>
          <QuoteIcon />
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
});

export default WorkspacesFooter;