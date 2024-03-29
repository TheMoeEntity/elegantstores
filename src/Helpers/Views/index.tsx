
export const scrollTopView = (scrollBtn: React.MutableRefObject<HTMLDivElement | null>, scrollTop: () => void): JSX.Element => {
    return (
        <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
            <i className="fa-solid fa-angle-up"></i>
        </div>
    )
}