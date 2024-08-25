import { ReactNode, FC } from "react";
interface ContainerProps {
    children: ReactNode;
  }
const Container : React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl:2xl ">
        {children}
      </div>

    )
}

export default Container