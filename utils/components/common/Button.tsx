

interface ButtonComponentProps{
    btnClass:string,
    btnName:string,
}

const ButtonComponent : React.FC<ButtonComponentProps>= ({btnClass,btnName}) => {
    return (
        <>

            <button type="button" className={`${btnClass} btn rounded-3 align-self-center `} > {btnName}</button>
        </>
    );
};

export default ButtonComponent;
