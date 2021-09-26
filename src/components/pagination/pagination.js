import React, { useEffect } from 'react';

const Pagination = (props) => {
    // set selected page to page number 1
    const [selectedPage, setSelectedPage] = React.useState(1);

    // update page selection
    const updateSelectedPage = (e) => {
        const selectedPage = parseInt(e.target.innerText);
        setSelectedPage(selectedPage);
        props.pageClicked(selectedPage);
    }

    // update page number when props changed
    useEffect(()=>{
        setSelectedPage(1);
    },[props.pages]);
    
    const getPageList = (number) => {
        const list = []
        for (var i = 0; i < number; i++) {
            const classNames = i+1 === selectedPage ? "page-item active" : "page-item";
            list.push(<li key={i} className={classNames} ><a className ="page-link" onClick={updateSelectedPage}>{i+1}</a></li>)
        }
        return list;
    }
    if (props.pages) {
        return (
            <div className="d-flex ">
                <ul className="pagination m-4">
                    {getPageList(props.pages)}
                </ul>
            </div>
        )
    } else {
        return <React.Fragment />
    }
}

export default Pagination;
